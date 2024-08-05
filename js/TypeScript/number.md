# number && Number

An arithmetic operand must be of type *'any', 'number', 'bigint' or an enum* type.ts(2356)
(property) curI: Number

# toFixed (ret str)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Number.prototype.toFixed()

The toFixed() method formats a number using fixed-point notation.

Syntax
toFixed()
toFixed(digits)

Parameters
digits Optional
The number of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0.

Return value
A string representing the given number using fixed-point notation.

Exceptions
RangeError
If digits is too small or too large. Values between 0 and 100, inclusive, will not cause a RangeError. Implementations are allowed to support larger and smaller values as chosen.

TypeError
If this method is invoked on an object that is not a Number.

# thousandBitSeparator

https://blog.csdn.net/anan_start/article/details/73550823

# NaN

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
