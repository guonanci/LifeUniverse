\_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `_.property` iteratee shorthand.
\_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }

- iteratee abstract: In functional programming, an iteratee is a composable abstraction for incrementally processing sequentially-presented chunks of input data. On each step, an iteratee is presented with one of three possible types of values: the next chunk of data, a v to indicate no data is available, or a val to indicate the iteration process has finished
