// Here's the corrected version of this simple function. We add the async keyword before our function declaration. Following the same rule, you can't have a top level await. Tonic, the program being used here, relaxes this rule since its so convenient when working in a REPL.

// What does async do? Essentially, it wraps the return value of the function in a promise. Under the hood it is more or less using generators, but all of that is hidden away behind this simple syntax..


// "await" is not threads
// In a language with threads, concurrency can be out of your control. Your thread can be interrupted at any time, so we need locks and other synchronization primitives.

// But JavaScript's model hasn't changed, it's still single threaded. The code is only interrupted by your explicit command to "await". You can still mess up by sharing state, but that's nothing new.

// await gives you explicit control over concurrency. You can combine this with powerful promise utilities like Promise.all, which will wait for every promise to finish and then finish itself, to write powerful and yet easy to understand asynchronous code.




// await gives you explicit control over concurrency. You can combine this with powerful promise utilities like Promise.all, which will wait for every promise to finish and then finish itself, to write powerful and yet easy to understand asynchronous code.



// You can use native promises, which are increasingly available, or a library like Bluebird that has an extensive set of utilities that make many tasks simple.

// And npm is full of libraries that support promises, and promisified wrappers of libraries that don't yet have native support.


// How can you use this right now? Babel.

// If you aren't already using Babel, it's easy to install. And await is supported out of the box in the latest version!

// UPDATE: Now available natively in Node v7.6.0!

// Promise

Promise.race(iterable) // return a promise, once one promise in the iterable is resolved or rejected, the promise returned will be resolved or rejected.

var promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, 'one')
})
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, 'two')
})

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value)
  // Both value, but promise2 is faster
})

// expected output: 'two'


function Promise (executor) {
  var self = this
  self.status = 'pending' // Promise当前de'zhi
  self.data = undefined
}


