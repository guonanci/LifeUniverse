ts grammar:

数据类型: Number String structures boolean

- boolean
`let isDone: boolean = false;`

- number

像 js ,ts 采用浮点数;除了十进制,ts 也支持二进制,八进制,十六进制
```
//notice 0x 0b 0o prefix
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let hex: number = 0o744;
```

- string

`var color: string = 'blue';
color = 'red';

- string template

```
let fullName: string = `Bob Nanci`;
let age: number = 37;
let sentence: string= `Hello,my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`
```

- Array

```
let list: number[] = [1, 2, 3];
let list: Array<number> =[1, 2, 3];
```
- Tuple
声明一个包含多个数据类型的数组
```
//Declare a tupel type
let x: [string , number]
//Initiallize it
x = ['htllo', 10];
x = [19, ]

