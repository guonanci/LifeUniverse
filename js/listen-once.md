https://www.30secondsofcode.org/blog/s/javascript-listen-once

# jQ

Back in the day when jQuery was all the rage, we would usually use `$.one()` to create an event handler that would
execute at most once for a given event per element. A simple example would be as follows:

```html
<button id="my-btn">Click me!</button>
```

```js
$('#my-btn').one('click', () => {
  console.log('Hello!') // 'Hello!' will only be logged on the first click
})
```

# Using a flag

However, jQ seems to have fallen out of favor lately and thus many developers have resorted to writing their version of `$.one()`

An implementation could look like this:

```js
const listenOnce = (el, evt, fn) => {
  let fired = false
  el.addEventListener(evt, (e) => {
    if (!fired) fn(e)
    fired = true
  })
}
listenOnce(document.getElementById('my-btn'), 'click', () =>
  console.log('Hello!')
)
```

# Event listener options

If you are targeting modern browsers (i.e. not IE), EventTarget.addEventListener() has introduced the options object parameter, which allows us to pass a few different flags, one of which is once. Setting once to true results in the exact same behavior as the snippet above with minimal effort.

Here's one way to write the previous snippet using once, which also happens to be how we implemented the latest version of the listenOnce snippet:

```js
const listenOnce = (el, evt, fn) => el.addEventListener(evt, fn, { once: true })
listenOnce(document.getElementById('my-btn'), 'click', () =>
  console.log('Hello!')
) // 'Hello!' will only be logged on the first click
```

Image credit: Josh Frenette on Unsplash
