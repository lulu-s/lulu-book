## HTML+CSS

**1. 对WEB标准以及W3C的理解与认识**

W3C标准可以分为三方面的标准：结构、表现、行为。结构就是(X)HTML，包括名字、属性、语义等相关标准。表现就是CSS、包括定位、颜色、大小等样式的相关标准。行为就是Javascript，主要有ECMA国际制定的标准，体现在语法、表达式等。它的好处是提高开发效率，易于维护，改版容易，提高被搜索到的几率，更容易被用户看见。

**2. XHTML和HTML有什么区别**

XHTML语法更严谨、标签必须小写、必须闭合、必须正确嵌套、所有属性必须赋值并且使用双引号、图片必须有说明文字、必须有根元素。

**3. 行内元素有哪些？块级元素有哪些？空元素(void)有哪些？**

CSS规范规定，每个元素都有display属性，每个元素都有默认的display，如div默认值为“block”，为块级元素，span默认值为“inline”，为行内元素。<br>
行内元素：span、a、b、strong、input、button、select、img、em...<br>
块级元素：div、ul、li、ol、dl、dt、dd、p、h1~h6...<br>
空元素：hr、br、img、input、link、meta<br>

**4. Doctype作用？不存在Doctype会以哪种方式运行？标准模式、严格模式、混杂模式、怪异模式的区别是什么？**

doctype的作用是告诉浏览器用哪种文档类型、规范来解析这个文档。文档类型有：严格、过度、基于框架的HTML版本。<br>
如果不存在doctype的话，会导致以混杂模式呈现。<br>
严格模式（标准模式）：当前的排版和JS运行模式会以浏览器支持的最高标准运行。<br>
怪异模式：是按照浏览器自己的方式来解析执行代码。<br>
混杂模式（兼容模式）：页面会以宽松的方式向后兼容，模拟老的浏览器的行为，防止站点无法工作。

**5. CSS引入方式有哪些？Link和@import的区别是？**

行内，内部、外部，导入@import。<br>
1）link是XHTML的标签，除了加载CSS外，还能用于定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS。<br>
2）@import是CSS2.1提出的，只能兼容IE5以上；而link是XHTML标签，无兼容性问题。<br>
3）页面加载的时候，link会同时加载；而@import会等页面加载完时再加载。<br>

**6. CSS的选择器有哪些？哪些属性可以继承？优先级怎么算？权重是？内联和important哪个优先级更高？**

选择器：ID（#xx）、类（.xx）、标签（div）、伪类（:hover）、伪元素（:after）、全局（通用）(*)、后代（继承）（div p span）、子（div > p）、群组（div, p）、相邻（div+p 紧接在div后的所有p元素）、层次（p~ul 选择前面有p元素的每个ul）、属性（attr[attri] 、 attr[attri][attri1] 选择所有attr中的attri、attr[attri*=xxx]  attri中包含xxx的、attr[attri~=xxx]  匹配词汇xxx、attr[attri^=xxx]  attri中以xxx开头、attr[attri$=xxx]  attri中以xxx结尾、attr[attri |= xxx] 选取指定开头的属性，必须是整个单词）<br>
文本方面的样式，cursor和visibility。<br>
优先级：!important > 内联(1000) > id(100) > 类、属性、伪类(10) > 标签、关系、伪元素(1) > 通配符(0) 

**7. 前端页面由哪三层组成？作用是？**

结构：HTML标记语言，标签根据网页中内容的语义和含义做出描述。<br>
表现：CSS，对页面内容的显示进行控制。<br>
行为：Javascript，对用户的行为事件，进行控制。

**8. CSS的基本结构是？**

选择器名{属性名1:属性值1,属性名2:属性值2...}

**9. 你做的页面在哪些浏览器测试过？这些浏览器的内核分别是什么？**

谷歌（webkit）、IE（trident）、火狐（Gecko）、Safari（webkit）、Opera（Blink）

**10. 写出集中IE6bug的解决办法**

1. css浮动边距加倍问题，使用_display:inline;
2. 扩展框问题，无法将内容放入固定宽高的框中，内容会增大盒子，而不是溢出，使用overflow:hidden;
3. png图片不透明。
```javascript
  filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="fl.png");
```
4. 3像素文本慢移，当线框临近浮动时，线框和浮动边缘会出现3个像素的间距，在内容消除浮动后，文本会向左慢移3个像素，最右边的盒子使用_zoom:1
5. 在IE6，浮动元素的子元素如果定义了高度，则其子元素的宽度是其上一个不浮动的祖先元素的100%，解决办法是不给子元素设置固定宽度（只设置行高）或者让这个子元素也变成浮动元素。
6. 空格引发的CSS失效问题，IE处理伪类有-的时候，伪类名称后就需要加一个空格，例如p:nth-child(1){xxx: xxx}是无效的，要改成p:nth-child {xxx: xx}
7. 超链接访问后hover不出现问题，改变超链接样式顺序，L-V-H-A，a:link..a:visited..a:hover...a:active
8. div高度显示问题，IE6默认字体是12~14px之间，当定义一个高度比字体默认高小的时候，IE会固执的认为，这个高度不能小于字体的行高，使用行内样式 style=”height:5px; font: 0pxArial;”或是 style=”height:5px; overflow: hidden;”

**11. <img>上title和alt的区别是？**

title: 鼠标划上去显示的提示信息。<br>
alt: 当图片加载不出来时的替代信息。

**12. 描述CSS reset的作用？**

因为每个浏览器的样式的初始值是不一样的，所以对他们进行重置，使其在每个浏览器上呈现相同的页面。

**13. 描述CSS sprites的作用？如何使用？**

将小图片合成一张大图片，然后使用background-position定位具体的位置。好处就是减少http请求。

**14.你如何对网站的资源文件进行优化？**

1. 文件合并，将小图片合并，减少http请求<br>
2. 压缩文件、减少css、js文件体积<br>
3. 使用CDN托管、降低通信距离<br>
4. 缓存的使用，添加Expire/Cache-Control头<br>
5. 避免在CSS中使用表达式<br>
6. 将CSS放在页面最上面<br>
7. 将script放在页面最下面

**15.你如何理解语义化？**

1. 在没有CSS时候，也能呈现很好的内容结构，利于浏览器，搜索引擎解析，SEO好。
2. 使阅读源码的人更容易将网站分块，易于阅读和维护。

**16.清除浮动的几种方式及优缺点？**

1. 在使用浮动标签的后面加个div清除浮动，缺点是影响语义化。
2. clear: both;，原理是在清理元素的顶部添加足够多的外边距，所以手动添加的margin-top会失效。
3. 使用伪类clearfix来清楚浮动，.clearfix:after{ content: “”,clear: both, display: block }
4. 开启BEC，overflow: hidden或者overflow: auto
5. 双伪元素，.clearfix:after，.clearfix:before { content: “”,clear: both, display: block }
