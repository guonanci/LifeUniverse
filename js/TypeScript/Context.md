https://github.com/typescript-cheatsheets/react#context

We can write a helper function called createCtx that guards against accessing a Context whose value wasn't provided. By doing this, API instead, we never have to provide a default and never have to check for undefined:

```tsx
import * as React from 'react'

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
function createCtx<A extends {} | null>() {
  const ctx = React.createContext<A | undefined>(undefined)
  function useCtx() {
    const c = React.useContext(ctx)
    if (c === undefined)
      throw new Error('useCtx must be inside a Provider with a value')
    return c
  }
  return [useCtx, ctx.Provider] as const // 'as const' makes TypeScript infer a tuple
}

// Usage:

// We still have to specify a type, but no default!
export const [useCurrentUserName, CurrentUserProvider] = createCtx<string>()

function EnthusasticGreeting() {
  const currentUser = useCurrentUserName()
  return <div>HELLO {currentUser.toUpperCase()}!</div>
}

function App() {
  return (
    <CurrentUserProvider value='Anders'>
      <EnthusasticGreeting />
    </CurrentUserProvider>
  )
}
```
