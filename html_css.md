# CSS样式
# 文字

```
文字大小
font-size: 25px;

文字粗细
font-weight: blod;

文本对齐
text-align: center;

行高
line-height: 60px;

颜色
color: white;
```

# Body和Html初始化
overview可以避免body和html中间的空白缝隙
```
html,
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
  overflow: hidden;
}
```

# 布局
```
最小宽度
min-width: 250px;

边框
border-right: 1px solid;

背景
background: #545c64;

空隙
margin: 0px;
padding: 0px;

文本垂直对齐
height: 60px;
text-align: center;
line-height: 60px;
```

# Flex布局
```
flex-direction属性
flex-direction属性决定主轴的方向（即项目的排列方向)
.box { flex-direction: row | row-reverse | column | column-reverse; }

flex-wrap属性
默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
.box{ flex-wrap: nowrap | wrap | wrap-reverse; }
nowrap（默认）：不换行。

flex-flow
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
.box { flex-flow: <flex-direction> || <flex-wrap>; }

justify-content属性
justify-content属性定义了项目在主轴上的对齐方式。
.box { justify-content: flex-start | flex-end | center | space-between | space-around; }
flex-start（默认值）：左对齐
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

align-items属性
align-items属性定义项目在交叉轴上如何对齐。
.box { align-items: flex-start | flex-end | center | baseline | stretch; }
flex-start：交叉轴的起点对齐。
flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

align-content属性
align-content属性定义了多根轴线（多行）的对齐方式。如果项目只有一根轴线，该属性不起作用。
.box { align-content: flex-start | flex-end | center | space-between | space-around | stretch; }
flex-start：交叉轴的起点对齐。

order属性
order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
.item { order: <integer>; }

flex-grow属性
flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
.item { flex-grow: <number>; /* default 0 */ }

flex-shrink
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
负值对该属性无效。
.item { flex-shrink: <number>; /* default 1 */ }

flex-basis属性
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
.item { flex-basis: <length>; | auto; /* default auto */ }

flex属性
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
.item { flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] }

align-self属性
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
.item { align-self: auto | flex-start | flex-end | center | baseline | stretch; }

```

把padding包含在width里面
```
div设置
box-sizing: border-box;
```

隐藏滚动条
```
chrom浏览器
  #chat-content::-webkit-scrollbar {
    display: none;
  }

火狐
  scrollbar-width: none; /* Firefox */

IE浏览器
-ms-overflow-style: none; /* IE 10+ */
```

图片居中
```
使用flex布局
.wrapper{
    background: #cc8548;
    margin: 40px auto;
    padding: 20px;
    width: 500px;
    display: flex;
    flex-direction: row;
    align-items: center; /*垂直居中*/
    justify-content: center; /*水平居中*/
    font-size: 0;
}
.img{
    vertical-align: middle;
    align-items: center;
    }
.text{
    flex: 1;
    padding-left: 50px;
    font-size: 20px;
}
```

# Vue
## 静态文件路径
```
public里的文件，/直接访问public里的内容
src = "/img.jepg"

assets里的内容会被webpack打包
静态
<img src="/images/04.jpg" alt="">
动态
<img :src="require('./assets/images/03.jpg')" alt="">

ref
标签ref
<div id="chat-content" ref="scroll">
在方法中获取实体并进行操作
let container = this.$refs.scroll;

滑动到底动画
container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth',
        });


this.$nextTick(()=>{

})
表示这个函数在下次dom更新的时候执行，跟滑动一起使用；如果不用nextTick，那么函数会在还没渲染之前就执行，
会导致scrollHeight是渲染之前的高度，最后导致不能滑到底


刷新修改默认选中menu
<el-menu :default-active="$route.path"></el-menu>

<el-menu-item index="/" route="/">
<el-menu-item index="/graph" route="/graph">

```