# 你不知道的Javascript（上卷）

本书英文名：You Don't Know JS <br/>

* [作用域](#作用域)
    * [LHS](#lhs)
    * [RHS](#rhs)
* [异常](#异常)


## 作用域
作用域就是检测变量是否合规的规则。利用 LHS 查询被赋值的变量是否存在，利用 RHS 查询变量引用的值是够存在。其中 RHS 在变量引用不存在时会抛出异常 ReferenceError，而 LHS 查询只在严格模式会抛出异常 ReferenceError，非严格模式会自动创建全局变量。

### LHS 
```js
// 例1
var a = 2; // a 会进行 LHS 查询是否存在 a 的声明，没有会被全局声明

// 例2
'use strict' // 严格模式
a = 2; // 没找到 a 的声明，抛出异常 ReferenceError 
```

#### RHS 
当引用出现在赋值表达式右侧或者隐性调用（获取变量的值）时，会进行 **RHS** 查询。会一路向上层询问是否存在该变量，如不存在会抛出异常 ReferenceError。
```js
var b = a + a; // a+、+a 都会进行 RHS 查询，由于未找到定义抛出异常 ReferenceError
```






## 异常
* ReferenceError（引用错误）对象代表当一个不存在（或尚未初始化）的变量被引用时发生的错误。