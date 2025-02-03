# Using hooks

```tsx
function App() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      // you can also put this in your static html file
      <div id="modal-root"></div>
      {showModal && (
        <Modal>
          <div
            style={{
              display: "grid", placeItems:'center',height:'100vh',width:'100vh',background:'rgba(0,0,0,.1)',zIndex:99}}>I'm a modal!{}
              <button style={{background:'papyawhip'}} onClick={()=>setShowModal(false)}>close</button>
            </div>
          </Modal>}}
          <button onClick={()=>setShowModal(true)}>show Modal</button>
          / rest of your App
        </div>
      )
      }
```

https://www.google.com/search?q=react-dom+createPortal+document.appendChild+difference&oq=react-dom+createPortal+document.appendChild+difference&aqs=chrome..69i57j33i160.46299j0j4&sourceid=chrome&ie=UTF-8
https://reactjs.org/docs/portals.html

%20 是空格
