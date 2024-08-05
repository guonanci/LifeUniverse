https://lodash.com/docs/4.17.15#isEmpty

Checks if value is an empty object, collection, map, or set.

Objects are considered empty if they have no own enumerable string keyed properties.

Array-like values such as arguments objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a length of 0. Similarly, maps and sets are considered empty if they have a size of 0.

Since
0.1.0

Arguments
value (\*): The value to check.
Returns
(boolean): Returns true if value is empty, else false.

Example
\_.isEmpty(null);
// => true

\_.isEmpty(true);
// => true

\_.isEmpty(1);
// => true

\_.isEmpty([1, 2, 3]);
// => false

\_.isEmpty({ 'a': 1 });
// => false
