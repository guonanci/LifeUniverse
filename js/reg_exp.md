regExp.md

# js_reference_globalObjects_regExp

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
The RegExp obj is used for matching txt with a pattern.
For an intro to regular expressions, read the Regular Expressions chapter in JS Guide.

Description
Literal notation and constructor
The are two ways to create a RegExp object: a literal notation and a constructor.

- The literal notation's parameters are enclosed between slashes and do not use quotation marks.
- The constructor function's parameters are not enclosed between slashes but do use quotation marks.

The following three expressions create the same regular expression object:

```js
let re = /ab+c/i; // literal notation
let re = new RegExp("ab+c", "i"); // constructor with string pattern as first argument
let re = new RegExp(/ab+c/, "i"); // constructor with regular expression literal as first argument (**Starting with ECMAScript 6**)
```

The literal notation in compilation of the regular expression when the expression is evaluated. Use literal notation when the regular expression will remain constant. For example, if you use literal notation to construct a regular expression used in a loop, the regular expression wont be recompiled on each iteration.

The constructor of the regular expression obj -- for example, `new RegExp('ab+c')` -- results in runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and obtain it from another src, such as user input.

## Flags in constructor

Starting with ECMAScript 6, `new RegExp(/ab+c/, 'i')` no longer throws a TypeEr('cant supply flags when constructing one RegExp from another') when the first argument is a RegExp and the second `flags` argument is present. A new `RegExp` from the arguments is created instead.

When using the constructor function, the normal string escape rules(preceding 在。。。之前发生（出现） special characters with `\` when included in a str) are necessary.
[regular_expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

For example, the following are equivalent:

```js
let re = /|w+/;
let re = new RegExp("\\w+");
```

Perl-like RegExp properties (JavaScript-like??)
Note that several of the RegExp properties have both long and short(Perl-like) names. Both names always refer to the same value. (Perl is the programming lang from which JavaScript modeled its regular expressions) See also deprecated RegExp properties.

# Constructor

RegExp()
Creates a new RegExp obj.

# Static properties

get RegExp(@@species)
The constructor function that is used to create derived objects.

# Instance props

`RegExp.prototype.flags`
A str that contains the flags of the RegExp obj.
`RegExp.prototype.dotAll`
Whether to test the regular expression against all possible matches in a str, or only against the first.
`RegExp.prototype.global`
Whether to test the regexp against all possible matches in a str, or only against the first.
`RegExp.prototype.hasIndices`
Whether the regexp result exposes the start and end indicates of captured substrings.
`RegExp.prototype.dotAll`

`\s` 空白类字符
`\S` 非空白类字符

# groups_and_range

[groups_and_range](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)

捕获 123，捕获别名

```js
// Counting vowels
var aliceExcerpt =
  "There was a long silence after this, and Alice could only hear whispers now and then.";
var regexpVowels = /[aeiouy]/g;

console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);
// Number of vowels: 25

// Using groups
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames = /First_Name: (\w+), Last_Name: (\w+)/gm;
let match = regexpNames.exec(personList);
do {
  console.log(`Hello ${match[1]} ${match[2]}`);
} while ((match = regexpNames.exec(personList)) !== null);

// Using named groups
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames =
  /First_Name: (?<firstName>\w+), Last_Name: (?<lastName>\w+)/gm;
let match = regexpNames.exec(personList);
do {
  console.log(`Hello ${match.groups.firstName} ${match.groups.lastName}`);
} while ((match = regexpNames.exec(personList)) !== null);
```

## (?:x) Non-capturing group

Matches 'x' but does not remember the match。The matched substring cannot be called from the resulting arr's elements ([1],...,[n]) or from the predefined RegExp object's properties($1, ..., $9)

中括号（方括号）具体用法

```js
/[0-9a-zA-Z]{10}/.test("abc1234567");
```

任何代码修改，都要自己验证一下（正则表达式里的某些符号，比如&，可能重复出现）

[Global_Objects/RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

https://zhuanlan.zhihu.com/p/84007459
https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md

{m,n}表示数值范围。[]表示分类

# ?= ?!

在正则表达式中，?= 和 ?! 是两种特殊的零宽断言（zero-width assertions），它们不消耗字符，但会基于断言是否成功来影响匹配的结果。

?=（正向前瞻断言）
?= 称为正向前瞻断言（positive lookahead assertion）。它表示其后的模式必须匹配，但匹配的内容不会包含在最终结果中。

例如，考虑正则表达式 foo(?=bar)。这个表达式实际上不会匹配任何字符串，因为 (?=bar) 只是断言其后的内容必须是 bar，但它并不实际消耗或匹配 bar。所以，只有当 foo 后面紧跟着 bar 时，整个表达式才会返回成功，但匹配的文本仅仅是 foo。

但是，由于 ?= 的这种特性，它通常与其他模式结合使用，以进行更复杂的匹配。

例如，考虑要匹配所有在 bar 前面的 foo 的情况，但又不希望 bar 出现在匹配结果中。这可以使用正则表达式 foo(?=bar) 与其他代码逻辑结合来实现（尽管在这个特定情况下，你可能只需要使用 foo 并检查其后是否有 bar）。
2. ?!（负向前瞻断言）

?! 称为负向前瞻断言（negative lookahead assertion）。与 ?= 相反，它表示其后的模式不能匹配。

例如，正则表达式 foo(?!bar) 会匹配任何不是紧跟着 bar 的 foo。如果 foo 后面紧跟着 bar，那么整个表达式会返回失败，但如果 foo 后面是其他内容或没有内容，那么它会返回成功，并匹配 foo。

同样，?! 也经常与其他模式结合使用，以实现更复杂的匹配逻辑。

总之，?= 和 ?! 都是用于在正则表达式中添加条件，但它们不会实际匹配或消耗任何字符。
