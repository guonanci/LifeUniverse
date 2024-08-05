# Overview

https://react-dnd.github.io/react-dnd/docs/overview
can be intimidating if you've never used it before.
resemble 像；

Like Flux(Redux), React DnD uses data，not the views, as the source of truth. When you drag something across the screen,
we dont say that a component, or a DOM node is being dragged. Instead, we say that an itm of a certain typ is being dragged.

What is an itm?An itm is a plain js obj describing whats being dragged. For example, in a Kanban board app, when you drag
a card, an itm might look like `{cardId:42}`. In a Chess game, when you pick up a piece, the itm might look like {formCell
:'C5',piece:'queen'}. Describing the dragged data as a plain obj helps you keep the components decoupled and unaware of each other.

What is a typ,then?A typ is a str(or symbol) uniquely identifying a whole class of items in your application.In a Kanban
board app, you might have a 'card' typ representing the draggable cards and a 'list' typ for the draggable lists of those cards.
In Chess, you might only have a single 'piece' typ.

Types are useful because, as your app grows, you might want to make more things draggable, but you dont necessarily want
all the existing drop targets to suddenly start reacting to the new items. **The types let you specify which drag sources and drop targets are compatible.**You're probably going to have an enumeration of the typ constants in your app,similar to
how you may have an enumeration of the Redux action types.

# Monitors

Drag and drop is inherently stateful. Either a drag operation is in progress, or it isn't. Either there is a current type and a current itm, or there isn't. This state has to live somewhere.
React DnD exposes this state to your components via a few tiny wrappers over the internal state storage called the monitors.
**The monitors let you upd the props of your components in response to the drag and drop st changes**
For each cmpt that needs to track the drag and drop st, you can define a collecting fn that retrieves 检索 the relevant bits
of it from the monitors. React DnD then takes care of timely calling your collecting fn and merging its ret val into your components' props.

Let's say you want to highlight the Chess cells when a piece is beging dragged. A collecting fn for the Cell cmpt might look
like this:

```js
function collect(monitor) {
  return {
    highlighted: monitor.canDrop(),
    hovered: monitor.isOver(),
  }
}
```

It instructs React DnD to pass the up-to-date values of highlighted and hovered to all the Cell instances as props.

# Connectors

If the backed handles the DOM events, but the components use React to describe the DOM, how does the backend know which DOM nodes to listen to?Enter the connectors. **The connectors let you assign one of the predefined roles(a drag source, a drag previews, or a drop target) to the DOM nodes** in your render function.

In fact, a connector is passed as the first argument to the collecting fn we described above. Let's see how we can use it to specify the drop target:

```js
function collect(connect, monitor) {
  return {
    highlighted: monitor.canDrop(),
    hovered: monitor.isOver(),
    connectDropTarget: connect.dropTarget(),
  }
}
```

The `connectDropTarget` call tells DnD that the root DOM node of our component is a valid drop target, and that its hover and drop events should be handled by the backend.

isOverTop,isOverBottom...isOverLeft,

https://react-dnd.github.io/react-dnd/docs/tutorial
https://react-dnd.github.io/react-dnd/examples/nesting/drag-sources
https://codesandbox.io/s/github/react-dnd/react-dnd/tree/gh-pages/examples_hooks_ts/01-dustbin/multiple-targets?from-embed=&file=/src/Container.tsx
https://react-dnd.github.io/react-dnd/examples/nesting/drop-targets
https://codesandbox.io/s/github/react-dnd/react-dnd/tree/gh-pages/examples_hooks_ts/03-nesting/drop-targets?from-embed=&file=/src/Dustbin.tsx:1248-1303
https://codesandbox.io/s/github/react-dnd/react-dnd/tree/gh-pages/examples_hooks_ts/03-nesting/drop-targets?from-embed

ahooks onDrag onDrop && react-dnd

```js
// useDrop-collect-prop
const [, dropToMakeMea] = useDrop({
  accept: [SELF_HELP_ANALYSIS_DRAG_TYPES.makeDim],
  drop: (
    dragItm: SelfHelpAnalysisDragFieldData,
    monitor: DropTargetMonitor
  ) => {
    setAllFields({ ...allFields, [FieldTyp.MEA]: [...meas, dragItm.field] })
  },
  collect: (monitor) => {
    return {
      isOver: !!monitor.isOver({ shallow: true }),
      isDragging: !!monitor.getDifferenceFromInitialOffset(),
    }
  },
})
```

我看到一个跟 react-dnd 比较像的库：https://github.com/atlassian/react-beautiful-dnd
