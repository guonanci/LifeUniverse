#Stack
栈和数组的区别:
1. 数组的许多内建方法有 O(n) 的时间复杂度, when you splice an arr, it has to find the specific index, remove a  specified number of elements, then shift all the following elements forward to fill the place of the removed elements. Contrast this with using the stack(object) which has direct look-up of properties and does not have to be kept 'in-order'
2. Arrs take upd a block of space because they have to keep their order, where as an object does not

Pesudo Code
Create Stack class/constructor
  create and set count to 0
  create storage object

Create push method on Stack prototype
  Add the given value into storage w/ a key of current count
  Increment count
Create pop method on Stack prototype
  Check to see if stack is empty
    if so, return undefined
  Decrement count
  Save element at top of stack to a var(to later return)
  Delete count
  Return saved element

Create size method on Stack prototype
  Return count

Time complexity
For each method on the stack, the worst-case time complexity is constant-O(1). This means that as the stack grows to n size, each method completes its job in the same amount of time
- push: Constant-O(1)
- pop: Constant-O(1)
- peek: Constant-O(1)
- empty: Constant-O(1)
- size: Constant-O(1)
- swap: Constant-O(1)


```js
// This implementation does not include swap, empty or peek

// This Stack is written using the pseudoclassital pattern


// Creates a Stack
const Stack = function() {
  this.count = 0
  this.storage = {}
}  


// Adds a value onto the end of the stack
Stack.prototype.push = function(value) {
  this.storage[this.count] = value
  this.count++
}


// Removes and returns the value at the end of the stack
Stack.prototype.pop = function() {
  // Check to see if the stack is empty
  if (!this.count) {
    return undefined
  }

  this.count--
  const result = this.storage[this.count]
  delete this.storage[this.count]
  return result
}


// Returns the len of the stack
Stack.prototype.size = function() {
  return this.count
}
```
