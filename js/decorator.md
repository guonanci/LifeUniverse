// http://es6.ruanyifeng.com/#docs/decorator
https://www.freecodecamp.org/news/here-are-a-few-function-decorators-you-can-write-from-scratch-488549fe8f86

*A function decorator is a higher-order function that takes one function as an argument and returns another function, and the returned function is a variation of the argument function* — Javascript Allongé
Let’s write *some common function decorators found in libraries like underscore.js, lodash.js or ramda.js*.



# once(fn)

creates a version of the function that executes only once. It’s useful for an initialization function, where we want to make sure it runs only once, no matter how many times it is called from different places.

```js
function once(fn){
  let returnValue;
  let canRun = true;
  return function runOnce(){
    if(canRun) {
        returnValue = fn.apply(this, arguments);
        canRun = false;
    }
    return returnValue;
  }
}

var processonce = once(process);
processonce(); //process
processonce(); //
```

# after(count, fn)

creates a version of the function that executes only after a number of calls. It’s useful, for example, when we want to make sure the function runs only after all the asynchronous tasks have finished.
```js
function after(count, fn) {
  let runCount = 0
  return function runAfter() {
    runCount += 1
    if (runCount >= count) return fn.apply(this, arguments)
  }
}

function logResult() { console.log('call have finished');}

let logResultAfter2Calls = after(2, logResult)
setTimeout(function logFirstCall() {
  console.log('1st call has finished')
  logResultAfter2Calls()
}, 3000)

setTimeout(function logFirstCall() {
  console.log('2nd call has finished')
  logResultAfter2Calls()
}, 4000)

Note how I’m using after() to build a new function logResultAfter2Calls() that will execute the original code of logResult() only after the second call.


```

# throttle(fn, wait)
creates a version of the function that, when invoked repeatedly, will call the original function once per every second `wait` milliseconds.  It’s useful for limiting events that occur faster.

```js
function throttle(fn, interval) {
  let lastTime
  return function throttled() {
    let timeSinceLastExecution = Date.now() - lastTime
    if(!lastTime || timeSinceLastExecution >= interval)) {
      fn.apply(this, arguments)
      lastTime = Date.now()
    }
  }
}

let throttledProcess = throttle(process, 1000)
$(window).mousemove(throttledProcess)

// In this example, moving the mouse will generate a lot of mousemove events, but the call of the original function process() will just happen once per second.


```
