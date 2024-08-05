The Proxy object enables you to create a proxy for another object, which can intercept 拦截 and redefine fundamental operations
for that object.
A proxy is created with two parameters.

- target: the original object which you want to proxy
- handler: an object that defines which operations will be intercepted and how to redefine intercepted operations

For example, this code defines a simple target with just two properties, and an even simpler handler with no properties:

```js
const target = {
  msg1: "hello",
  msg2: "everyone",
};
const handler1 = {};
const proxy1 = new Proxy(target, handler1);
```

Because the handler is empty, this proxy behaves just like the original target.

```js
console.log(proxy1.msg1); // hello
console.log(proxy1.msg2); // ev...
```

To customize the proxy, we define functions on the handler object.

```js
const handler2 = {
  get: function (target, prop, receiver) {
    return "world";
  },
};
```

Here we've provided an implementation of the `get()` handler, which intercepts attempts to access properties in the target

Handler functions are sometimes called traps, presumably 大概，推测起来 adv because they trap calls to the target obj. The very simple trap in `handler2` above redefines all property accessors:

```js
console.log(proxy1.msg1); // world
console.log(proxy1.msg2); // world
```

With the help of the `Reflect` class we can give some accessors the original behavior and redefines others:

```js
const target = {
  msg1: "hello",
  msg2: "everyone",
};
const handler3 = {
  get: function (target, prop, receiver) {
    if (prop == "msg2") return "world";
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target, handler3);
console.log(proxy3.msg1); // hello
console.log(proxy3.msg2); // world
```

# Constructor

`Proxy()`
Creates a new `Proxy` obj.

# Static methods

`Proxy.revocable()`
Creates a revocable `Proxy` obj.

# Examples

## Basic example

In this simple example, the number `37` gets returned as the dftV when the prop name is not in the obj. It's using the
`get()` handler.

```js
const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 37;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined

console.log("c" in p, p.c); // false, 37
```

# No-op forwarding proxy

# Validation

With a `Proxy`, you can easily validate the passed value for an obj. This example uses the `set()` handler.

```js
let validator = {
  set: function (obj, p, v) {
    if (p == "age") {
      if (!Number.isInteger(v))
        throw new TypeError("The age is not an integer");
      if (v > 200) throw new RangeError("The age seems invalid");
    }

    // The dft behavior to store the v
    obj[p] = v;
    // Indicate success
    return true;
  },
};
const person = new Proxy({}, validator);
person.age = 100;
console.log(person.age);

person.age = "young"; // Throws an exception
person.age = 300;
```

# Extending constructor

A function proxy could easily extend a constructor with a new

# Manipulating DOM nodes

Sometimes you want to toggle the attribute or class name of two

https://www.30secondsofcode.org/articles/s/javascript-object-array-proxy

Can I use an obj as an arr without modifying it in JS?
The other day, I stumbled upon some code where I needed to handle an obj as a regular arr a few times. This was, of course, achievable using `Object.keys(), Object.values(), entries()`,

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

https://www.yuque.com/umijs/umi/proxy

https://serverfault.com/questions/434205/nginx-https-rewrite-turns-post-to-get

```js
const handler = {
	set: () => console.log("Added a new property!"),
	get: () => console.log("Accessed a property!")
};

const person = new Proxy({}, handler);

person.name = "Lydia";
person.name;
A: Added a new property!
B: Accessed a property!
C: Added a new property! Accessed a property!
D: 没有任何输出
答案
答案: C
使用 Proxy 对象，我们可以给一个对象添加自定义行为。在这个 case，我们传递一个包含以下属性的对象 handler : set and get。每当我们 设置 属性值时 set 被调用，每当我们 获取 时 get 被调用。

第一个参数是一个空对象 {}，作为 person 的值。对于这个对象，自定义行为被定义在对象 handler。如果我们向对象 person 添加属性，set 将被调用。如果我们获取 person 的属性，get 将被调用。

首先，我们向 proxy 对象 (person.name = "Lydia") 添加一个属性 name。set 被调用并输出 "Added a new property!"。

然后，我们获取 proxy 对象的一个属性，对象 handler 的属性 get 被调用。输出 "Accessed a property!"。
```
