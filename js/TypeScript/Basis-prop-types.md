Basic Prop Types Examples
A list of TypeScript types you will likely use in a React+TS app:

```tsx
type AppProps = {
  msg: string
  cnt: number
  disabled: boolean
  names: string[]
  status: 'waiting' | 'success'
  obj: object
  obj2: {} // almost the same as `object`, exactly the same as `Object`
  /** an object with any number of properties (PREFERRED) */
  obj3: {
    id: string
    title: string
  }
  /** array of objects! (common) */
  objArr: {
    id: string
    title: string
  }[]
  /** a dict object with any number of properties of the same type */
  dict1: {
    [key: string]: MyTypeHere
  }
  dict2: Record<string, MyTypeHere> // equivalent to dict1
  /** any function as long as you don't invoke it (not recommended) */
  onSomething: Function
  /** function that doesn't take or return anything (VERY COMMON) */
  onClick: () => void
  /** function with named prop (VERY COMMON) */
  onChange: (id: number) => void
  /** alternative function type syntax that takes an event (VERY COMMON) */
  onClick(ev: React.MouseEvent<HTMLButtonElement>): void
  /** an optional prop (VERY COMMON!) */
  optional?: OptionalType
}
```

Notice we have used the TSDoc /\*_ comment _/ style here on each prop. You can and are encouraged to leave descriptive comments on reusable components. For a fuller example and discussion, see our Commenting Components section in the Advanced Cheatsheet. https://react-typescript-cheatsheet.netlify.app/docs/advanced/misc_concerns/#commenting-components

# Useful React Prop Type Examples

Relevant for components that accepts other React components as props.

```tsx
export declare interface AppProps {
  children1: JSX.Element // bad, doesn't account for arrays
  children2: JSX.Element | JSX.Element[] // meh, doesnt accept strings
  children3: React.ReactChildren // despite the name, not at all an appropriate type; it is a utility
  children4: React.ReactChild[] // better, accepts array children
  children: React.ReactNode // best, accepts everything(see edge case below)
  functionChildren: (name: string) => React.ReactNode // recommended function as a child render prop type
  style?: React.CSSProperties // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement> // form events! the generic parameter is the type of event.target
  //  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
  props: Props & React.ComponentPropsWithoutRef<'button'> // to impersonate all the props of a button element and explicitly not forwarding its ref
  props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef> // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref
}
```

JSX.Element -> Return value of React.createElement
React.ReactNode -> Return value of a component

Forms and Events
If performance is not an issue (and it usually isn't!), inlining handlers is easiest as you can just use type inference and contextual typing:

const el = (
<button
onClick={(event) => {
/_ event will be correctly typed automatically! _/
}}
/>
);
But if you need to define your event handler separately, IDE tooling really comes in handy here, as the @type definitions come with a wealth of typing. Type what you are looking for and usually the autocomplete will help you out. Here is what it looks like for an onChange for a form event:

type State = {
text: string;
};
class App extends React.Component<Props, State> {
state = {
text: "",
};

// typing on RIGHT hand side of =
onChange = (e: React.FormEvent<HTMLInputElement>): void => {
this.setState({ text: e.currentTarget.value });
};
render() {
return (
<div>
<input type="text" value={this.state.text} onChange={this.onChange} />
</div>
);
}
}
View in the TypeScript Playground

Instead of typing the arguments and return values with React.FormEvent<> and void, you may alternatively apply types to the event handler itself (contributed by @TomasHubelbauer):

// typing on LEFT hand side of =
onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
this.setState({text: e.currentTarget.value})
}
Why two ways to do the same thing?
The first method uses an inferred method signature (e: React.FormEvent<HTMLInputElement>): void and the second method enforces a type of the delegate provided by @types/react. So React.ChangeEventHandler<> is simply a "blessed"神圣的 typing by @types/react, whereas you can think of the inferred method as more... artisanally hand-rolled. Either way it's a good pattern to know. See our Github PR for more.
