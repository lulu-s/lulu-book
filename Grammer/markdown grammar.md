# Markdown 语法
* [锚链接](#锚链接)
* [标题](#标题)
* [列表](#列表)
  * [有序列表](#有序列表)
  * [无序列表](#无序列表)
* [区块引用](#区块引用)
* [分割线](#分割线)
* [链接](#链接)
  * [行内式链接](#行内式链接)
  * [参数式链接](#参数式链接)
* [图片](#图片)
  * [行内式图片](#行内式图片)
  * [参数式图片](#参数式图片)
* [代码块](#代码块)
* [转义](#转义)
* [强调](#强调)
* [表格](#表格)
* [高亮](#高亮)
* [数学公式](#数学公式)
* [多选框](#多选框)

注意：如果不希望前后文串行或者合并，使用换行解决。

## 锚链接
* 标题自带锚链接，使用`[标题](#标题)`接收锚链接点击后的位置。<br>
* 当标题中有空格的时候，使用-代替。<br>
* 当多级符号存在2.3时候，需要去掉.转换为23。
* 链接书写格式
```
* [列表](#列表)
  * [有序列表](#有序列表)
* [无序列表](#无序列表)
```

## 标题

> 原理：将符号转换为HTML标签(h1\~h6)

### 第一种标题格式
> 在标题前加入1\~6个任意的#等同于h1\~h6，空格分隔。 

* 实际样子
  # 一级标题
  ## 二级标题
  ### 三级标题
  #### 四级标题
  ##### 五级标题
  ###### 六级标题

* 书写格式
  ```
  # 一级标题
  ## 二级标题
  ### 三级标题
  #### 四级标题
  ##### 五级标题
  ###### 六级标题
  ```

### 第二种标题格式
> 只有h1\~h2，( = )表示一级，( - )表示二级，在标题下一行插入=即为一级标题，=可插入1\~n个。 

* 实际样子
  一级标题
  ============
  二级标题
  ------------

* 书写格式
  ```
  一级标题
  ============
  二级标题
  ------------
  ```
 
### 第三种标题格式
> 在标题前后分别加入1\~6个任意的#等同于h1\~h6，空格分隔。这种方式有点多余，不推荐。
 
* 实际样子
  # 一级标题 #
  ## 二级标题 ##
  ### 三级标题 ###
  #### 四级标题 ####
  ##### 五级标题 #####
  ###### 六级标题 ######
 
* 书写格式
  ```
  # 一级标题 #
  ## 二级标题 ##
  ### 三级标题 ###
  #### 四级标题 ####
  ##### 五级标题 #####
  ###### 六级标题 ######
  ```

## 列表

> 原理：将符号转换为HTML标签(ul>li)。

### 有序列表

* 只能使用数字

1. hello
2. hi
3. wow!

* 但有序列表的顺序是根据第一行的设定数来的，当书写顺序为323的时候，会按照第一行的数字3开始，依次向下顺序排列，自动校正顺序。
 > 3. hello，我是*
 > 2. hi，我是-
 > 3. hello，我是+

### 无序列表
> 可以使用+、-、*，来创建无需列表，单一的符号就是连续的列表，使用不同的符号会分段。但是如果二级目录的话就不会分段了

* hello，我是*
* hi，我是*
+ hello，我是+
+ hi，我是+
- hello，我是-
- hi，我是-

* 书写格式
  ```
  * hello，我是*
  * hi，我是*
  + hello，我是+
  + hi，我是+
  - hello，我是-
  - hi，我是-
  ```


## 区块引用
在语句前加一个>，空格分隔。<br/>
> ⚠️ 注意：在区块中，如中间有注释信息什么的不在引用内，要换行切换或加br标签。

> hello  `书写格式：> hello`

* 多层嵌套，看来可以无限嵌套。
  > hello
  >> hello
  >>> hello
  >>>> hello

* 书写格式
  ```
  > hello
  >> hello
  >>> hello
  >>>> hello
  >>>>> hello
  >>>>>> hello
  >>>>>>> hello
  ```
 
 

## 分割线
可以使用*、-、_，至少三个以上的符号，中间可存在空格，不能有其他符号。<br/>
注意：减号和文字合体是标题，所以要换行才能生成分割线。

- - -
---
***
___

* 书写格式
  ```
  - - -
  ---
  ***
  ___

  ```


## 链接
### 行内式链接
* 使用\[链接内容](链接地址)，实现页面内的跳转。<br>

* [百度](https://www.baidu.com)  `书写格式：[百度](https://www.baidu.com)`

* 仅能增加提示信息，使用\[链接内容\](链接地址) "提示信息"。

* [百度](https://www.baidu.com "百度")  `书写格式：[百度](https://www.baidu.com "百度")`

### 参数式链接
* 就是将链接定义为参数，可以直接使用参数名，这样的好处是，当多次使用同一个链接的时候，可以省略字符。
* 定义参数：
    * \[lulu]: https://github.com/lulu-s "Github" <br>
    * \[lulu]: \<https://github.com/lulu-s> "Github" <br>
* 使用方式：使用的时候，需要带上方括号\[lulu\]。
  * 新建链接：`书写格式：[lulu]: https://github.com/lulu-s "Github"` [lulu]: https://github.com/lulu-s "Github"
  * 使用： `书写格式：[lulu]` [lulu]


## 图片
图片和链接的使用方法一样，唯一区别在于要在开头加一个!，如果不加!就会变成链接。

### 行内式图片

![头像](https://github.com/lulu-s/lulu-book/blob/master/assets/%E5%A4%B4%E5%83%8F.jpg "头像")

* 书写格式
```
![头像](https://github.com/lulu-s/lulu-book/blob/master/assets/%E5%A4%B4%E5%83%8F.jpg)
![头像](https://github.com/lulu-s/lulu-book/blob/master/assets/%E5%A4%B4%E5%83%8F.jpg "头像")
```

### 参数式图片

[头像]: https://github.com/lulu-s/lulu-book/blob/master/assets/%E5%A4%B4%E5%83%8F.jpg "头像"
![头像]

* 书写格式
```
新建：
[头像]: https://github.com/lulu-s/lulu-book/blob/master/assets/%E5%A4%B4%E5%83%8F.jpg "头像"

使用：
![头像]
```

## 代码块
第一种，单行用\`xxx`，类似Es6的对象扩展运算符

`<div>hello</div>`

第二种，多行用\```xxx\```前后包裹起来。

```
    <ul>
        <li>hello</li>
        <li>hi</li>
    </ul>
```

## 删除线
使用`~删除我~`前后包裹。 

~删除我~

## 转义
只需要在符号前加\，多个需要转义的连在一起，在开头写一个\就行了。因为有些符号是关键字，如果需要正常显示，就需要特殊处理。

`\~` \~ <br/>
`\[title\]` \[title\]


## 强调
单独的*、_为倾斜，需要前后包裹闭合，双写为加粗。

* 倾斜：
  * `*倾斜1*` *倾斜1* 
  * `_倾斜2_` _倾斜2_
* 加粗：
  * `**加粗1**` **加粗1**  
  * `__加粗2__` __加粗2__  
     
## 表格
玩具  |  价格
---------|----------
球类  |  50

玩具  |  价格
|-------|-------|
球类  |  50

玩具  |  价格
|:------:|:-----:|
球类  |  50

* 书写格式
```
玩具  |  价格
---------|----------
球类  |  50

玩具  |  价格
|-------|-------|
球类  |  50

玩具  |  价格
|:------:|:-----:|
球类  |  50
```


## 高亮
> 利用代码块/``<br/>

Hello `lulu`,Thanks you.



## 数学公式
汇总日期待定 <br>
参考： https://www.jianshu.com/p/e74eb43960a1

## 多选框

- [ ] Test
- [x] Test
<br/>

* 书写格式
```
- [ ] Test
- [x] Test
```