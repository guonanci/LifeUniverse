# iframe

```js
<Spin
          spinning={false}
          delay={300}
        >
          <div className={styles.wrapper}>
            <iframe
              ref={pdfPreview}
              className={iframeFullscreen ? styles.fullscreen : ''}
              src={`${window.location.origin}/pdfjs-2.2.228-dist/web/viewer.html?file=${showAvatar(data?.programFilePath)}`}
              width={'100%'}
              height={'100%'}
            />
          </div>
        </Spin>
```

learningplatform\public\pdfjs-2.2.228-dist\build\pdf.js

# <https://mozilla.github.io/pdf.js/api/>
