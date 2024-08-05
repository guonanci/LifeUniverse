考察：事件轮询机制、链式调用、队列


```js
class LazyMan {
  constructor(name) {
    this.name = name;
    this.task = []; // 任务列表
    function fn() {
      console.log("hi" + this.name);
      this.next();
    }
    this.task.push(fn);
    // 重点：使用setTimeout宏任务，确保所有的任务都注册到task列表中
    setTimeout(() => {
      this.next();
    });
  }
  next() {
    // 取出第一个任务并执行
    let fn = this.task.shift();
    fn && fn.call(this);
  }
  sleepFirst(time) {
    function fn() {
      console.log("sleepFirst" + time);
      setTimeout(() => {
        this.next();
      }, time);
    }
    // 插入到第一个
    this.task.unshift(fn);
    // 返回this 可以链式调用
    return this;
  }
  sleep(time) {
    function fn() {
      console.log("sleep" + time);
      setTimeout(() => {
        this.next();
      }, time);
    }
    this.task.push(fn);
    return this;
  }
  eat(something) {
    function fn() {
      console.log("eat" + something);
      this.next();
    }
    this.task.push(fn);
    return this;
  }
}

new LazyMan("王")
  .sleepFirst(3000)
  .eat("breakfast")
  .sleep(3000)
  .eat("dinner");
```

# 消息队列
https://github.com/a1029563229/InterviewQuestions/tree/master/javascript/25
```js
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
class LazyManClass {
  constructor(name){
    this.name=name
    this.fns=[]
    console.log(`Hi I am ${this.name}`)
    setTimeout(()=>{
      this.next()
    })
    return this
  }
  sleep(time){
    const fn=()=>{
      setTimeout(() => {
        console.log(`waited${time}seconds...`);
        this.next()
      }, time*1000)
    }
    this.fns.push(fn)
    return this
  }
  sleepFirst(time){
    const fn=()=>{
      setTimeout(() => {
        console.log(`waited${time}seconds...`);
        this.next()
      }, time*1000)
    }
    this.fns.unshift(fn)
    return this
  }
  eat(food){
    const fn=()=>{
      console.log(`I am eating ${food}`);
      this.next()
    }
    this.fns.push(fn)
    return this
  }
  next(){
    const fn=this.fns.shift()
    fn?.()
  }
}
const LazyMan=name=>{
  return new LazyManClass(name)
}
```
