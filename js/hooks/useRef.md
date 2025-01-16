*useRef()用来获取组件的实例、以及渲染周期之间共享数据的存储，而state不能存储跨渲染周期的数据，因为state的保存会触发组件重渲染*

useRef传入一个参数initValue，并创建一个对象{ current: initValue }给函数组件使用，在整个生命周期中该对象保持不变。



# props passing

需要将 refObj 整个传递（包含 current 属性）

createRef:

```tsx
class CssThemeProvider extends React.PureComponent<Props> {
  private rootRef = React.createRef<HTMLDivElement>();
  render() {
    return <div ref={this.rootRef}>{this.props.children}</div>;
  }
}
```

forwardRef:

```tsx
type Props = { children: React.ReactNode; type: "submit" | "button" };
export type Ref = HTMLButtonElement;
export const FancyButton = React.forwardRef<Ref, Props>((props, ref) => {
  <button ref={ref} className="MyClassName" type={props.type}>
    {props.children}
  </button>;
});
```

最后我们还可以通过 ref 来保存可变变量，以前我们只是把 ref 用作保持 DOM 节点引用的工具，可是 useRef Hook 能做的事情远不止如此，我们可以用它来保存一些值的引用，并对它进行读写

```js
const useValues = () => {
  const [values, setValues] = useState({});
  const latestValues = useRef(values);

  useEffect(() => {
    latestValues.current = values;
  });

  const [updateData] = useCallback((nextData) => {
    setValues({
      data: nextData,
      count: latestValues.current.count + 1,
    });
  }, []);

  return [values, updateData];
};
```

但是要注意：使用 ref 的过程中要特别小心，**因为它可以随时赋值，所以一定要控制好修改他的方法，特别是一些底层模块，在封装时千万不要直接暴露 ref，而是提供一些修改它的方法**

varObj stateObj refObj

useRef 存储数组的话，容易忘记清除老元素(一般场景下老元素在新 render 时无效)
React.LegacyRef<Input>, RefObject

怎么写到useEffect的依赖里没调用Effect
