# union types

https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions

Type Guards and Differentiating Types
Union types are useful for modeling situations when values can overlap in the types they can take on. What happens when we need to know specifically whether we have a Fish? A common idiom in JavaScript to differentiate between two possible values is to check for the presence of a member. As we mentioned, you can only access members that are guaranteed to be in all the constituents of a union type.

let pet = getSmallPet();

// You can use the 'in' operator to check
if ("swim" in pet) {
pet.swim();
}
// However, you cannot use property access
if (pet.fly) {
Property 'fly' does not exist on type 'Fish | Bird'.
Property 'fly' does not exist on type 'Fish'.
pet.fly();
Property 'fly' does not exist on type 'Fish | Bird'.
Property 'fly' does not exist on type 'Fish'.
}
Try
To get the same code working via property accessors, we’ll need to use a type assertion:

let pet = getSmallPet();
let fishPet = pet as Fish;
let birdPet = pet as Bird;

if (fishPet.swim) {
fishPet.swim();
} else if (birdPet.fly) {
birdPet.fly();
}
Try
This isn’t the sort of code you would want in your codebase however.

Troubleshooting Handbook: Operators
typeof and instanceof: type query used for refinement
keyof: get keys of an object
O[K]: property lookup
[K in O]: mapped types

- or - or readonly or ?: addition and subtraction and readonly and optional modifiers
  x ? Y : Z: Conditional types for generic types, type aliases, function parameter types
  !: Nonnull assertion for nullable types
  =: Generic type parameter default for generic types
  as: type assertion
  is: type guard for function return types

10 Bad TypeScript Habits:
not using "strict": true
using || for default values when we have ??
Using any instead of unknown for API responses
using as assertion instead of Type Guards (function isFoo(obj: unknown): obj is Foo {})
as any in tests
Marking optional properties instead of modeling which combinations exist by extending interfaces
One letter generics
Non-boolean if (nonboolean) checks
bangbang checks if (!!nonboolean)
!= null to check for null and undefined
https://startup-cto.net/10-bad-typescript-habits-to-break-this-year/
forego 放弃 i

6. Optional properties
   What it looks like
   Marking properties as optional that are sometimes there and sometimes not.

interface Product {
id: string
type: 'digital' | 'physical'
weightInKg?: number
sizeInMb?: number
}
What it should look like
Explicitly model which combinations exist and which don't.

interface Product {
id: string
type: 'digital' | 'physical'
}

interface DigitalProduct extends Product {
type: 'digital'
sizeInMb: number
}

interface PhysicalProduct extends Product {
type: 'physical'
weightInKg: number
}
Why we do it
Marking properties as optional instead of splitting out types is easier and produces less code. It also requires a deeper understanding of the product being built and might limit usage of code if assumptions about the product change.

Why we shouldn't
The big benefit of type systems is that they can replace runtime checks with compile-time checks. With more explicit typing, it is possible to get compile-time checks for bugs that otherwise might have gotten unnoticed, e. g. by making sure that every DigitalProduct has a sizeInMb.

ritual 仪式；succinct 简洁的
