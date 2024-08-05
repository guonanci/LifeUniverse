# List of event types

- Event Type Desc
  - *AnimationEvent* CSS Animations
  - *ChangeEvent* Changing the value of <input>,<select>,<textarea> element
  - *ClipboardEvent* Using copy,paste,cut events
  - *CompositionEvent* Events that occur due to the user indirectly entering txt(e.g. depending on Browsers and PC setup, a popup window may appear with additional characters if you e.g. want to type Japanese on a US Keyboard)
  - *DragEvent* Drag and drop interaction with a pointer device(e.g. mouse).
  - *FocusEvent* Event that occurs when element gets or loses focus.
  - *FormEvent* Event that occurs whenever a form or form element gets/loses focus, a form element val is changed or the form is submitted
  - *InvalidEvent* Fired when validity restrictions of an input fails(e.g <input type='number' max='10'> as someone would insert number 20).
  - *KeyboardEvent* User interaction with the keyboard. Each event describes a single key interaction.
  - *MouseEvent* Events that occur due to the user interacting with a pointing device(e.g. mouse)
  - *PointerEvent* Event that occur due to user interaction with a variety pointing or devices such as mouse, pen/stylus 铁笔, a touchscreen and which also supports multi-touch. Unless you develop for older browsers(IE10 or Safari 12), pointer events are recommended. Extends UIEvent.
  - *TouchEvent* Events that occur due to the usr interacting with a touch device. Extends UIEvent.
  - *TransitionEvent* CSS Transition. Not fully browser supported. Extends UIEvent
  - *UIEvent* Base Event for Mouse,Touch,Pointer events
  - *WheelEvent* Scrolling on a mouse wheel or similar input device.(Note: wheel event should not be confused with the scroll event)
  - *SyntheticEvent* The base event for all above events. Should be used when unsure about event type.

What about InputEvent?

You've probably noticed that there is no InputEvent. This is because it is not supported by Typescript as the event itself has no fully browser support and may behave differently in different browsers. You can use KeyboardEvent instead.
