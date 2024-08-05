https://www.30secondsofcode.org/blog/s/javascript-encodeuri-encodeuricomponent

# encodeURIComponent

encodes everything in the given str, except `A-Z a-z 0-9 - \_ . ! ~ \* ' ( )` You should use this fn if the str you are
encoding is only part of a URL

```js
const partOfURL = 'my-page#with,speci@l&/"characters"?'
const fullURL = 'https://my-website.com/my-page?query="a%b"&user=1'
encodeURIComponent(partOfURL) // Good, escape special characters
// 'my-page%23with%2Cspeci%4l%26%2F%22characters%22%3F'
encodeURIComponent(fullURL) // Bad, encoded URL is not valid
// 'https%3A%2F%2Fmy-website.com%2Fmy-page%3Fquery%3D%22a%25b%22%26user%3D1'
```

# encodeURI

the function encodes everything in the given str, except `A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #`.
You should use this function if the string you are encoding is a full URL.

```js
const partOfURL = 'my-page#with,speci@l&/"characters"?'
const fullURL = 'https://my-website.com/my-page?query="a%b"&user=1'

encodeURI(partOfURL) // Bad, does not escape all special characters
// 'my-page#with,speci@l&/%22characters%22?'

encodeURI(fullURL) // Good, encoded URL is valid
// 'https://my-website.com/my-page?query=%22this%25thing%22&user=1'
```

# unicode

中文常用这个编码方式

https://www.sojson.com/encodeurl.html
