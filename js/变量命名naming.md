https://unbug.github.io/codelf There are only two hard things in Computer Science: cache invalidation and naming things(语言智能).

removeLeadingZero前导零,0.6=》.6,-0.5=>-.5
```js
/**
 * Remove floating-point numbers leading zero.
 *
 * @example
 * 0.5 -> .5
 *
 * @example
 * -0.5 -> -.5
 *
 * @type {(num: number) => string}
 * @param  {  }
 * @desc
 * @return  {  }
 */

const removeLeadingZero=(num)=>{
  let strNum=num.toString()
  if(0<num&&num<1){
    strNum=strNum.slice(1)
  }else if(-1<num&&num<0){
    strNum='-'+strNum.slice(2)
  }
  return strNum
}
```

普通命名采用小驼峰式命名
复制代码let userName = 'jack'
命名是复数的时候需要加 s，比如说我想声明一个数组，表示很多人的名字
复制代码let names = new Array()
每个常量都需命名，这样更利于别人读懂含义
复制代码// good
const COL_NUM = 10
let row = Math.ceil(num / COL_NUM)

// bad
let row = Math.ceil(num / 10)
命名需要符合语义化，如果函数命名，可以采用加上动词前缀：

can 判断是否可执行某个动作
has 判断是否含有某个值
is 判断是否为某个值
get 获取某个值
set 设置某个值
//是否可阅读
function canRead(){
   return true;
}
//获取姓名
function getName{
   return this.name
}


作者：lzg9527
链接：https://juejin.cn/post/6846687599281569800
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
