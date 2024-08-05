https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/
https://cloud.tencent.com/developer/article/1392973
stale state; 那么相比于 class component，我们遇到了不同级别复杂度的问题

react 编程模型和 setInterval 不匹配造成的,Hooks 比 class 更贴近 react 编程模型，使这种不匹配更明显

问题样例。即使 API 可以简化上百种情况，议论始终指向更难的问题上

虽然你不一定要用到输入控制 delay，但动态调整可能很有用 —— 例如，用户切换到其他选项卡时，要减少 AJAX 轮询更新间隔。

不像 class 的版本，useInterval Hook 例子中，「更新」成动态调整 delay 很简单：

// 固定 delay
useInterval(() => {
setCount(count + 1);
}, 1000);

// 可调整 delay
useInterval(() => {
setCount(count + 1);
}, delay);
当 useInterval Hook 接收到不同 delay，它会重设 interval。

声明一个带有动态调整 delay 的 interval，来替代写 添加和清除 interval 的代码 —— useInterval Hook 帮我们做到了。

如果我想暂时 暂停 interval 要怎么做？我可以用一个 state 来做到：

const [delay, setDelay] = useState(1000);
const [isRunning, setIsRunning] = useState(true);

useInterval(() => {
setCount(count + 1);
}, isRunning ? delay : null);
（这是 demo!）

这让我对 React 和 Hooks 再次感到兴奋。我们可以包装现有的命令式 APIs 和创建更贴近表达我们意图的声明式 APIs。就拿渲染来说，我们可以同时准确地描述每个时间点过程，而不用小心地用指令来操作它。

我希望到这里你们开始觉得 useInterval() Hook 是一个更好的 API 了 —— 至少和组件比。

但为什么在 Hooks 中使用 setInterval() 和 clearInterval() 让人心烦呢？让我们回到计数器例子并试着手动实现它。

第一次尝试
我会从一个只渲染初始状态的简单例子开始：

这通常是好的，因为需要许多订阅 API 可以随时顺手移除老的监听者和加个新的。但是，setInterval 和它们不一样。当我们执行 clearInterval 和 setInterval 时，它们会进入时间队列里，如果我们频繁重渲染和重执行 effects，interval 有可能没有机会被执行！

我们可以通过以更短间隔重渲染我们的组件，来发现这个 bug：

setInterval(() => {
// 重渲染和重执行 Counter 的 effects
// 这里会发生 clearInterval()
// 在 interval 被执行前 setInterval()
ReactDOM.render(<Counter />, rootElement);
}, 100);

修复它的一种方法是用像 setCount(c => c + 1) 这样的 「updater」替换 setCount(count + 1)，这样可以读到新 state 变量。但这个无法帮助你获取到新的 props。

另一个方法是用 useReducer()。这种方法为你提供了更大的灵活性。在 reducer 中，你可以访问到当前 state 和新的 props。dispatch 方法本身永远不会改变，所以你可以从任何闭包中将数据放入其中。useReducer() 有个约束是你不可以用它执行副作用。（但是，你可以返回新状态 —— 触发一些 effect。）

但为什么要变得这么复杂？

阻抗不匹配
这个术语有时会被提到，Phil Haack 解释如下：

有人说数据库来自火星而对象来自金星，数据库不会自然地映射到对象模型。这很像试图将磁铁的两极推到一起。

我们的「阻抗匹配」不在数据库和对象之间，它在 React 编程模型和命令式 setInterval API 之间。

一个 React 组件可能在 mounted 之前流经许多不同的 state，但它的渲染结果将一次性全部描述出来。

我们的「阻抗匹配」不在数据库和对象之间，它在 React 编程模型和命令式 setInterval API 之间。

一个 React 组件可能在 mounted 之前流经许多不同的 state，但它的渲染结果将一次性全部描述出来。

// 描述每次渲染
return <h1>{count}</h1>
Hooks 使我们把相同的声明方法用在 effects 上：

// 描述每个间隔状态
useInterval(() => {
setCount(count + 1);
}, isRunning ? delay : null);
我们不设置 interval，但指定它是否设置延迟或延迟多少，我们的 Hooks 做到了，用离散术语描述连续过程

相反，setInterval 没有及时地描述过程 —— 一旦设定了 interval，除了清除它，你无法对它做任何改变。

这就是 React 模型和 setInterval API 之间的不匹配。

React 组件中的 props 和 state 是可以改变的， React 会重渲染它们且「丢弃」任何关于上一次渲染的结果，它们之间不再有相关性。

useEffect() Hook 也「丢弃」上一次渲染结果，它会清除上一次 effect 再建立下一个 effect，下一个 effect 锁住新的 props 和 state，这也是我们第一次尝试简单示例可以正确工作的原因。

但 setInterval 不会「丢弃」。 它会一直引用老的 props 和 state 直到你把它换掉 —— 不重置时间你是无法做到的。

或者等等，你可以做到？

Refs 可以做到！

提取一个 Hook
不可否认，上面的代码令人困惑，混合相反的范式令人费解，还可能弄乱可变 refs。

我觉得 Hooks 提供了比 class 更低级的原语 —— 但它们的美丽在于它们使我们能够创作并创造出更好的陈述性抽象。

我将我 ref 机制的代码复制粘贴到一个 custom Hook：

function useInterval(callback) {
const savedCallback = useRef();

useEffect(() => {
savedCallback.current = callback;
});

useEffect(() => {
function tick() {
savedCallback.current();
}

    let id = setInterval(tick, 1000);
    return () => clearInterval(id);

}, []);
}
当前，1000 delay 是写死的，我想把它变成一个参数：

function useInterval(callback, delay) {
我会在创建好 interval 后使用它：

    let id = setInterval(tick, delay);

现在 delay 可以在 renders 之间改变，我需要在我的 interval effect 依赖部分声明它：

useEffect(() => {
function tick() {
savedCallback.current();
}

    let id = setInterval(tick, delay);
    return () => clearInterval(id);

}, [delay]);
等等，我们不是要避免重置 interval effect，并专门通过 [] 来避免它吗？不完全是，我们只想在回调改变时避免重置它，但当 delay 改变时，我们想要重启 timer！

福利：暂停 Interval
假设我们希望能够通过传递 null 作为 delay 来暂停我们的 interval：

const [delay, setDelay] = useState(1000);
const [isRunning, setIsRunning] = useState(true);

useInterval(() => {
setCount(count + 1);
}, isRunning ? delay : null);
如何实现这个？答案时：不创建 interval。

useEffect(() => {
function tick() {
savedCallback.current();
}

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

}, [delay]);
（看 CodeSandbox demo。）

就是这样。此代码处理了所有可能的变化：改变 delay、暂停、或者恢复 interval。useEffect() API 要求我们花费更多的前期工作来描述建立和清除 —— 但添加新案例很容易。

福利：有趣的 Demo
useInterval() Hook 真的很好玩，当副作用是陈述性的，将复杂的行为编排在一起要容易得多。

例如：我们 interval 中 delay 可以受控于另外一个：

Counter that automatically speeds up

!!!!
function Counter() {
const [delay, setDelay] = useState(1000);
const [count, setCount] = useState(0);

// 增加计数器
useInterval(() => {
setCount(count + 1);
}, delay);

// 每秒加速
useInterval(() => {
if (delay > 10) {
setDelay(delay / 2);
}
}, 1000);

function handleReset() {
setDelay(1000);
}

return (
<>

<h1>Counter: {count}</h1>
<h4>Delay: {delay}</h4>
<button onClick={handleReset}>
Reset delay
</button>
</>
);
}
