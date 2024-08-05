

# 类型检查
类型提示功能
# 逻辑
很难看懂Vue3 watch API的类型声明

JavaScript+JSDoc
.d.ts
removeLeadingZero
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

vsc有智能推断，简单的代码都能推断出来，会自动感应出方法。说回来removeLeadingZero函数，我们调用时，传入错误的参数，

tsconf.json/jsconfig.json js/ts.implicitProjectConfig.checkJs
