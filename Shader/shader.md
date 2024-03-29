# Shader 碎片知识

### 前置

```
    import frag_glsl from "./frag.glsl"
    ...
    mats.onBeforeCompile = (mat) => {
        console.log(threeExpandShaderIncludes(mat.fragmentShader));
        mat.fragmentShader = frag_glsl;
        mat.uniforms = {
            ...mat.uniforms,
            ...uniforms
        }
    }

    ...
    import {ShaderChunk} from "three";
   function threeExpandShaderIncludes(s) {
        const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
        function resolveIncludes(string) {

            return string.replace(includePattern, includeReplacer);

        }
        function includeReplacer(match, include) {
            const string = ShaderChunk[include];

            if (string === undefined) {

                throw new Error('Can not resolve #include <' + include + '>');

            }
            return resolveIncludes(string);
        }
        return resolveIncludes(s);
    }

```

### 1. 切换map (frag.glsl)
```
    vec4 maps = texture2D( t_map, vUv );
    vec4 map_group = texture2D( t_map_group, vUv );
    vec4 map_main = texture2D( t_map_main, vUv );

    // is_map ? 1.0 : 0.0 == is_map
    vec4 map_or_group = mix(map_group, maps, is_map); // (group or map)
    vec4 result = mix(map_or_group, map_main, is_main); // (group or map) or main
```
参考：
* https://juejin.cn/post/7056422478863826980
* https://thebookofshaders.com/glossary/?search=mix


### 2. 根据阳光改变，日夜渲染不同贴图 / map or 发光贴图 (frag.glsl)
```
// ... noise 方法
// … 省略N

struct ReflectedLight {
    vec3 directDiffuse;
    vec3 directSpecular;
    vec3 indirectDiffuse;
    vec3 indirectSpecular;
    vec3 totalIrradiance; // 新增总的阳光计算
};

// … 省略N

ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3(0.0) ); // 结构体初始化增个变量

// … 省略N

    reflectedLight.totalIrradiance += irradiance; // 计算总阳光

// … 省略N

// 灯光 noise 律动
// float n = snoise(vec2(vUv.x, vUv.y));
// float n = texture2D( t_noise, fract(vec2(vUv.x + t_time, vUv.y)) ).r;
// float n2 = texture2D( t_noise, fract(vec2(vUv.y + t_time, vUv.x)) ).r;
// n *= n2;
// n = pow(n, 4.0);
// n *= 13.0;

float n = 1.0;

// 总的发光 黑夜完全使用发光贴图 为 1 ，白天使用map 发光贴图为 0
// 总阳光参数专为 0 ～ 1 的值进行计算
// min(1.0, max(0.0, 1.0 - reflectedLight.totalIrradiance.r)) 

totalEmissiveRadiance = n * emissiveColor.rgb * min(1.0, max(0.0, 1.0 - reflectedLight.totalIrradiance.r)) ;  // 动态切换使用 * t_mode + totalEmissiveRadiance.rgb * (1.0 - t_mode);


vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
```


### 3. 世界坐标 + uv
```
varying vec4 u_pos;
varying vec2 u_vUv;
...

void main(){ 
    u_vUv = uv;
    ...
	vec4 t_worldPosition = vec4( transformed, 1.0 );
	t_worldPosition = modelMatrix * t_worldPosition;

	u_pos = t_worldPosition;
    ...
}
```