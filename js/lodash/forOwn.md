forOwn.md

https://lodash.com/docs/4.17.15#forOwn

_.forOwn(object, [iteratee=_.identity])
source npm package

Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration early by explicitly returning false.

Since
0.3.0

Arguments
object (Object): The object to iterate over.
[iteratee=_.identity] (Function): The function invoked per iteration.
Returns
(Object): Returns object.

Example
function Foo() {
this.a = 1;
this.b = 2;
}

Foo.prototype.c = 3;

_.forOwn(new Foo, function(value, key) {
console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
Try in REPL
_.forOwnRight(object, [iteratee=_.identity])
source npm package

This method is like \_.forOwn except that it iterates over properties of object in the opposite order.

Since
2.0.0

Arguments
object (Object): The object to iterate over.
[iteratee=_.identity] (Function): The function invoked per iteration.
