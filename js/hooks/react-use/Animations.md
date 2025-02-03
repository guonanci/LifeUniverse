Animations.md

.circleci,.github,.storybook,docs,src,stories,tests dir;.editorconfig, .eslintrc.js,.gitignore,.travis.yml,CHANGELOG.md,CONTRIBUTING.md,LICENSE,README.md,babel.config.js,jest.config.base.ts,jest.config.node.ts,jest.config.ts,package.json,renovate.json,tsconfig.json,yarn.lock.

interpolate 插入 numeric values over time.

# Lifecycles.md

modify and extend built-in React hooks or imitate React Class Cmpt lifecycle patterns

# Sensors

'Sensor Hooks' listen to changes in some interface and force your components to be re-rendered with the new state, up-to-date st.

# Side-effects

allow your app trigger various side-effects using browser's API

# State.md

allow you to easily mng(manage) st of booleans,arrays,maps

# UI

allow you to control and subscribe to st changes of UI elements

# Usage

you need to have React 16.8.0 or later installed to use the Hooks API. You can import each hook individually

```js
import useToggle from 'react-use/lib/useToggle'
```

or use ES6 named imports(tree shaking recommended)

```js
import { useToggle } from 'react-use'
```

Depending on your bundler you might run into a massing dependency er with ES6 named import statements. Some hooks require you to install peer dependencies so we recommend using individual imports. If you want the best of both worlds you can transform the named import statement to individual import statements `babel-plugin`
