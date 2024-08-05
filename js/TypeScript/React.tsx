// https://heptaluan.github.io/2021/01/10/JavaScript/59/
import React,{useState,useEffect,useReducer,FC,MouseEvent,useRef} from "react";

type ObjectOrArrayProps = {
  message: string;
  count: number;
  disabled: boolean;
  names: string[];
  objArr: {
    id: string;
    title: string;
  }[];
  dict1: {
    [key: string]: MyType;
  };
  dict2: Record<string, MyType>; // TypeScript内置的Record类型
  status: "warning" | "success"; // union type
};
type FunctionProps = {
  onChange: (id: number) => void;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  optional?: OptionalType;
};
// react相关类型
export declare interface AppProps {
  children: React.ReactNode; // 包含所有children情况
  functionChildren: (name: string) => React.ReactNode;
  style?: React.CSSProperties; // 在内联style时使用
  props: React.ComponentProps<"button">; // 原生button标签自带的所有props类型，也可以在泛型的位置传入组件提取组件的Props类型
  onClickButton: React.ComponentProps<"button">["onClick"];
  // 在上一步的基础之上，提取出原生的onClick函数类型，此时函数的第一个参数会自动推断为，React的点击事件类型
}
// 函数式组件
interface AppProps0 {
  msg: string;
}
const App = ({ msg }: AppProps0) => <div>{msg}</div>;
// 包含children的函数式组件，使用内置类型React.FC
// 等同于
// AppProps & {
//   children: React.ReactNode
//   propTypes?: WeakValidationMap<P>
//   contextTypes ?: ValidationMap<any>
//   defaultProps?: Partial<P>
//   displayName?: string
// }
// 使用
interface AppProps1 {
  msg: string;
}

const App0: React.FC<AppProps1> = ({ msg, children }) => {
  return (
    <>
      {children}
      <div>{msg}</div>
    </>
  );
};
// 不过针对于简单的函数式组件，还是建议使用下面的第二种方式
interface Greeting {
  name: string;
  age: number;
}
const Hello: React.FC<Greeting> = (props) => <h1>Hello {props.name}</h1>;

// second way
const Hello2 = (props: Greeting) => <h1>Hello {props.name}</h1>;

// Hooks
// @types/react包在16.8以上的版本开始对hooks的支持
// 这里分两种情况，如果我们的默认值已经可以说明类型，那么不用手动声明类型，交给TypeScript自动推断即可
// useState
// Type inference works very well most of the time:
const [val, toggle] = React.useState(false);
// `val`is inferred to be a boolean, `toggle` only takes booleans
// See also the Using [Inferred Types](https://react-typescript-cheatsheet.netlify.app/docs/basic/troubleshooting/types/#using-inferred-types)
// section if you need to use a complext type that you've relied on inference for.
// However, many hooks are initialized with null - ish default values, and you may wonder how to provide types.Explicitly declare the
// type, and use a union type

toggle(false);
toggle(true);
const [user, setUser] = React.useState<IUser | null>(null);
const name = user?.name; // optional-chaining
// https://react-typescript-cheatsheet.netlify.app/docs/basic/troubleshooting/types/#using-inferred-types
// Using Inferred Types
// Learning on TypeScript's Type Inference is great...until you realize you need a type that was inferred, and have to
// go back and explicitly declare types/interfaces so you can export them for reuse.
// Fortunately, with `typeof`, you won't have to do that. Just use it on any value.
const [state, setState] = React.useState({ foo: 1 }) // state's type inferred to be {foo:number}
const someMethod = (obj: typeof state) => {
  // grabbing the type of state even though it was inferred
  // some code using obj
  setState(obj) // this works
}
// Using Partial Types
// Working with slicing state and props is common in React. Again, you don't really have to go and explicitly redefine your types if you
// use the Partial generic type:
const [state, setState] = useState({ foo: 1 }) // state's type inferred to be {foo:number,bar:number}
// Note: stale state merging is not actually encouraged in React.useState
// we are just demonstrating how to use Partial here
const partialStateUpdate = (obj: Partial<typeof state>) => setState({ ...state, ...obj })

