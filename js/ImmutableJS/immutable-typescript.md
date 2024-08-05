Immutable collections for JavaScript
Immutable data cannot be changed once created,
leading to much simpler application development,
no defensive copying,
and enabling advanced memoization and change detection techniques with simple logic. Persistent data presents a mutative API which does not update the data in-place, but instead always yields new updated data.

Immutable.js provides many Persistent Immutable data structures including: List, Stack, Map, OrderMap, Set, OrderSet and Record.

These data structures are highly efficient on modern JavaScript VMs by using structural sharing via hash maps tries and vector tries as popularized by Clojure and Scala, minimizing the need to copy or cache data.

Immutable.js also provides a lazy Seq, allowing efficient chaining of collection methods like map and filter without creating intermediate representations. Create some Seq with Range and Repeat.


const { Map } = require('immutable')
const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50)
map1.get('b') + " vs. " + map2.get('b') // 2 vs. 50

<script src='immutable.min.js'></script>
<script>
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  var map2 = map1.set('b', 50);
  map1.get('b'); // 2
  map2.get('b'); // 50
</script>


const { Map } = require('immutable')
const map1 = Map({ a: 1, b: 2, c: 3 })
const mapCopy = map; // Look, "copies" are free!

# With TypeScript and Redux

store.getState()!.app!.user.size()

javascript object and array is designed to be mutable to save memory, however in complex scene will use more memory, and cause other problems.


Dont use Immutable.toJS, .fromJS. use `Map(obj), List(arr)` instead.
we can directly use Immutable.js API in React Class, function component.


nested Map data get method wont work


multi-layers-nesting Map will not work
