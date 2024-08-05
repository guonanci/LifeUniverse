```js
function getFine(speed, amount) {
  const formattedSpeed = new Intl.NumberFormat(
    'en-US',
    { style: 'unit', unit: 'mile-per-hour' }
  ).format(speed)

  const formattedAmount = new Intl.NumberFormat(
    'en-US',
    { style: 'currency', currency: 'USD' }
  ).format(amount)

  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`
}

console.log(getFine(130, 300))
A: The driver drove 130 and has to pay 300
B: The driver drove 130 mph and has to pay $300.00
C: The driver drove undefined and has to pay undefined
D: The driver drove 130.00 and has to pay 300.00
答案
答案: B
通过方法 Intl.NumberFormat，我们可以格式化任意区域的数字值。我们对数字值 130 进行 mile-per-hour 作为 unit 的 en-US 区域 格式化，结果为 130 mph。对数字值 300 进行 USD 作为 currentcy 的 en-US 区域格式化，结果为 $300.00.
```
