[react-redux-readable-reducers](https://www.30secondsofcode.org/blog/s/react-redux-readable-reducers)

```js
const initialState = {
  id: null,
  name: '',
  properties: {},
}

const ACTION_TYPES = {
  CREATE_ID: 'createID',
  SET_NAME: 'setName',
  ADD_PROPERTY: 'addProperty',
  REMOVE_PROPERTY: 'removeProperty',
}

const generateID = () => Math.floor(Math.random() * 1000)

const createID = (state) => ({
  ...state,
  id: generateID(),
})

const setName = (state, { name }) => ({
  ...state,
  name,
})

const addProperty = (state, { propertyName, propertyValue }) => ({
  ...state,
  [propertyName]: propertyValue,
})

const removeProperty = (state, { propertyName }) => {
  const properties = Object.keys(state.properties).reduce((acc, key) => {
    if (key !== propertyName) acc[key] = state.properties[key]
    return acc
  }, {})
  return { ...state, properties }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_ID:
      return createId(state, action.payload)
    case TYPES.SET_NAME:
      return setName(state, action.payload)
    case TYPES.ADD_PROPERTY:
      return addProperty(state, action.payload)
    case TYPES.REMOVE_PROPERTY:
      return removeProperty(state, action.payload)
    default:
      return state
  }
}
```
