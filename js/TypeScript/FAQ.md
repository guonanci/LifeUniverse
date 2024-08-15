https://github.com/microsoft/TypeScript/wiki/FAQ?

# Common 'Bugs' That Aren't Bugs

> I've found a long-overlooked bug in TypeScript
> Here are some behaviors that may look like bugs, but aren't

- These two empty classes can be used in place of each other(why do these empty classes behave strangely)

  > I wrote some code like this and expected an error:

  ```tsx
  class Empty {
    /* empty */
  }

  var e2: Empty = window;
  ```

  See the question 'Why are all types assignable to empty interfaces' in this FAQ. It's worth re-iterating the advice from that answer: in general, you should never declare a class with no properties. This is true even for subclasses:

```tsx
class Base {
  important: number;
  properties: number;
}
class Alpha extends Base {}
class Bravo extends Base {}
```

Alpha and Bravo are structurally identical to each other, and to Base. This has a lot of surprising effects, so don't do it! If you want Alpha and Bravo to be different, add a private property to each.

- when and why are classes nominal
  What explains the difference between these two lines of code?

```tsx
class Alpha {
  x: number;
}
class Bravo {
  x: number;
}
class Charlie {
  private x: number;
}
class Delta {
  private x: number;
}

let a = new Alpha(),
  b = new Bravo(),
  c = new Charlie(),
  d = new Delta();

a = b; // OK
c = d; // Error
```

In TypeScript, classes are compared structurally. The one exception to this is private and protected members. When a member is private or protected, it must originate 引起 in the same declaration to be considered the same as another private or protected member.

- I can use a non-void-returning function where one returning void is expected
  I wrote some code like this and expected an error:
  ```tsx
  function doSth(): number {
    return 1;
  }
  function callMeMaybe(cb: () => void) {
    cb();
  }
  // Expected an er because 'doSth' returns number, but 'callMeMaybe' expects void-returning function
  callMeMaybe(doSth);
  ```
  > This is the expected and desired behavior. First, refer to the 'substitutability' primer -- the fact that `doSth`
  > returns 'more' information than `callMeMaybe` is a valid substitution. Second, let's consider another case:

```tsx
let items = [1];
callMeMaybe(() => items.push(2));
```

this is isomorphic 同构的 to the example that 'wanted' an error. `Array#push` returns a number(the new length of the arr),
but its a safe substitute to use for a void -returning function.

Another way to think of this is that a void -returning callback type says **'Im not going to look at your return value, if one exists'**

- I'm allowed to use a shorter parameter list where a longer one is expected
- private class members are actually visible at runtime
- this conditional type returns never when it should return the true branch
- this mapped type returns a primitive type, not an object type.
  - mapped types declared as `{ [ K in keyof T ]: U}` where T is a type parameter homomorphic 同形的
- A method and a function property of the same type behave differently
  - Methods are always bivariant in their argument,...
- why are all types assignable to empty interfaces
  > I wrote some code like this and expected an error:
  ```tsx
  interface Thing {
    /* nothing here */
  }
  function doSth(a: Thing) {
    // mysterious implementation here
  }
  // Expected some or all of there to be errors
  doSth(window);
  doSth(42);
  doSth("huh?");
  ```
  - Types with no members can be substituted 替换 by any type. In this example, `window, 42, 'huh'` all have the required
  - members of a `Thing`(there are none)
  - In general, you should never find yourself declaring an `interface` with no properties.

# Common Feature Requests

> I want to request one of the following features...
> Here's a list of common feature requests and their corresponding issue. Please leave comments in these rather than
> logging new issues.

- Safe navigation operator, AKA CoffeeScript's null conditional/propagating/propagation operator, AKA C#'s' ?. operator
- Minification 微小缩小
- extension methods
- partial classes
- sth to do with this
- strong typing of function members call/bind/apply
- runtime function overloading
-

# Type System Behavior

- what is structural typing

  - immaterial 非物质的，无形的；interchangeable 可交换的；identical 完全相同的；heritage 继承物；TS uses structural typing. This
  - system is different than the type system employed by some other popular languages you may have used(e.g. Java,C#,etc)
  - This idea behind structural typing is that two types are compatible if their members are compatible. For example, in
  - C# or Java,two classes named MyPoint and YourPoint, both with public int properties x nad y, are not interchangeable,
  - even though they are identical. But in a structural type system, the fact that these types have different names is
  - immaterial. because they have the same members with the sime types, they are identical.

  - This applies to subtype relationships as well. In C++, for example, you could only use a Dog in place of Animal if Animal
  - was explicitly in Dog's class heritage. In TypeScript, this is not the case - a Dog with at least

- what is type erasure
  - extensively using reflection or other metadata systems
- why are getters without setters not considered read-only
  - error in TS2.0 and later tracking this issue
- why are function parameters bivariant 双变
  - permissive 许可的自由的 contravariant 逆变的；In summary, in the TypeScript type system, the question of whether a
  - more-specific-type-accepting function should be assignable to a function accepting a less-specific type provides
  - a prerequisite 先决条件 answer to whether an arr of that more specific typ should be be assignable to an arr of a less
  - specific typ. Having the latter 后者 not be the case would not be an acceptable typ system in the vast majority of
  - cases, so we have to take a correctness trade-off for the specific case of function argument types
- why are functions with fewer parameters assignable to functions that take more parameters
  - burdensome 繁重的 hypothetical 假设的；
- why are functions returning non-void assignable to function returning void
- why are all types assignable to empty interfaces
- can I make a typ alias nominal 名义上的有名无实的
  - branded 有品牌的 primitives workaround intersection types；
- How do I prevent two types from being structurally compatible
- How do I check at run-time if an object implements some interface

# Functions

- why cant I use x in the destructuring function f({x:number}) { /_ ... _/ }

# Classes

- why do these empty classes behave strangely
- when and why are classes nominal
- why does this get orphaned in my instance methods (orphan 孤儿 使成为孤儿)
- what's the diff between Bar and typeof Bar when Bar is a Class
- why do my derived class property initializers overwrite values set in the base class constructor

# https://ts-error-translator.vercel.app/

# Type System Behavior
structural typing C++, type erasure(var x: SomeInterface, output: var x)

TypeScript removes type annotations, interfaces, type aliases, and other type system constructs during compilation. This means at run-time, there is no information that says that some variable `x` was declared as being of type `SomeInterface`. The lack of run-time type information can be surprising for programmers who are used to extensively using reflection or other metadata systems. Many questions in this FAQ boil down to 'because types are erased'.

https://juejin.cn/post/6999985372440559624

# a/index.tsx,a/indexl.tsx

Cannot find module '../AlarmModeConf' or its corresponding type declarations.ts(2307)
