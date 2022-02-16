
# 利用 shader 实现旗帜飘荡

## 效果
哇 gif 慢了好几倍 [视频地址](https://github.com/lulu-s/lulu-book/blob/master/assets/video/video.mp4)
![红旗](https://github.com/lulu-s/lulu-book/blob/master/assets/video/input.gif)

## 创建一个 plane
```js
const geometry = new three.PlaneGeometry(1, 1, 50, 50);
const material = new three.MeshPhysicalMaterial({ 
    color: 0x665533, 
    side: three.DoubleSide,
    transparent: true,
    blending: three.AdditiveBlending,
    // roughness: 0,
    // metalness: 0.5,
    // envMap: shared.assets.env_warehouse.data
    map: ao.threeLoadTexture(this.data.src)
});
const plane = new three.Mesh(geometry, material);
```


## 使用 onBeforeCompile 


### 创建 uniforms 
* 存储要送入 shader 处理的参数，格式是 `name: {value: 'value'}`
```js
var uniforms = {
    time: { value: 1.0 }
}
```

* 根据我的片面理解，`vertexShader` 用来处理坐标，`fragmentShader` 用来处理颜色，并且将其输出到浏览器可见的位置

### 使用 onBeforeCompile
通过 onBeforeCompile 可以打印出在未执行 GPU 计算之前 shader 包含的数据。
```js
material.onBeforeCompile = (shader)=>{
    // 处理 shader 的代码片段
    console.log(shader)
    // 并且需要把准备处理的数据传入到 shader 的 uniforms，不能直接赋值。
    // 比如 shader.uniforms = uniforms，因为 shader.uniforms 里还有其他变量？
    // 我也是问了这个问题才想到的可能的答案，感觉当时问这个问题的自己太傻。
    shader.uniforms.time = uniforms.time;
}
```


### 展开 vertexShader 或 fragmentShader 的引用库（来源于 [Mike Luan](https://github.com/luan007)）
通过以下方法将 `#include` 释放出来，便于学习和处理。
```js
export function threeExpandShaderIncludes(s) {
    const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function resolveIncludes(string) {

        return string.replace(includePattern, includeReplacer);

    }
    function includeReplacer(match, include) {
        const string = three.ShaderChunk[include];

        if (string === undefined) {

            throw new Error('Can not resolve #include <' + include + '>');

        }
        return resolveIncludes(string);
    }
    return resolveIncludes(s);
}
threeExpandShaderIncludes(shader.vertexShader)
```




## `shader.vertexShader` 的数据是什么

###  `console.log(shader.vertexShader)`导出的数据

```glsl
#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}
```




### 解析数据

`#include <begin_vertex>` 代表的是引入的库名字叫 `begin_vertex`，既然是库就有源文件 <br/>

可以在谷歌搜索，或者在 [Github Threejs](https://github.com/mrdoob/three.js) 全局搜索源码，就知道引入的到底是什么 <br/>

搜索后会发现，大部分库引入地址在 [ShaderChunk](https://github.com/mrdoob/three.js/tree/master/src/renderers/shaders/ShaderChunk)  /  [ShaderChunk.js](https://github.com/mrdoob/three.js/blob/master/src/renderers/shaders/ShaderChunk.js) 中记载<br/>

在 *ShaderChunk* 中搜索 `begin_vertex` 找到 [begin_vertex.glsl.js](https://github.com/mrdoob/three.js/blob/master/src/renderers/shaders/ShaderChunk/begin_vertex.glsl.js) 源文件就知道它写了什么 <br/>



## 实现彩旗飘啊飘 (vertexShader)

### 前期思路
* 观察 `main()` 发现变量 `transformed` 记录了最后一步坐标的变量，此时要看在哪里处理更方便。通过源码搜索到在`begin_vertex.glsl.js` 文件内定义的，那么就在 `#include <begin_vertex>` 之后处理红旗飘啊飘的坐标偏移。

* 通过字符串拆分的方式，拆分上下文 `shader.vertexShader.split('#include <begin_vertex>')` ，使用 `.join('#include <begin_vertex> + 处理的代码')` 连接上下代码，需要将 `#include <begin_vertex>` 插回去。

### 处理的代码
* 首先在 loop 里递增时间变量 time
```js
requestAnimationFrame( v => {
    uniforms.time.value += 0.01;
})
```

* 回到 `shader` 中，通过 `+= 5` 的方式查看 plane 发生的变化，实现了 plane 的 z 轴偏移。
```glsl
transformed.z += 5;
```

* 旗帜的飘动要靠远近关系，利用 sin() 函数测试运动轨迹
```glsl
transformed.z = sin(time);
```

* *此处需要手绘图表公式*

* 利用 y 轴进行 sin 操作（公式: `sin(时间 * 频率 + x轴 or y轴) * 强度`）
```glsl
transformed.z = sin(time * 2.0 + transformed.y) * 0.13;
```
* 叠加 x 轴 sin 操作（公式: `sin(时间 * 频率 + x轴 or y轴) * 强度`）
```glsl
transformed.z += sin(time * 1.0 + transformed.x) * 0.13;
```

* 叠加 noise 对 x + y 轴的律动，需要在头部引用 Noise，一些大神们写好的 [Noise 算法](https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83)
```
transformed.z += noise(vec3(transformed.y * 5.0 + time * 2.8, transformed.x * 5.0, time * 1.3)) * 0.2;
```

* 最后要顶部固定，需要一个衰减公式，就完成了红旗飘啊飘
```
transformed.z *= (position.y - 0.5)
```

* 在 `vertexShader` 头部定义一个变量 `varying float displace;`，`varying` 类型的变量可以直接传输到 `fragmentShader`，用于传输 z 轴发生的变化，根据 z 轴进行光影变化，越大越暗，越小越亮。修改以上的代码。
```
displace = (position.y - 0.5) * 
    ( sin(time * 2.0 + transformed.y) * 0.13 
        + sin(time * 1.0 + transformed.x) * 0.13 
        + noise(vec3(transformed.y * 5.0 + time * 2.8, transformed.x * 5.0, time * 1.3)) * 0.2
    );
transformed.z = displace;
```

### vertexShader 源码
```js
shader.vertexShader = `
    uniform float time;
    varying float displace;
    
    float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

    float noise(vec3 p){
        vec3 a = floor(p);
        vec3 d = p - a;
        d = d * d * (3.0 - 2.0 * d);

        vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
        vec4 k1 = perm(b.xyxy);
        vec4 k2 = perm(k1.xyxy + b.zzww);

        vec4 c = k2 + a.zzzz;
        vec4 k3 = perm(c);
        vec4 k4 = perm(c + 1.0);

        vec4 o1 = fract(k3 * (1.0 / 41.0));
        vec4 o2 = fract(k4 * (1.0 / 41.0));

        vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
        vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

        return o4.y * d.y + o4.x * (1.0 - d.y);
    }
` + shader.vertexShader;
    
shader.vertexShader = shader.vertexShader.split("#include <begin_vertex>").join(`
    #include <begin_vertex>
    displace = (position.y - 0.5) * (sin(time * 2.0 + transformed.y) * 0.13 + sin(time * 1.0 + transformed.x) * 0.13 + noise(vec3(transformed.y * 5.0 + time * 2.8, transformed.x * 5.0, time * 1.3)) * 0.2);
    transformed.z = displace;
`);
```

## 实现伪光影效果 (fragmentShader)


### 思路
根据 z 轴进行光影变化，越大越暗，越小越亮，并且不要暗到完全没有。

### 处理的代码
* 首先头部先引用变量 displace 
```
varying float displace;
```
* 首先创建一个变量 brightness，用来接收 displace。要注意 displace 可能是负的，要进行 0 - 1 的范围限制。
```
float brightness = max(0.0, min(1.0, 0.5 + displace * 2.0));
```
* 明暗强度的关系，要暗的不要全黑。对其进行最低 0.07 的限制。
```
brightness *= 0.8 + 0.07;
```
* 进行强度变化，数值差异更明显，小的更小，大的更大。然后赋值给原生颜色变量。
```
brightness += pow(max(displace, 0.0) * 3.0, 4.0) * 15.0;
gl_FragColor *= vec4(vec3(brightness), 1.0);
```

### fragmentShader 源码
```
shader.fragmentShader = `
    #define STANDARD
    #ifdef PHYSICAL
        #define IOR
        #define SPECULAR
    #endif
    uniform vec3 diffuse;
    uniform vec3 emissive;
    uniform float roughness;
    uniform float metalness;
    uniform float opacity;
    varying float displace;
    #ifdef IOR
        uniform float ior;
    #endif
    #ifdef SPECULAR
        uniform float specularIntensity;
        uniform vec3 specularColor;
        #ifdef USE_SPECULARINTENSITYMAP
            uniform sampler2D specularIntensityMap;
        #endif
        #ifdef USE_SPECULARCOLORMAP
            uniform sampler2D specularColorMap;
        #endif
    #endif
    #ifdef USE_CLEARCOAT
        uniform float clearcoat;
        uniform float clearcoatRoughness;
    #endif
    #ifdef USE_SHEEN
        uniform vec3 sheenColor;
        uniform float sheenRoughness;
        #ifdef USE_SHEENCOLORMAP
            uniform sampler2D sheenColorMap;
        #endif
        #ifdef USE_SHEENROUGHNESSMAP
            uniform sampler2D sheenRoughnessMap;
        #endif
    #endif
    varying vec3 vViewPosition;
    #include <common>
    #include <packing>
    #include <dithering_pars_fragment>
    #include <color_pars_fragment>
    #include <uv_pars_fragment>
    #include <uv2_pars_fragment>
    #include <map_pars_fragment>
    #include <alphamap_pars_fragment>
    #include <alphatest_pars_fragment>
    #include <aomap_pars_fragment>
    #include <lightmap_pars_fragment>
    #include <emissivemap_pars_fragment>
    #include <bsdfs>
    #include <cube_uv_reflection_fragment>
    #include <envmap_common_pars_fragment>
    #include <envmap_physical_pars_fragment>
    #include <fog_pars_fragment>
    #include <lights_pars_begin>
    #include <normal_pars_fragment>
    #include <lights_physical_pars_fragment>
    #include <transmission_pars_fragment>
    #include <shadowmap_pars_fragment>
    #include <bumpmap_pars_fragment>
    #include <normalmap_pars_fragment>
    #include <clearcoat_pars_fragment>
    #include <roughnessmap_pars_fragment>
    #include <metalnessmap_pars_fragment>
    #include <logdepthbuf_pars_fragment>
    #include <clipping_planes_pars_fragment>
    void main() {
        #include <clipping_planes_fragment>
        vec4 diffuseColor = vec4( diffuse, opacity );
        ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
        vec3 totalEmissiveRadiance = emissive;
        #include <logdepthbuf_fragment>
        #include <map_fragment>
        #include <color_fragment>
        #include <alphamap_fragment>
        #include <alphatest_fragment>
        #include <roughnessmap_fragment>
        #include <metalnessmap_fragment>
        #include <normal_fragment_begin>
        #include <normal_fragment_maps>
        #include <clearcoat_normal_fragment_begin>
        #include <clearcoat_normal_fragment_maps>
        #include <emissivemap_fragment>
        #include <lights_physical_fragment>
        #include <lights_fragment_begin>
        #include <lights_fragment_maps>
        #include <lights_fragment_end>
        #include <aomap_fragment>
        vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
        vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
        #include <transmission_fragment>
        vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
        #ifdef USE_SHEEN
            float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
            outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
        #endif
        #ifdef USE_CLEARCOAT
            float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
            vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
            outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
        #endif
        #include <output_fragment>
        float brightness = max(0.0, min(1.0, 0.5 + displace * 2.0)) * 0.8 + 0.07;
        brightness += pow(max(displace, 0.0) * 3.0, 4.0) * 15.0;
        gl_FragColor *= vec4(vec3(brightness), 1.0);
        #include <tonemapping_fragment>
        #include <encodings_fragment>
        #include <fog_fragment>
        #include <premultiplied_alpha_fragment>
        #include <dithering_fragment>
    }

`;
```





## 引用到的链接🔗
* [noise shader 算法](https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83)
* [Threejs](https://github.com/mrdoob/three.js)
* [ShaderChunk](https://github.com/mrdoob/three.js/tree/master/src/renderers/shaders/ShaderChunk) 
* [ShaderChunk.js](https://github.com/mrdoob/three.js/blob/master/src/renderers/shaders/ShaderChunk.js)
* [begin_vertex.glsl.js](https://github.com/mrdoob/three.js/blob/master/src/renderers/shaders/ShaderChunk/begin_vertex.glsl.js)
* [output_fragment.glsl.js](https://github.com/mrdoob/three.js/blob/master/src/renderers/shaders/ShaderChunk/output_fragment.glsl.js)
