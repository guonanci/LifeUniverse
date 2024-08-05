myRecord.remove('b')

// tries structure sharing performance up...When we operate one immutable object, ImmutableJS only clones this node and
// its ancestor, other remains the same


// javascript
const arr = [ 1 ]
arr.push(2)
console.log(arr) // [ 1, 2 ]

// immutable
const arr = immutable.fromJS([ 1 ])
arr.push(2) // wrong
console.log(arr) // [ 1 ]
arr = arr.push(2) // right
console.log(arr) // [ 1, 2 ]

const obj = { a: 1 }
const res = obj.a.a.a // error

const immutableData = fromJS({ a: 1 })
const res = immutableData.getIn([ 'a', 'b', 'c' ]) // undefined

// immutable对象直接可以转JSON.stringify,不需要显式手动调用toJS转原生
// 判断对象是否为空，可以直接用size

import React from 'react'
import { is } from 'immutable'

class BaseComponent extends React.Component {
  constructor (props, context, updater) {
    super(props, context, updater)
  }

  shouldComponentUpdate (nextProps, nextState) {
    const thisProps = this.props || {}
    const thisState = this.state || {}
    nextState = nextState || {}
    nextProps = nextProps || {}

    if (Object,keys(thisProps).length !== Object.keys(nextProps).length ||
      Object.keys(thisState).length !== Object.keys(nextState).length) return true

      for (const key in nextProps) {
        if (!is(thisProps[key], nextProps[key])) return true
      }

      for (const key in nextState) {
        if (!is(thisState[key], nextState[key])) return true
      }
      return false
  }
}

export default BaseComponent

import BaseComponent from './BaseComponent'

class Menu extends BaseComponent {
  constructor () {
    super()
  }
}


import createHistory from 'history/createBrowserHistory'
const app = dva({
  history: createHistory(),
  initialState,
  onError,
  onAction,
  onStateChange,
  onReducer,
  onEffect,
  onHmr,
  extraReducers,
  extraEnhancers,
})

import createLoading from 'dva-loading'

app.use(createLoading(opts))

app.model({
  subscriptions: {
    setup ({ dispatch }, done) {
      done()
    }
  }
})

import { message } from 'antd'
import createLogger from 'redux-logger'
import undoAble from 'redux-undo'
import { reducer as formReducer } from 'redux-form'
const app = dva({
  onError (er) {
    message.er(er.message, 3)
  },
  onAction: createLogger(opts),
  onStateChange: fn,
  onReducer: reducer => {
    return (state, action) => {
      const undoOpts = {}
      const newState = undoAble(reducer, undoOpts)(state, action)
      // 由于dva同步了routing数据，所以需要把这部分还原
      return { ...newState, routing: newState.present.routing }
    }
  },
  onEffect: fn, // dva-loading based on this
  onHmr: fn, // babel-plugin-dva-hmr
  extraReducers: {
    form: formReducer,
  }
})

app.unmodel(namespace)

app.router(({ history, app }) => RouterConfig)

app.router(require('./router'))

import { Router, Route } from 'dva/router'
import IndexPage from './routes/IndexPage'
import TodoList from './routes/TodoList'

function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/todoList" component={TodoList} />
    </Router>
  )
}
export default RouterConfig


Range()
// Returns a Seq.indexed of numbers from start(inclusive) to end(exclusive), be step, where start defaults to 0, step to
// 1, and end to infinity. When start is equal to end, returns empty range.

Range(start?: Number, end?: Number, step?: number): Seq.Indexed<number>

type Record<TProps>

const { Record } = require('immutable')
const ABRecord = Record({ a: 1, b: 2 })
const myRecord = ABRecord({ b: 3 })

myRecord.size // 2
myRecord.get('a') // 1
myRecord.get('b') // 3
const myRecordWithoutB = myRecord.remove('b')
myRecordWithoutB.get('b') // 2
myRecordWithoutB.size // 2

// is(): Value equality check with semantic similar to `Object.is`, but treats Immutable Collections as values, equal if
// the second Collection includes equivalent values.
is(first: any, second: any): boolean

const map1 = Map({ a: 1 })
const map2 = Map({ a: 1 })
assert.equal(map1 !== map2, true)
assert.equal(Object.is(map1, map2), false)
assert.equal(is(map1, map2), true)

hash(value: any): number

isImmutable() // True if maybeImmutable is an Immutable Collection or Record.

isCollection() // True if maybeCollection is a Collection, or any of its subclasses
isKeyed() // True if maybeCollection is a Collection.Keyed, or any of its subclasses
isKeyed([]) // false
isKeyed({}) // false
isKeyed(Map({})) // true
isKeyed(List({})) // false
isKeyed(Stack({})) // false
isIndexed() // True if maybeCollection is a Collection.Indexed, or any of its subclasses
isIndexed([]) // false
isIndexed({}) // false
isIndexed(Map({})) // true
isIndexed(List([])) // true
isIndexed(Stack([])) // true
isIndexed(Set({})) // false


isAssociative() // True if maybeAssociative is either a Keyed or Indexed Collection.
isAssociative(Set()) // false

isOrdered() // Collection.Indexed, OrderedMap OrderedSet; a Collection where iteration order is well defined
isValueObject()
isSeq()
isList()
isMap()
isOrderedMap()
// is...
get()
getIn()
has()
hasIn()
remove()
removeIn()
set()
update()
// Immutable Map is an unordered Collection.Keyed of (key, value) pairs and O(log32 N) gets and O(log32 N) persistent sets
toSet().toList()
