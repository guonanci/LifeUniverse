# easy

https://leetcode-cn.com/problems/implement-stack-using-queues/

请你仅使用两个队列实现一个后入先出 LIFO 的栈，支持*普通队列的全部四种操作：push，top，pop，empty*

实现 MyStack 类：

- void push(int x)将元素 x 压入栈顶
- int pop()移除并返回栈顶元素
- int top() 返回栈顶元素
- boolean empty() 如果栈是空的，返回 TRUE；否则返回 FALSE

注意：

- 只能使用队列的基本操作-push to back,peek/pop from front,size,is empty 这些操作
- 你所使用的语言也许不支持队列。可以使用 list（列表）、deque（双端队列）来模拟一个队列，只要是标准队列操作即可。

```js
// input
['My Stack','push','push','top','pop','empty']
[[],[1],[2],[],[],[]]
// output
[null,null,null,2,2,false]

// Explanation explain
MyStack myStack=new MyStack()
myStack.push(1)
myStack.push(2)
myStack.top() // 2
myStack.pop() // 2
mySTack.empty() // false
```

提示：

1 <= x <= 9
最多调用 100 次 push、pop、top 和 empty
每次调用 pop 和 top 都保证栈不为空



进阶：你能否实现每种操作的均摊时间复杂度为 O(1) 的栈？换句话说，执行 n 个操作的总时间复杂度 O(n) ，尽管其中某个操作可能需要比其他操作更长的时间。你可以使用两个以上的队列。

通过次数 107,485 提交次数 160,288

绪论
这道题是为初级读者准备的，题目涉及到栈和队列两种数据结构
栈是一种后进先出的数据结构，元素从顶端入栈，然后从顶端出栈。
队列是一种先进先出的数据结构，元素从后端入队，然后从前端出队

# method1：两个队列

为了满足栈的特性，即最后入栈的元素最先出栈，在使用队列实现栈时，应满足队列前端的元素是最后入栈的元素。可以使用两个队列实现栈的操作，其中 queue1 用于存储栈内的元素，queue2 作为入栈操作的辅助队列。
入栈操作时，首先将元素入队到 queue2，然后将 queue1 的全部元素依次出队并入队到 queue2，此时 queue2 的前端元素即为新入栈的元素

```tsx
let MyStack = function () {
  this.queue = []
  this._queue = []
}
MyStack.prototype.push = function (x) {
  this.queue.push(x)
}
MyStack.prototype.pop = function () {
  while (this.queue.length > 1) this._queue.push(this.queue.shift())
  let ans = this.queue.shift()
  while (this._queue.length) this.queue.push(this._queue.shift())
  return ans
}
MyStack.prototype.top = function () {
  return this.queue.slice(-1)[0]
}
MyStack.prototype.empty = function () {
  return !this.queue.length
}
```

```java
class MyStack {
  Queue<Integer> queue1;
  Queue<Integer> queue2;
  // Initialize your data structure here.
  public MyStack() {
    queue1=new LinkedList<Integer>()
    queue2=new LinkedList<Integer>()
  }
  // Push element x onto stack
  public void push(int x){
    queue2.offer(x);
    while(!queue1.isEmpty()) queue2.offer(queue1.poll());
    Queue<Integer> tmp=queue1;
    queue1 = queue2;
    queue2=tmp;
  }
  // Remove the element on top of the stack and returns that element
  public int pop(){
    return queue1.poll()
  }
  // Get the top element.
  public int top(){
    return queue1.peek()
  }
  // Returns whether the stack is empty.
  public boolean empty(){
    return queue1.isEmpty()
  }
}
```

```java
class MyStack {
  Queue<Integer> queue;
  public MyStack() {
    queue=new LinkedList<Integer>();
  }
  public void push(int x){
    int n=queue.size()
    queue.offer(x);
    for(int i=0;i<n;i++) queue.offer(queue.poll());
  }
  public int pop(){
    return queue.poll();
  }
}
```
