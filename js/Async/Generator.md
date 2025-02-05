# yield

A 'yield' expression is only allowed in a generator body.ts(1163)

```js
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
A: [0, 10], [10, 20]
B: 20, 20
C: 10, 20
D: 0, 10 and 10, 20
答案
答案: C
一般的函数在执行后不能中途停下。但生成器函数却可以中途 “停下”，之后可以再从停下的地方继续。当生成器遇到yield关键字时，会生成yield后面的值。注意，生成器在这种情况下不 返回 (return ) 值，而是 生成 (yield) 值。

首先，我们用10作为参数i来初始化生成器函数。然后使用next()方法一步步执行生成器。第一次执行生成器的时候，i的值为10，遇到第一个yield关键字，它要生成i的值。此时，生成器 “暂停”，生成了10。

然后，我们再执行next()方法。生成器会从刚才暂停的地方继续，这个时候i还是10。于是我们走到了第二个yield关键字处，这时候需要生成的值是i*2，i为10，那么此时生成的值便是20。所以这道题的最终结果是10,20。
```

```js
如何能打印出console.log语句后注释掉的值？
function* startGame() {
  const 答案 = yield "Do you love JavaScript?";
  if (答案 !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
A: game.next("Yes").value and game.next().value
B: game.next.value("Yes") and game.next.value()
C: game.next().value and game.next("Yes").value
D: game.next.value() and game.next.value("Yes")
答案
答案: C
generator函数在遇到yield关键字时会 “暂停” 其执行。 首先，我们需要让函数产生字符串Do you love JavaScript?，这可以通过调用game.next().value来完成。上述函数的第一行就有一个yield关键字，那么运行立即停止了，yield表达式本身没有返回值，或者说总是返回undefined，这意味着此时变量 答案 为undefined

next方法可以带一个参数，该参数会被当作上一个 yield 表达式的返回值。当我们调用game.next("Yes").value时，先前的 yield 的返回值将被替换为传递给next()函数的参数"Yes"。此时变量 答案 被赋值为 "Yes"，if语句返回false，所以JavaScript loves you back ❤️被打印。
```

# yield*

```js
function* generatorOne() {
  yield ['a', 'b', 'c'];
}

function* generatorTwo() {
  yield* ['a', 'b', 'c'];
}

const one = generatorOne()
const two = generatorTwo()

console.log(one.next().value)
console.log(two.next().value)
A: a and a
B: a and undefined
C: ['a', 'b', 'c'] and a
D: a and ['a', 'b', 'c']
答案
答案: C
通过 yield 关键字，我们在 Generator 函数里执行yield表达式。通过 yield* 关键字，我们可以在一个Generator 函数里面执行（yield表达式）另一个 Generator 函数，或可遍历的对象 (如数组).

在函数 generatorOne 中，我们通过 yield 关键字 yield 了一个完整的数组 ['a', 'b', 'c']。函数one通过next方法返回的对象的value 属性的值 (one.next().value) 等价于数组 ['a', 'b', 'c'].

console.log(one.next().value) // ['a', 'b', 'c']
console.log(one.next().value) // undefined
在函数 generatorTwo 中，我们使用 yield* 关键字。就相当于函数two第一个yield的值，等价于在迭代器中第一个 yield 的值。数组['a', 'b', 'c']就是这个迭代器。第一个 yield 的值就是 a，所以我们第一次调用 two.next().value时，就返回a。

console.log(two.next().value) // 'a'
console.log(two.next().value) // 'b'
console.log(two.next().value) // 'c'
console.log(two.next().value) // undefined
```

```js
async function* range(start, end) {
 for (let i = start; i <= end; i++) {
  yield Promise.resolve(i);
 }
}

(async () => {
 const gen = range(1, 3);
 for await (const item of gen) {
  console.log(item);
 }
})();
A: Promise {1} Promise {2} Promise {3}
B: Promise {<pending>} Promise {<pending>} Promise {<pending>}
C: 1 2 3
D: undefined undefined undefined
答案
答案: C
我们给 函数 range 传递： Promise{1}, Promise{2}, Promise{3}，Generator 函数 range 返回一个全是 async object promise 数组。我们将 async object 赋值给变量 gen，之后我们使用for await ... of 进行循环遍历。我们将返回的 Promise 实例赋值给 item： 第一个返回 Promise{1}， 第二个返回 Promise{2}，之后是 Promise{3}。因为我们正 awaiting item 的值，resolved 状态的 promsie，promise 数组的 resolved 值 以此为： 1，2，3.
```

```js
选择哪一个？
const teams = [
 { name: "Team 1", members: ["Paul", "Lisa"] },
 { name: "Team 2", members: ["Laura", "Tim"] }
];

function* getMembers(members) {
 for (let i = 0; i < members.length; i++) {
  yield members[i];
 }
}

function* getTeams(teams) {
 for (let i = 0; i < teams.length; i++) {
  // ✨ SOMETHING IS MISSING HERE ✨
 }
}

const obj = getTeams(teams);
obj.next(); // { value: "Paul", done: false }
obj.next(); // { value: "Lisa", done: false }
A: yield getMembers(teams[i].members)
B: yield* getMembers(teams[i].members)
C: return getMembers(teams[i].members)
D: return yield getMembers(teams[i].members)
答案
答案: B
为了遍历 teams 数组中对象的属性 members 中的每一项，我们需要将 teams[i].members 传递给 Generator 函数 getMembers。Generator 函数返回一个 generator 对象。为了遍历这个 generator 对象中的每一项，我们需要使用 yield*.

如果我们没有写 yield，return yield 或者 return，整个 Generator 函数不会第一时间 return 当我们调用 next 方法。
```

*简述一下Generator函数：*
传统的编程语言，早有异步编程的解决方案（其实是多任务的解决方案）。其中有一种叫做“协程”（coroutine），意思是多个线程互相协作，完成异步任务。

协程有点像函数，又有点像线程，它的运行流程大致如下：

第一步，协程 A 开始执行；
第二步，协程 A 执行到一半，进入暂停，执行权转移到协程 B；
第三步，（一段时间后）协程 B 交还执行权；
第四步，协程 A 恢复执行；
上面流程的协程 A，就是异步任务，因为它分成两段（或多段）执行。

举例来说，读取文件的协程写法如下：

function* asyncJob() {
 // ...
 var f = yield readFile(fileA);
 // ...
}
上面代码的函数 asyncJob 是一个协程，它的奥妙就在其中的 yield 命令。它表示执行到此处，执行权将交给其他协程。也就是说，yield 命令是异步两个阶段的分界线。协程遇到 yield 命令就暂停，等到执行权返回，再从暂停的地方继续往后执行。

Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。

function* gen(x) {
  var y = yield x + 2;
  return y;
}

var g = gen(1);
g.next() // { value: 3, done: false }
g.next(2) // { value: 2, done: false }
next 是返回值的 value 属性，是 Generator 函数向外输出数据；next 方法还可以接受参数，向 Generator 函数体内输入数据。

上面代码中，第一个 next 方法的 value 属性，返回表达式 x + 2 的值 3。第二个 next 方法带有参数 2，这个参数可以传入 Generator 函数，作为 上个阶段 异步任务的返回结果，被函数体内的变量 y 接收。因此，这一步的 value 属性，返回的就是 2（变量 y 的值）。
