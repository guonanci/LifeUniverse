# Option 1: Using react-error-boundary

React-error-boundary is a lightweight package ready to use for this scenario with TS support built-in. This approach also lets you avoid class components that are not that popular anymore.

# Option2:Writing your custom boundary component

If you dont want to add a new npm package for this, you can also write your own ErrorBoundary component.

```tsx
import React, { ReactNode, Component, ErrorInfo } from 'react'
interface Props {
  children: ReactNode
}
interface State {
  hasError: boolean
}
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }
  public componentDidCatch(er: Error, erInfo: ErrorInfo) {
    console.error('Uncaught error:', er, erInfo)
  }
  public render() {
    if (this.state.hasError) return <h1>Sorry.. there was an error</h1>
    return this.props.children
  }
}
export default ErrorBoundary
```