// The Types I need weren't exported!
// This can be annoying but here are ways to grab the types!
// Grabbing the Prop types of a component: Use React.ComponentProps and typeof, and optionally Omit any overlapping
// 重叠types
import { Button } from 'library' // but doesn't export ButtonProps! oh no!
type ButtonProps=React.ComponentProps<typeof Button> // no prob! grab your own!
type AlertBtnProps=Omit<ButtonProps, 'onClick'> // modify
const AlertBtn: FC<AlertBtnProps> = (props) => (
  <Button onClick={()=>alert('hello')} {...props} />
)

// ComponentPropsWithoutRef，ComponentPropsWithRef
// inside some library
function foo1(bar: string,baz:number) {
  return {baz:1}
}
// inside your app
type FooReturn = ReturnType<typeof foo1>
type FooParam = Parameters<typeof foo1>
let a: FooParam[0] = 'a', b: FooParam[1] = 1
function foo() {
  return {
    a: 1,
    subInstAttr: [
      {
        b:2
      }
    ]
  }
}

type InstType=ReturnType<typeof foo>
type SubInstAttr = InstType['subInstAttr']
type SubInstType = SubInstAttr[0]
type SubInstType2=ReturnType<typeof foo>['subInstAttr'][0]
let baz2: SubInstType2 = { b: 1 }
// TS also ships with a Parameters utility type for
// useReducer
// You can use [Discriminated Unions](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions) for
// reducer actions. Don't forget to define the return type of reducer, otherwise TypeScript will infer it.
// 容易出bug，比较复杂的fn，class要加上必要的type，涉及到简单基础类型的小fn，class就不用管了，可以节省开发时间
const initialState = { count: 0 };
type ACTION_TYPE =
  // I like below code very much
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };
function reducer(state: typeof initialState, action: ACTION_TYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}
function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
    </>
  );
}

// And you probably know that 'typeof' operator allows you to extract type information from an existing variable, for example, if you vant another variable compatible with the first.

let inst = {
    a: 1,
    b: 2,
    subInst: {
        c: 3,
        d: 4
    }
}

let inst2: typeof inst;

inst2 = inst;   // type check ok!
console.log(inst2.a); // fine!
console.log(inst2.e); // error!
console.log(inst2.subInst.c); // fine!
console.log(inst2.subInst.f); // error!

// problems
// module importing
// 通常我们在使用import引入非JavaScript模块的时候，TypeScript会提示我们找不到相关模块，而此时我们使用require却是可以的
import styles from "./login.less";
import logo from "@assets/images/logo.svg";

const logo2 = require("@assets/images/logo.svg");
console.log(logo2);
// 我们需要给非JavaScript模块添加声明
// style
declare module "*.css";
declare module "*.less";
declare module "*.scss";

// img
delcare module '*.svg'
delcare module '*.png'
delcare module '*.jpg'
delcare module '*.jpeg'
delcare module '*.gif'
delcare module '*.bmp'

// 将所有用export导出的成员赋值给React，导入后用React.xx来进行访问
import * as React from 'react'
// 第二种写法仅是将默认导出（export default）的内容赋值给React
import React from 'react'

// 我们也可以通过配置 tsconfig.json 来解决 import * as xx from 'xx' 这样的引入方式，如下

{
  // 允许默认导入没有设置默认导出（export default xxx）的模块可以以 import xx from 'xx' 的形式来引入模块
  "allowSyntheticDefaultImports": true
}
// 而配置前后的对比如下

// 配置前
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// 配置后
import React from 'react'
import ReactDOM from 'react-dom'
import { types } from "node:util";
import { type } from "node:os";

useImperativeHandle(
  ref,
  () => {
    handler
  },
  [input],
)

You May Not Need defaultProps
As per this tweet, defaultProps will eventually be deprecated. You can check the discussions here:

https://twitter.com/hswolff/status/1133759319571345408
The consensus is to use object default values.

Function Components:

type GreetProps = { age?: number };

const Greet = ({ age = 21 }: GreetProps) => // etc
Class Components:

type GreetProps = {
  age?: number;
};

class Greet extends React.Component<GreetProps> {
  render() {
    const { age = 21 } = this.props;
    /*...*/
  }
}

let el = <Greet age={3} />;

// Types vs Interfaces
// https://github.com/typescript-cheatsheets/react#useful-table-for-types-vs-interfaces

// typings.d.ts

// Tabs.d.tsconfig

