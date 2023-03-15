# Shader




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
    vec3 totalIrradiance;
};

// … 省略N

    reflectedLight.totalIrradiance += irradiance;

// … 省略N

// 灯光 noise 律动
// float n = snoise(vec2(vUv.x, vUv.y));
// float n = texture2D( t_noise, fract(vec2(vUv.x + t_time, vUv.y)) ).r;
// float n2 = texture2D( t_noise, fract(vec2(vUv.y + t_time, vUv.x)) ).r;
// n *= n2;
// n = pow(n, 4.0);
// n *= 13.0;

float n = 1.0;
totalEmissiveRadiance = n * emissiveColor.rgb * min(1.0, max(0.0, 1.0 - reflectedLight.totalIrradiance.r)) ;  // 动态切换使用 * t_mode + totalEmissiveRadiance.rgb * (1.0 - t_mode);


vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
```