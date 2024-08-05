https://www.30secondsofcode.org/blog/s/javascript-object-array-proxy

While messing around with瞎搞 some code the other day不久前某一天，I stumbled upon 偶然发现 a case where I received an obj,
the values of which I needed to repeatedly handle as a regular arr.This was, of course, achievable using `Object.keys(),values(),entries()`, but it started getting verbose real quick.

So I thought I could create some kind of wrapper that would take an obj and define some arr-like behavior for it. I was mainly
in need of `Array.prototype.map,find,includes(),length`. All of this functionality was pretty straightforward to create
using `Object` methods. The only tricky part, so to speak, was getting the obj to behave as an iterable, which required
using the `Symbol.iterator` and a generator fn.
Injecting the new functionality into an obj could be as simple as adding the methods to it. The downside of this approach
is that they would be part of the actual obj, which can be problematic有疑问的. It also doesnt help that this is not very
reusable if we want to apply this over a handful of objects.

Enter the Proxy obj, one of the lesser known tools in a JS developer's tool belt, yet a very powerful one. It's used to
intercept 拦截 certain operations for an obj, such as property lookup, assignment etc. In this scenario, it can neatly整洁熟练灵巧地
wrap the required functionality into a function that creates a proxy around the obj.
The final code, long as it may be, can be seen in the example below. It implements the functionality I needed, as well as
a handful少数，一把，棘手事 more Array methods for good measure:
```js
const toKeyedArr=obj=>{
  const methods={
    map(target){
      return cb=> Object.keys(target).map(k=>cb(target[k],k,target))
    },
    reduce(target){
      return (cb, accumulator)=> Object.keys(target).reduce((acc,k)=>cb(acc,target[k],k,target),accumulator)
    },
    forEach(target){
      return cb=>Object.keys(target).forEach(k=>cb(target[k],k,target))
    },
    filter(target){
      return cb=>Object.keys(target).reduce((acc,k)=>{
        if(cb(target[k],k,target)) acc[k]=target[k]
        return acc
      },{})
    },
    slice(target){
      return (start,end)=>Object.values(target).slice(start,end)
    },
    find(target){
      return callback => {
        return (Object.entries(target).find(([key, value]) =>
          callback(value, key, target)
        ) || [])[0];
      };
    },
    findKey(target) {
      return callback =>
        Object.keys(target).find(key => callback(target[key], key, target));
    },
    includes(target) {
      return val => Object.values(target).includes(val);
    },
    keyOf(target) {
      return value =>
        Object.keys(target).find(key => target[key] === value) || null;
    },
    lastKeyOf(target) {
      return value =>
        Object.keys(target)
          .reverse()
          .find(key => target[key] === value) || null;
    },
  }
  const methodKeys=Object.keys(methods)
  const handler={
    get(target, prop, receiver){
      if(methodKeys.includes(props)) return methods[prop](...arguments)
      const [keys, values]=[Object.keys(target),Object.values(target)]
      if(prop=='length')return keys.length
      if(prop=='keys')return keys
      if(prop=='values')return values
      if(prop==Symbol.iterator)
        return function* (){
          for(v of values) yield v
          return
        }
      else return Reflect.get(...arguments)
    }
  }
  return new Proxy(obj, handler)
}

// Obj creation
const x = toKeyedArr({a:'A',b:'B'})
// Accessing properties and values
x.a // 'A'
x.keys // ['a','b']
x.values
[...x] // ['A','B']
x.length // 2

// Inserting values
x.c='C' // x= {a:'A',b:'B',c:'C'}
x.length // 3

// Arr methods
x.forEach((v,i)=>console.log(`${i}:${v}`)) // LOGS: 'a: A', 'b: B', 'c: C'
x.map((v,i)=>i+v) // ['aA','bB','cC']
x.filter((v,i)=>v!='B')
x.reduce((a,v,i)=>({...a,[v]:i}),{}) // { A: 'a', B: 'b', C: 'c' }
x.slice(0,2)
x.slice(-1)
x.find((v,i)=>i=='C') // 'C'
x.findKey((v,i)=>v=='B')
x.includes('C')
x.keyOf('B') // 'b'
x.keyOf('a') // null
x.lastKeyOf('C') // 'c'
```
