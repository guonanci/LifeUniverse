https://overreacted.io/why-do-we-write-super-props/

hotness 热烈，热心，暑热；ironically adv 讽刺地，说反话地；

These gotchas are not important for using React productively. But you might find them amusing if you like to dig deeper into how things work.

```js
class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOn: true }
  }
}
// ceremony典礼、仪式、理解礼仪客套，虚礼
class Checkbox extends React.Component {
  state = { isOn: true }
}
```

Defining `constructor` and calling `super(props)` was always intended to be a temporary solution until class fields provide an ergonomic 人类环境改造学的 alternative.

In JavaScript, `super` refers to the parent class constructor. (In our example, it points to the `React.Component` implementation.)

Importantly, you can't use `this` n a constructor until after you've called the parent constructor. JS wont let you:

```js
class Checkbox extends React.Component {
  constructor(props) {
    // cant use `this` yet
    super(props)
    // Now it's okay though
    this.state = { isOn: true }
  }
}
```

There's a good reason for why JS enforces that parent constructor runs before you touch `this`. Consider a class hierarchy:

```js
class Person {
  constructor(name) {
    this.name = name
  }
}
class PolitePerson extends Person {
  constructor(name) {
    this.greetColleagues() // 🔴 This is disallowed, read below why
    super(name)
  }
  greetColleagues() {
    alert('Good morning folks!')
  }
}
```

Imagine using `this` before `super` call was allowed. A month later, we might change greetColleagues to include the person’s name in the message:

greetColleagues() {
alert('Good morning folks!');
alert('My name is ' + this.name + ', nice to meet you!');
}
But we forgot that this.greetColleagues() is called before the super() call had a chance to set up this.name. So this.name isn’t even defined yet! As you can see, code like this can be very difficult to think about.

To avoid such pitfalls, JS enforces that if you want to use `this` in a constructor, you have to call `super` first. Let
the parent do its thing! And this limitation applies to React components defined as classes too:
constructor(props) {
super(props);
// ✅ Okay to use `this` now
this.state = { isOn: true };
}
This leaves us with another question: why pass props?

**You might think that passing `props` down to `super` is necessary so that the base `React.Component` constructor can initialize `this.props`:**

```js
// Inside React
class Component {
  constructor(props) {
    this.props = props
  }
}
```

And that's not far from truth - indeed, that's what it does.

But somehow, even if you can even if you call super() without the props argument, you’ll still be able to access this.props in the render and other methods. (If you don’t believe me, try it yourself!)
How does that work? It turns out that React also assigns props on the instance right after calling your constructor:

```js
// Inside React
const instance = new YourComponent(props)
instance.props = props
```

So even if you forget to pass `props` to `super()`, React would still set them right afterwards.

When React added support for classes, it didn't just add support for ES6 classes alone. The goal was to support as wide range of class abstractions as possible. It was `not clear` how relatively successful would ClojureScript, CoffeeScript, ES6, Fable, Scala.js, TypeScript, or other solutions be for defining components. So React was intentionally unopinionated about whether calling `super()` is required -- evn though ES6 classes are.

So does this mean you can just write `super()` instead of `super(props)`?

Probably not because it's still confusing. Sure, React would later assign `this.props` after your constructor has run. But
`this.props` would still be undefined between the `super` call and the end of your constructor:

```js
// Inside React
class Component {
  constructor(props) {
    this.props = props
    // ...
  }
}

// Inside your code
class Button extends React.Component {
  constructor(props) {
    super() // 😬 We forgot to pass props
    console.log(props) // ✅ {}
    console.log(this.props) // 😬 undefined
  }
  // ...
}
```

It can be even more challenging to debug if this happens in some method that's called from the constructor. And that's why I recommend always passing down `super(props)`, even though it isn't strictly necessary:

```js
class Button extends React.Component {
  constructor(props) {
    super(props) // ✅ We passed props
    console.log(props) // ✅ {}
    console.log(this.props) // ✅ {}
  }
  // ...
}
```

This ensures `this.props` is set even before the constructor exits.

You might have noticed that when you use the Context API in classes (either with the legacy contextTypes or the modern contextType API added in React 16.6), context is passed as a second argument to the constructor.

So why don’t we write super(props, context) instead? We could, but context is used less often so this pitfall just doesn’t come up as much.

With the class fields proposal this whole pitfall mostly disappears anyway. Without an explicit constructor, all arguments are passed down automatically. This is what allows an expression like state = {} to include references to this.props or this.context if necessary.

With Hooks, we don’t even have super or this. But that’s a topic for another day.
