# ES12 new features(chrome already support it)

    ```js

    'sas'.replaceAll(/s/,'a')
    // Uncaught TypeError: String.prototype.replaceAll called with a non-global RegExp argument
    // at String.replaceAll (<anonymous>)
    // at <anonymous>:1:5
    'sas'.replaceAll('s','a') // 'aaa'
    'sas'.replace(/s/g,'a') // 'aaa'
    ```

so show me how to implement `String.prototype.replaceAll` 在这行开头缩进 4 个（以上）字符的话，md 语法高亮立马失效。
