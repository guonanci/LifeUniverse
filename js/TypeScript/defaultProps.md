# Consuming Props of a Component with dftProps

> A component with `dftProps` may seem to have some required props that actually aren't.

## Problem Statement

Here's what you want to do:

```tsx
interface IProps {
  name: string
}
const defaultProps = {
  age: 25,
}
const GreetComponent = ({ name, age }: IProps & typeof defaultProps) => (
  <div>{`Hello, my name is ${name}, ${age}`}</div>
)
const TestComponent = (props: React.ComponentProps<typeof GreetComponent>) => {
  return <h1 />
}

// Property 'age' is missing in type '{ name: string; }' but required in type '{ age: number; }'
const el = <TestComponent name='foo' />
```

## Solution

Define a utility that applies JSX.LibraryManagedAttributes:

```tsx
type ComponentProps<T> = T extends
| React.ComponentType<inter P>
| React.Component<infer P>
? JSX.LibraryManagedAttributes<T, P>
: never
const TestComponent = (props: ComponentProps<typeof GreetComponent>) => {
  return <h1 />;
};

// No error
const el = <TestComponent name="foo" />;
```
