JSON.stringify()将值转换为相应的 JSON 格式：对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。

json.cn 不要勾选保留转义选项

Error: 在第 1 行发生解析错误 :
...,"matches":["上海市"]}}，{"columnName":"","f

此处缺少'EOF', '}', ',', ']'字符, 实际上是一个 'undefined'

json 里快速查看某项值（可以不用到 console 或者网站里去 parse），直接 cmd f 快速匹配搜寻出即可

Uncaught TypeError: Converting circular structure to JSON
--> starting at object with constructor 'HTMLDivElement'
| property '\_\_reactFiber$72evbr08z7' -> object with constructor 'FiberNode'
--- property 'stateNode' closes the circle
at Object.stringify (<anonymous>)

chrome console
VM179816:1 Uncaught SyntaxError: Unexpected token m in JSON at position 3
at JSON.parse (<anonymous>)
at <anonymous>:1:6

# stringify 有哪些参数

https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/431

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer arr is specified.

```js
JSON.stringify({ x: [10, undefined]}) // '{"x":[10,null]}'

JSON.stringify([10, undefined]) // '[10,null]'

new Date(2006, 0, 2, 15, 4, 5) // Mon Jan 02 2006 15:04:05 GMT+0800 (中国标准时间)
JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)) // '"2006-01-02T07:04:05.000Z"'
Object.prototype.toString.call(new Date(2006, 0, 2, 15, 4, 5)) // [object Date]
JSON.stringify(v, replacer?, space?)
```

## replacer

A function that alters the behavior of the stringification process, or an arr of `String` and `Number` that serve as an allowlist for selecting/filtering the properties of the v obj to be included in the JSON str.

```js
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
A: "{"level":19, "health":90}"
B: "{"username": "lydiahallie"}"
C: "["level", "health"]"
D: "{"username": "lydiahallie", "level":19, "health":90}"
答案
答案: A
JSON.stringify的第二个参数是 替代者 (replacer). 替代者 (replacer) 可以是个函数或数组，用以控制哪些值如何被转换为字符串。

如果替代者 (replacer) 是个 数组 ，那么就只有包含在数组中的属性将会被转化为字符串。在本例中，只有名为"level" 和 "health" 的属性被包括进来， "username"则被排除在外。 data 就等于 "{"level":19, "health":90}".

而如果替代者 (replacer) 是个 函数，这个函数将被对象的每个属性都调用一遍。 函数返回的值会成为这个属性的值，最终体现在转化后的 JSON 字符串中（译者注：Chrome 下，经过实验，如果所有属性均返回同一个值的时候有异常，会直接将返回值作为结果输出而不会输出 JSON 字符串），而如果返回值为undefined，则该属性会被排除在外。
```

## space

A String or Number object that's used to insert white space into the output JSON string for readability purposes.

If this is a Number, it indicates the number of space characters to use as white space for indenting purposes; this number is capped at 10 (if it is greater, the value is just 10). Values less than 1 indicate that no space should be used.

If this is a String, the string (or the first 10 characters of the string, if it's longer than that) is used as white space.

If this parameter is not provided (or is null), no white space is used.

Return value
A JSON string representing the given value, or undefined.

Exceptions
Throws a TypeError ("cyclic object value") exception when a circular reference is found.
Throws a TypeError ("BigInt value can't be serialized in JSON") when trying to stringify a BigInt value.

# Description

JSON.stringify() converts a value to JSON notation representing it:

- If the value has a **toJSON()** method, it's responsible to define what data will be serialized.
- Boolean, Number, and String objects are converted to the corresponding primitive values during stringification, in accord with the traditional conversion semantics.
- `undefined, Function, Symbol`s are not valid JSON values. If any such values are encountered during conversion they are either omitted(when found in an obj) or changed to null (when found in an arr). `JSON.stringify` can return u

- The instances of Date implement the toJSON() function by returning a string (the same as date.toISOString()). Thus, they are treated as strings.
- All the other Object instances (including Map, Set, WeakMap, and WeakSet) will have only their enumerable properties serialized.

## 实现对象的 Map 函数类似 Array.prototype.map

```js
const obj = {a:2,b:3,c:4,d:5}
const objMap = (obj,fn)=>{
  if(typeof fn !== 'function') throw new TypeError(`${fn} is not a function`)
  return JSON.parse(JSON.stringify(obj, fn))
}
objMap(obj, (k, v)=>{
  if(v%2===0)return v/2
  return v
})
// {a:1,b:3,c:2,d:5}

这个实现有问题，首先JSON.stringify(obj, fn)中第一次传入fn中的参数为 ""和对象本身，从第二次开始才会传入key和val，所以应该加上条件处理。

(() => {

    Object.prototype._map = function (fn, oThis = null) {
        if (typeof fn !== 'function') {
            throw new TypeError(`${fn} is not a function !`)
        }
        return JSON.parse(JSON.stringify(this, (key, val) => {
            if (key) {
                return fn.call(oThis, key, val, this)
            } else {
                return val
            }
        }))
    }
    // 用例
    let obj = {
        a: 2,
        b: 3,
        c: 4,
        d: 5
    };
    let _obj = obj._map((key, val, o) => {
        return ++val
    })
    console.log(_obj);
})();


Object.prototype.map= function(cb) {
    const obj = this
    const result = {}
    for(key in obj) {
        if (obj.hasOwnProperty(key)) {
            const item = cb(key, obj[key])
            result[key] = item
        }
    }
    return result
}

```

# JSON.parse

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.
reviver Optional
If a function, this prescribes how the value originally produced by parsing is transformed, before being returned.

Return value
The Object, Array, string, number, boolean, or null value corresponding to the given JSON text.

Exceptions
Throws a SyntaxError exception if the string to parse is not valid JSON.

JSON.parse() does not allow trailing commas
// both will throw a SyntaxError
JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');
Copy to Clipboard
JSON.parse() does not allow single quotes
// will throw a SyntaxError
JSON.parse("{'foo': 1}");
```js
JSON.parse()
A: Parses JSON to a JavaScript value
B: Parses a JavaScript object to JSON
C: Parses any JavaScript value to JSON
D: Parses JSON to a JavaScript object only
答案
答案: A
使用JSON.parse()方法，我们可以将 JSON 字符串解析为 JavaScript 值。

// 将数字字符串化为有效的 JSON，然后将 JSON 字符串解析为 JavaScript 值：
const jsonNumber = JSON.stringify(4) // '4'
JSON.parse(jsonNumber) // 4

// 将数组值字符串化为有效的 JSON，然后将 JSON 字符串解析为 JavaScript 值：
const jsonArray = JSON.stringify([1, 2, 3]) // '[1, 2, 3]'
JSON.parse(jsonArray) // [1, 2, 3]

// 将对象字符串化为有效的 JSON，然后将 JSON 字符串解析为 JavaScript 值：
const jsonArray = JSON.stringify({ name: "Lydia" }) // '{"name":"Lydia"}'
JSON.parse(jsonArray) // { name: 'Lydia' }
```

# JSX 不能通过 JSON.stringify 复制。比如说 icon 这样的，存不进去。可能只能通过 iconTyp 来做匹配

https://stackoverflow.com/questions/49996456/importing-json-file-in-typescript

json.cn 比较方便做 json 的 diff
