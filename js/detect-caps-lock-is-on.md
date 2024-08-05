https://www.30secondsofcode.org/blog/s/detect-caps-lock-is-on
Oftentimes, especially when crating password inputs, you need to check if the Caps Lock key is on and inform the user.
You can do that using the `KeyboardEvent.getModifierState()` method a value of `CapsLock`. This means that you have to
listen to a keyboard event on an element in order to check the state of the Caps Lock key:

```html
<form>
  <label for="username">Username:</label>
  <input id="username" name="username" />
  <label for="password">Password:</label>
  <input id="password" name="password" type="password" />
  <span id="password-msg" style="display:none">Caps Lock is on</span>
</form>
```

```js
const el = document.getElementById('password')
const msg = document.getElementById('password-message')

el.addEventListener('keyup', (e) => {
  msg.style = e.getModifierState('CapsLock') ? 'display: block' : 'display:none'
})
```

the 'keyup' ev is used on our element of choice to then call KeyboardEvent.getModifierState() and determine the state of
the `CapsLock` k. `Keydown` and `Keypress` might also work. However, after testing on multiple devices, it seems that using 'keyup' is the preferred method as it works better across different OSes and browsers.
