In case you missed it, Node now supports async/await out of the box since version 7.6. If you haven't tried it yet, here are a bunch of reasons with examples why you should adopt it immediately and never look back.

[UPDATE]: Node 8 LTS is out now with full Aysnc/Await support.

[EDIT]: It seems that the embedded code on gist does not work on medium native app, but it works on mobile browsers. If you are rendering this on the app, tap on the share icon and choose "open in browser" in order to see code snippets.

# Async/await 101

For those who have never heard of this topic before, here's a quick intro:

1. Async/await is a new way to write asynchronous code. Previous options for asynchronous code are callbacks and promises.
2. Async/await is actually built on top of promises. It cannot be used with plain callbacks or node callbacks.
3. Async/await is, like promises, non blocking.
4. Async/await makes asynchronous code look and behave a little more like sychronous code. This is where all its power lies.

# Syntax
Assuming a function `getJSON` that returns a promise, and that promise resolves with some JSON object, We just want to call it and log that JSON, then return 'done'.

This is how 