// Parameter 'record' implicitly has an 'any' type.ts(7006)

// Extending an interface
interface Animal {
  name: string
}
interface Bear extends Animal {
  honey: boolean
}
const bear = getBear()
// bear.name, bear.honey
type Animal0 = {
  name: string
}
type Bear0 = Animal & {
  honey: Boolean
}
interface Props1 {
  title:string
}
interface State1 {
  title:string
}
// 1. If you have explicitly typed your derived state and want to make sure that the return value from
// `getDerivedStateFromProps` comforms to it.
class Comp1 extends React.Component<Props1, State1> {
  static getDerivedStateFromProps(props: Props1, state: State1): Partial<State1> | null {
    return null
  }
}
// 2. When you want the function's return value to determine your state
class Comp2 extends React.Component<Props1, ReturnType<typeof Comp2['getDerivedStateFromProps']>> {
  static getDerivedStateFromProps(props: Props1){}
}
// 3. When you want derived state with other state fields and memoization
type CustomValue = any
interface Props2 {
  propA: CustomValue
}
interface DefinedState {
  otherStateField:string
}


// forwardRef
终极目标：提升代码架构优越性，维护性，可读性，开发效率，需求实现速度。

Partial<IPopupOption>

ts只有在推断不出类型时才去写类型

// efficiency
1. 类型从外写到内，代码从外写到内，ts类型推断可以帮你推断出object-key和object-valType


// Infer
// https://twitter.com/mgechev/status/1211030455224422401?s=20

//  `infer` in TypeScript is extremely powerful in conditional types when you need to "extract" a composite type from a type parameter!

// As any complex construct, conditional types + infer may introduce code that's hard to follow. Be careful not to overuse it.


// https://heptaluan.github.io/2021/01/10/JavaScript/59/
// 函数类型
type FnProps = {
  onClick1:()=>void
  onClick2(event:MouseEvent<HTMLButtonElement>):void
}
// react相关类型
export declare interface AppProps11 {
  children: React.ReactNode
  style?: React.CSSProperties // inline style
  props: React.ComponentProps<'button'> // 也可以在泛型的位置传入组件，提取组件Props类型
  props: React.ComponentProps<'button'>['onClick'] // 上一步基础之上，此时函数的第一个参数会自动推断为React的点击事件类型
}

函数式组件
比较常见方式

interface AppProps = { message: string }

const App = ({ message }: AppProps) => <div>{message}</div>
另外还有一种包含 children 的函数式组件，我们可以直接使用内置类型 React.FC，这样不光会包含我们定义的 AppProps 还会自动加上一个 children 类型，以及其他组件上会出现的类型

// 等同于
AppProps & {
  children: React.ReactNode
  propTypes?: WeakValidationMap<P>
  contextTypes?: ValidationMap<any>
  defaultProps?: Partial<P>
  displayName?: string
}

// 使用
interface AppProps = { message: string }

const App: React.FC<AppProps> = ({ message, children }) => {
  return (
    <>
      {children}
      <div>{message}</div>
    </>
  )
}
不过针对于简单的函数式组件，还是建议使用下面的第二种方式

interface Greeting {
  name: string
  age: number
}

const Hello: React.FC<Greeting> = (props) => <h1>Hello {props.name}</h1>

// 推荐使用第二种
const Hello2 = (props: Greeting) => <h1>Hello {props.name}</h1>

// Hooks
// useState
但是如果初始值是 null 或 undefined，那就需要通过泛型手动传入我们所期望的类型

const [user, setUser] = React.useState<IUser | null>(null)

setUser(newUser)
这样也可以保证在我们直接访问 user 上的属性时，提示你它有可能是 null，可以通过 optional-chaining 语法（TypeScript 3.7 以上支持）来避免这个错误

// ✅
const name = user?.name

// useRef
// 这个hook在很多时候没有初始值，这样可以声明返回对象中current属性的类型
function TxtInputWithFocusBtn() {
  const inputEl=useRef<HTMLInputElement>(null)
  const onBtnClick = () => {
    if(inputEl&&inputEl.current) inputEl.current.focus()
  }
}



interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
  type: T;
  props: P;
  key: Key | null;
}


// Warning: Invalid attribute name: `13`

// Warning: React does not recognize the `inlineIndent` prop on a DOM element.
