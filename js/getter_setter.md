```js
const config = {
	languages: [],
	set language(lang) {
		return this.languages.push(lang);
	}
};

console.log(config.language);
A: function language(lang) { this.languages.push(lang }
B: 0
C: []
D: undefined
答案
答案: D
方法 language 是一个 setter。Setters 并不保存一个实际值，它们的使命在于 修改 属性。当调用方法 setter， 返回 undefined。
```
