随着 Vue2 的停止维护，Vue3 逐渐会成为后面公司前端开发的主要技术栈。总所周知，Vue3 是结合了 TypeScript 的，还有像很火的 Nodejs 的框架 Nestjs 也是基于 TypeScript 的，因此 TypeScript 的学习应该提上日程了。本文是一篇关于 TypeScript 的学习指南。

## 一、TypeScript 是什么？

TypeScript 是一种由 Microsoft 开发的开源编程语言，它是 JavaScript 的一个超集。这意味着，所有的 JavaScript 代码都是合法的 TypeScript 代码，但 TypeScript 在此基础上提供了额外的功能和静态类型检查。

### 1.1 TypeScript 与 JavaScript 的区别

| **TypeScript**                                 | **JavaScript**                             |
| ---------------------------------------------- | ------------------------------------------ |
| JavaScript 的超集用于解决大型项目的代码复杂性  | 一种脚本语言，用于创建动态网页             |
| 可以在编译期间发现并纠正错误                   | 作为一种解释型语言，只能在运行时发现错误   |
| 强类型，支持静态和动态类型                     | 弱类型，没有静态类型选项                   |
| 最终被编译成 JavaScript 代码，使浏览器可以理解 | 可以直接在浏览器中使用                     |
| 支持模块、泛型和接口                           | 不支持模块，泛型或接口                     |
| 社区的支持仍在增长                             | 大量的社区支持以及大量文档和解决问题的支持 |

### 1.2 TypeScript 的使用

命令行的 TypeScript 编译器可以使用 npm 包管理器来安装。

1. **安装 TypeScript**

```shell
npm i -g typescript
```

2. **验证 TypeScript 是否安装成功**

```shell
tsc -v
# Version 5.3.3
```

3. **创建 TypeScript 文件**

创建一个新的 TypeScript 文件，通常以 `.ts` 为扩展名。在这个文件中，你可以编写 TypeScript 代码。

4. **编写 TypeScript 代码**

   创建一个 test.ts 文件，并编写如下代码：

   ```ts
   // 定义一个变量并指定类型
   let message: string = 'Hello, TypeScript!'

   // 定义一个函数并指定参数和返回类型
   function greet(name: string): string {
     return 'Hello, ' + name + '!'
   }
   ```

5. **编译 TypeScript 文件**

```shell
tsc test.ts
# test.ts => test.js
```

下面是 test.ts 文件的内容编译为 ES5 的结果：

```ts
'use strict'
// 定义一个变量并指定类型
var message = 'Hello, TypeScript!'
// 定义一个函数并指定参数和返回类型
function greet(name) {
  return 'Hello, ' + name + '!'
}
```

除了本地安装之外，也可以直接使用线上的 [TypeScript Playground](https://www.typescriptlang.org/play?#) 来学习新的语法或新特性。通过配置 **TS Config** 的 Target，可以设置不同的编译目标，从而编译生成不同的目标代码。

### 1.3 TypeScript 的主要特点和优势

1. **静态类型系统：** TypeScript 引入了静态类型，允许开发者在编写代码时定义变量的类型。这使得代码更加清晰、易读，并且在编译阶段就能够捕获潜在的类型错误，提高了代码的可维护性和稳定性。
2. **面向对象编程：** TypeScript 支持面向对象编程的概念，包括类、接口、继承、抽象类等。这使得开发者能够以更结构化和面向对象的方式组织和设计代码。
3. **ES6 和更高版本支持：** TypeScript 对 ECMAScript 标准提供了广泛的支持，包括 ECMAScript 6 及更高版本的新特性，如箭头函数、类、模块等。这使得开发者能够使用最新的 JavaScript 功能，同时兼顾静态类型检查。
4. **工具支持：**TypeScript 拥有强大的开发工具支持，包括智能代码补全、重构、静态分析等功能。开发者可以使用各种集成开发环境（IDE）如 Visual Studio Code 等，以提高开发效率。
5. **增强代码可读性：** 类型声明可以使代码更加清晰和易于理解。通过提供变量和函数参数的类型信息，开发者可以更容易地理解代码的预期行为。

## 二、TypeScript 常用的 24 种类型

TypeScript 常用的 24 种类型可以划分为以下几类：

- 基本类型：number、string、boolean、symbol、null、undefined
- 对象类型：Array、object、Function
- 枚举：enum
- 根类型：Object、{}
- 合成类型：联合类型、交叉类型
- 字面量数据类型
- 其他特殊类型：any、unknown、never、void、元组(tuple)、可变元组

### 2.1 String 类型

```ts
let name: string = 'Mark'
// ES5: var name = 'Mark'
```

### 2.2 Number 类型

```ts
let age: number = 18
// ES5: var age = 18
```

### 2.3 Boolean 类型

```ts
let flag: boolean = true
// ES5: var flag = true
```

### 2.4 Symbol 类型

```ts
const symbol1: symbol = Symbol('mySymbol')
// 作为对象的属性键
const obj = {
  [symbol1]: 'value for symbol1'
}
console.log(obj[symbol1]) // value for symbol1
```

### 2.5 Null 和 Undefined 类型

- 变量只有声明为包含 undefined 的联合类型才可未初始化值而使用

- `any`、`unknown`、`undefined` 类型的变量可以接收 undefined 的值

- `any`、`unknown`、`null` 类型的变量可以接收 null 的值

  ```ts
  let s: string | undefined

  let a: any = undefined
  let b: unknown = undefined
  let c: undefined = undefined

  let a2: any = null
  let b2: unknown = null
  let c2: null = null
  ```

### 2.6 Array 类型

在 TypeScript 中，数组（Array）是一种数据类型，用于存储一系列相同类型的元素。

```ts
// 使用类型注解声明一个数字数组
let numbers: number[] = [1, 2, 3, 4, 5]

// 使用Array泛型声明一个字符串数组
let fruits: Array<string> = ['apple', 'banana', 'orange']
```

### 2.7 枚举类型

TypeScript 中的 Enum（枚举）类型允许开发者定义一组命名的常数。它提供了一种更具可读性和维护性的方式来表示一组相关的数值或字符串。

```ts
// 定义一个简单的枚举类型
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// 使用枚举类型
let myDirection: Direction = Direction.Up
console.log(myDirection) // 输出: 0

// 改变枚举值
myDirection = Direction.Right
console.log(myDirection) // 输出: 3
```

在上面例子中，Direction 是一个枚举类型，它包含了 Up、Down、Left 和 Right 四个成员。默认情况下，枚举成员的值从 0 开始自动递增。你也可以手动赋值给枚举成员：

```ts
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4
}
```

此时，Up 的值为 1，Down 的值为 2，以此类推。

```ts
// 字符串枚举
enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE'
}

// 混合类型枚举
enum Status {
  Success = 200,
  NotFound = 404,
  Error = 'ERROR'
}
```

使用枚举可以提高代码的可读性，减少硬编码的使用，并且可以通过枚举成员的名字来获取相应的值。

```ts
// 枚举的应用
enum LightStatus {
  RED = 0,
  GREEN,
  YELLOW
}

function getLightStatus(status: LightStatus) {
  if (status === LightStatus.RED) {
    return '红灯'
  } else if (status === LightStatus.GREEN) {
    return '绿灯'
  } else if (status === LightStatus.YELLOW) {
    return '黄灯'
  }
}

console.log('灯的状态：', getLightStatus(LightStatus.GREEN))
```

### 2.8 Any 类型

在 TypeScript 中，`any`类型是一种特殊的类型，它允许我们在编写代码时绕过类型检查系统，将变量标记为“任意”类型。使用`any`类型的变量可以接受任何类型的值，类似于 JavaScript 中的变量。

```ts
let variable1: any = 10
let variable2: any = 'Hello, TypeScript!'
let variable3: any = [1, 'two', true]

console.log(variable1) // 输出: 10
console.log(variable2) // 输出: Hello, TypeScript!
console.log(variable3) // 输出: [1, "two", true]

variable1 = 'TypeScript is great!' // 合法，因为variable1的类型是any，可以接受任何值
console.log(variable1) // 输出: TypeScript is great!
```

尽管`any`类型具有灵活性，但它会丧失类型的优势。在大多数情况下，推荐尽量避免使用`any`类型，而是利用 TypeScript 的强类型系统，以确保更安全、可维护的代码。如果可能的话，可以使用更具体的类型，或者使用联合类型、交叉类型等 TypeScript 提供的高级类型来表达更准确的类型信息。

### 2.9 Unknown 类型

`unknown` 是 TypeScript 中的一种类型，它表示某个值的类型是未知的。与 `any` 类型不同，`unknown` 类型更加类型安全。当你使用 `unknown` 类型时，TypeScript 会要求你在使用这个值之前进行类型检查或类型断言，关于类型检查和类型断言在后面的内容中会介绍。

1. 任何值都可以赋值给 `unknown` 类型：

```ts
let myUnknown: unknown = 10
myUnknown = 'Hello'
myUnknown = [1, 2, 3]
```

2. `unknown` 类型只能被赋值给 `any` 类型和 `unknown` 类型本身：

```ts
let value: unknown

let value1: unknown = value // OK
let value2: any = value // OK
let value3: boolean = value // Error
let value4: number = value // Error
let value5: string = value // Error
```

### 2.10 Tuple 类型

在 TypeScript 中，元组（Tuple）是一种有序的、固定长度的数组类型，它允许你将不同类型的值按照预定义的顺序存储在一个数组中。元组的每个位置都有一个对应的类型，这使得它们在某些情况下比普通数组更有用。

```ts
// 元组的长度和每个位置的数据类型必须与定义时一致，不能多也不能少
let myTuple: [number, string, boolean]
myTuple = [1, 'Hello', true]

console.log(myTuple[0]) // 输出: 1
console.log(myTuple[1]) // 输出: Hello
console.log(myTuple[2]) // 输出: true
```

可变元组类型（Variadic Tuple Types）是 TypeScript 4.0 及以上版本引入的一项新功能，它允许你定义一个元组类型，其中的元素数量不是固定的。在可变元组类型中，你可以使用`...`语法来表示一个或多个元素的变长部分。这使得元组类型更加灵活。

```ts
type VariableTuple = [string, number, boolean, ...string[]]
let myTuple2: VariableTuple = ['张三', 18, true, '深圳']
```

元组标签用于为元组的每个元素提供有意义的标识，以提高代码的可读性和可维护性。

```ts
// 元组标签
type VariableTuple = [
  name: string,
  age: number,
  isFemale: boolean,
  ...rest: string[]
]
```

### 2.11 Void 类型

在 TypeScript 中，`void`是一种数据类型，表示函数没有返回值。当函数不返回任何值时，它的返回类型通常被标注为`void`。

```ts
function sayHello(): void {
  console.log('Hello, TypeScript!')
}

// 调用函数
sayHello()
```

### 2.12 字面量数据类型

在 TypeScript 中，字面量数据类型是一种具体的值，而不仅仅是一个类型。通过使用字面量数据类型，你可以指定一个变量只能取特定的字面量值，而不是整个类型范围。

```ts
// 字符串字面量类型
let status: 'success' | 'error' | 'pending'
status = 'success' // 合法
status = 'failure' // 错误，只能是 "success"、"error" 或 "pending"

// 数字字面量类型
let statusCode: 200 | 404 | 500
statusCode = 200 // 合法
statusCode = 403 // 错误，只能是 200、404 或 500
```

### 2.13 Object、{}

Object 被称为根类型，它是所有其他类型的父类型，声明为根类型的变量可以赋值任意其他类型。`{}` 是 Object 的简写。

```ts
let variable: {}

variable = 1
variable = 'variable'
variable = true
```

### 2.14 Never 类型

在 TypeScript 中，`never` 类型表示那些永远不会发生的值的类型。通常，`never` 类型用于表示函数永远不会返回的情况或在类型系统中表示不可达的状态。

以下是一些使用 `never` 类型的常见情况：

1. **永远抛出异常：**

```ts
function throwError(message: string): never {
  throw new Error(message)
}
```

在这个例子中，`throwError` 函数永远不会正常返回，因为它总是抛出一个异常。

2. **无限循环：**

```ts
function infiniteLoop(): never {
  while (true) {
    // do something
  }
}
```

`infiniteLoop` 函数也永远不会正常返回，因为它包含一个无限循环。

3. **类型保护：**

```ts
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`)
}

function processValue(value: string | number) {
  if (typeof value === 'string') {
    // 处理字符串
  } else if (typeof value === 'number') {
    // 处理数字
  } else {
    // 此处的 value 类型为 never
    assertNever(value)
  }
}
```

上述例子中，`assertNever` 函数用于处理在 `processValue` 函数中不可能出现的分支。

**上面有些类型没有介绍到，因为这些类型的内容较多，所以单独介绍**

## 三、类型注解和类型推断

类型推断是 TypeScript 编译器根据代码上下文自动推断变量的类型。在大多数情况下，TypeScript 能够根据赋值语句、函数返回值等自动推断变量的类型。

```ts
// 变量声明时添加类型注解
let myNumber: number = 10

// 函数参数和返回值添加类型注解
function add(x: number, y: number): number {
  return x + y
}

// TypeScript 会推断变量的类型为 number
let myNumber2 = 10

// TypeScript 会推断 add 函数的参数和返回值的类型
function add2(x: number, y: number) {
  return x + y
}
```

## 四、TypeScript 断言

### 4.1 类型断言

在 TypeScript 中，类型断言是一种开发者告诉编译器某个值的确是某种类型的方式。它类似于其他编程语言中的类型转换，但在 TypeScript 中，类型断言有两种形式：尖括号语法和 as 语法。

1. **尖括号语法**

```ts
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
```

2. **as 语法**

```ts
let someValue2: any = 'this is a string'
let strLength2: number = (someValue2 as string).length
```

### 4.2 非空断言

在 TypeScript 中，非空断言是一种用于告诉编译器某个值是非空的机制。在某些情况下，编译器可能无法确定变量是否为 null 或 undefined，但是开发者可能清楚知道它是非空的。这时候，可以使用非空断言来告诉编译器相信这个值是非空的。

非空断言使用`!`符号，放置在变量名或表达式的末尾。例如：

```ts
let myValue: string | null = possiblyNullFunction()

// 使用非空断言
let nonNullValue: string = myValue!

console.log(nonNullValue.length) // 不再出现编译器的非空检查错误
```

### 4.3 确定赋值断言

在 TypeScript 中，确定赋值断言是一种通知编译器某个变量已经被正确地初始化的机制。有时，编译器可能无法确定变量是否在某个点上被赋值，但是开发者可能明确知道这个变量已经被正确地初始化。确定赋值断言告诉编译器相信这个变量已经被赋值。

确定赋值断言使用`!`符号，放置在变量名或表达式的末尾。例如：

```ts
let x!: number
initialize()
console.log(2 * x) // Ok

function initialize() {
  x = 10
}
```

通过 `let x!: number;` 确定赋值断言，TypeScript 编译器就会知道该属性会被明确地赋值。

## 五、类型守卫

在 TypeScript 中，类型守卫是一种用于缩小变量类型范围的机制，使得编译器能够更准确地推断变量的类型。通过类型守卫，你可以在特定的代码块中告诉 TypeScript 编译器有关变量类型的更多信息，从而提高类型推断的精度。

下面是一些常用的类型守卫方式：

### 5.1 typeof 类型守卫

使用`typeof`操作符来检查变量的类型。例如：

```ts
{
  function logLength(value: string | number) {
    if (typeof value === 'string') {
      console.log(value.length) // 在这里 TypeScript 知道 value 是字符串类型
    } else {
      console.log(value) // 在这里 TypeScript 知道 value 是数字类型
    }
  }
  logLength('abc')
  logLength(666)
}
```

### 5.2 instanceof 类型守卫

使用`instanceof`操作符来检查变量是否是某个类的实例。例如：

```ts
class Animal {
  move() {
    console.log('Moving...')
  }
}

class Bird extends Animal {
  fly() {
    console.log('Flying...')
  }
}

function moveAnimal(animal: Animal) {
  if (animal instanceof Bird) {
    animal.fly() // 在这里 TypeScript 知道 animal 是 Bird 类型
  } else {
    animal.move() // 在这里 TypeScript 知道 animal 是 Animal 类型
  }
}

const bird = new Bird()
moveAnimal(bird)

const animal = new Animal()
moveAnimal(animal)
```

### 5.3 in 运算符类型守卫

使用 `in` 运算符来检查对象是否具有某个属性。通过检查对象的属性是否存在，可以缩小对象的类型范围。例如：

```ts
class Bird {
  fly() {
    console.log('Flying...')
  }
}

class Fish {
  swim() {
    console.log('Swiming...')
  }
}

function move(animal: Bird | Fish) {
  if ('fly' in animal) {
    animal.fly()
  } else {
    animal.swim()
  }
}

const bird = new Bird()
move(bird)
```

### 5.4 自定义类型守卫

通过创建自定义函数，并在函数内部添加类型判断逻辑，来定义自己的类型守卫。例如：

```ts
// 如果返回的是 true，则参数就是 is 后面的数据类型
function isString(value: any): value is string {
  return typeof value === 'string'
}

function processValue(value: any) {
  if (isString(value)) {
    console.log(value.toUpperCase()) // 在这里 TypeScript 知道 value 是字符串类型
  } else {
    console.log(value) // 在这里 TypeScript 知道 value 不是字符串类型
  }
}

processValue('Hello TypeScript')
```

## 六、联合类型

在 TypeScript 中，联合类型（Union Types）允许一个变量具有多个可能的类型。通过使用联合类型，你可以声明一个变量可以是多个类型之一，而不限制它只能是其中的一个。

**基本语法：**

在 TypeScript 中，使用`|`符号来定义联合类型。例如：

```ts
let variable: number | string
```

上面的声明表示`variable`可以是`number`类型或者`string`类型。

**常见使用场景：**

1. 处理不同类型的输入

```ts
function displayData(data: number | string): void {
  console.log(data)
}

displayData(42) // 合法
displayData('Hello') // 合法
```

`displayData`函数接受一个参数，可以是`number`或者`string`类型。

2. 对象的联合类型

```ts
interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}

type Shape = Circle | Square

function getArea(shape: Shape): number {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2
  } else {
    return shape.sideLength ** 2
  }
}

const myCircle: Circle = { kind: 'circle', radius: 5 }
const mySquare: Square = { kind: 'square', sideLength: 4 }

console.log(getArea(myCircle)) // 计算圆的面积
console.log(getArea(mySquare)) // 计算正方形的面积
```

3. 可为 `null` 或 `undefined` 类型

```ts
let result: number | null

result = 42 // 合法
result = null // 合法
result = undefined // 合法
```

**类型别名：**

可以给联合类型定义一个类型别名，例如：

```ts
// 给 string | string[] 这个联合类型取个类型别名 Message
type Message = string | string[]

let greet = (message: Message) => {
  // ...
}
```

## 七、交叉类型

在 TypeScript 中，交叉类型（Intersection Types）是一种将多个类型组合成一个新类型的方式。通过使用交叉类型，你可以将多个类型的特性合并到一个类型中，从而创建一个具有多个类型特性的新类型。

使用交叉类型的语法是通过使用 `&` 符号。例如：

```ts
type Person = {
  name: string
  age: number
}

type Employee = {
  employeeId: string
  position: string
}

type PersonWithJob = Person & Employee
```

在上面的例子中，`PersonWithJob` 是一个交叉类型，它包含了 `Person` 和 `Employee` 两个类型的所有属性。这意味着 `PersonWithJob` 类型的实例将具有 `name`、`age`、`employeeId` 和 `position` 四个属性。

### 7.1 同名基础类型属性合并

假设在合并多个类型的过程中，刚好出现某些类型存在相同的成员，但对应的类型又不一致，例如：

```ts
interface X {
  a: string
  b: string
  c: boolean
}

interface Y {
  a: string
  b: number
  d: string
}

type XY = X & Y
type YX = Y & X
```

为什么接口 X 和接口 Y 混入后，成员 b 的类型会变成 `never` 呢？这是因为混入后成员 b 的类型为 `string & number`，即成员 b 的类型既可以是 `string` 类型又可以是 `number` 类型。很明显这种类型是不存在的，所以混入后成员 b 的类型为 `never`。

### 7.3 同名非基础类型属性的合并

在上面示例中，刚好接口 X 和接口 Y 中内部成员 c 的类型都是基本数据类型，那么如果是非基本数据类型的话，又会是什么情形。例如：

```ts
interface C {
  name: string
}

interface D {
  age: number
}

interface A {
  p: C
}

interface B {
  p: D
}

type AB = A & B

let ab: AB = {
  p: {
    name: 'Mark',
    age: 18
  }
}
```

以上代码是没有任何错误的，因此可知，在混入多个类型时，若存在相同的成员，且成员类型为非基本数据类型，那么是可以成功合并。

## 八、函数

### 8.1 TypeScript 函数与 JavaScript 函数的区别

| TypeScript     | JavaScript         |
| -------------- | ------------------ |
| 含有类型       | 无类型             |
| 函数类型       | 无函数类型         |
| 必填和可选参数 | 所有参数都是可选的 |
| 默认参数       | 默认参数           |
| 剩余参数       | 剩余参数           |
| 箭头函数       | 箭头函数（ES2015） |
| 函数重载       | 无函数重载         |

### 8.2 函数声明和定义

TypeScript 中函数可以通过函数声明或函数表达式来定义。函数声明的语法如下：

```ts
function add(x: number, y: number): number {
  return x + y
}
```

函数表达式的语法如下：

```ts
let add = function (x: number, y: number): number {
  return x + y
}
```

上面例子中，定义了 add 函数有两个参数 x 和 y，两个参数的类型都是 number，函数返回值的类型也是 number。

```ts
function greet(name: string): void {
  console.log(`Hello, ${name}!`)
}
greet('John') // 输出：Hello, John!
```

`greet`函数的返回类型是`void`，表示它不返回任何值。

### 8.3 参数默认值

在 TypeScript 中，函数参数的默认值允许你为函数的参数指定默认值，这样在调用函数时，如果没有传递相应参数，就会使用默认值。例如：

```ts
function greet(name: string = 'Guest'): void {
  console.log(`Hello, ${name}!`)
}
greet() // 输出：Hello, Guest!
greet('John') // 输出：Hello, John!
```

在上面的例子中，`greet`函数接受一个`name`参数，如果调用时没有传递`name`参数，它将使用默认值"Guest"。在第一个调用中，没有传递任何参数，因此使用了默认值，而在第二个调用中，传递了参数"John"，覆盖了默认值。

**在使用函数参数默认值时，需要注意的一些事项：**

1. **默认值参数位置：** 如果一个函数的某个参数有默认值，那么该参数及其后面的所有参数都必须有默认值。

```ts
// 正确的使用方式
function example(a: number, b: number = 2, c: number = 3): void {
  // 函数体
}

// 错误的使用方式，因为b有默认值而c没有
// function incorrectExample(a: number, b: number = 2, c: number): void {
//     // 函数体
// }
```

### 8.4 可选参数

在 TypeScript 中，可选参数允许你定义一个函数，在调用时某些参数可以被省略，而不会引发错误。可选参数使用问号 `?` 来标记。例如：

```ts
function greet(name: string, age?: number): void {
  console.log(`Hello, ${name}!`)
  if (age !== undefined) {
    console.log(`You are ${age} years old.`)
  }
}

greet('John') // 输出：Hello, John!
greet('Jane', 25) // 输出：Hello, Jane! You are 25 years old.
```

在上面的例子中，`age` 参数被标记为可选，这意味着在调用 `greet` 函数时，可以不传递 `age` 参数。在第一个调用中，只传递了 `name` 参数，而在第二个调用中，传递了 `name` 和 `age` 两个参数。

**在使用可选参数时，需要注意一些事项：**

1. **可选参数位置：** 可选参数必须位于参数列表的最后。也就是说，如果一个参数是可选的，那么它后面的所有参数也必须是可选的。

```ts
// 正确的使用方式
function example(a: number, b: number, c?: number, d?: number): void {
  // 函数体
}

// 错误的使用方式
function example(a: number, b: number, c?: number, d: number): void {
  // 函数体
}
```

2. **undefined 检查：** 在函数体内，如果使用了可选参数，最好在使用之前检查参数是否为 `undefined`，以防止意外的错误。

```ts
function greet(name: string, age?: number): void {
  console.log(`Hello, ${name}!`)
  if (age !== undefined) {
    console.log(`You are ${age} years old.`)
  }
}
```

### 8.5 剩余参数

在 TypeScript 中，剩余参数（Rest Parameters）允许你表示一个函数可以接受多个参数，并将它们收集到一个数组中。剩余参数使用三个点 `...` 后跟一个数组名来表示。这个数组包含了传递给函数的所有剩余参数。例如：

```ts
function displayInfo(
  firstName: string,
  lastName: string,
  ...otherInfo: string[]
): void {
  console.log(`Name: ${firstName} ${lastName}`)
  if (otherInfo.length > 0) {
    console.log(`Additional Info: ${otherInfo.join(', ')}`)
  }
}

displayInfo('John', 'Doe', 'Age: 25', 'Occupation: Developer')
// 输出：
// Name: John Doe
// Additional Info: Age: 25, Occupation: Developer
```

在上面的例子中，`...otherInfo` 是剩余参数，它接收传递给函数的所有额外参数，并将它们存储在名为 `otherInfo` 的数组中。在调用 `displayInfo` 函数时，可以传递任意数量的额外参数，并且这些参数会被收集到 `otherInfo` 数组中。

**在使用剩余参数时，需要注意一些事项：**

1. **剩余参数位置：** 剩余参数必须是参数列表中的最后一个参数。

```ts
// 正确的使用方式
function example(a: number, ...rest: number[]): void {
  // 函数体
}

// 错误的使用方式，因为剩余参数不在最后
// function incorrectExample(...rest: number[], a: number): void {
//     // 函数体
// }
```

2. **剩余参数类型：** 剩余参数是一个数组，你可以为其指定类型。

```ts
function example(a: number, ...rest: string[]): void {
  // 函数体
}
```

3. **剩余参数与解构：** 剩余参数与数组解构结合使用时，可以更方便地获取函数传递的参数。

```ts
function displayInfo({
  firstName,
  lastName,
  ...otherInfo
}: {
  firstName: string
  lastName: string
  otherInfo: string[]
}): void {
  console.log(`Name: ${firstName} ${lastName}`)
  if (otherInfo.length > 0) {
    console.log(`Additional Info: ${otherInfo.join(', ')}`)
  }
}

displayInfo({
  firstName: 'John',
  lastName: 'Doe',
  otherInfo: ['Age: 25', 'Occupation: Developer']
})
```

### 8.6 函数重载

函数重载是 TypeScript 中的一个强大特性，它允许你为同一个函数提供多个类型签名，以便在不同的情况下可以以不同的方式调用该函数。

**函数签名：** 函数名称 + 函数参数 + 函数参数类型 + 返回值类型

**函数重载的定义：** 包含一下规则的一组函数就是函数重载

1. 由一个实现签名 + 一个或多个重载签名合成
2. 调用重载函数时，会根据传递来的参数来判断你调用的是哪一个函数
3. 只有一个函数体，只有实现签名配备了函数体
4. 实现签名参数个数可以少于重载签名的参数个数，但是实现签名某个参数包含重载签名的参数，那么该参数类型就必须兼容所有重载签名对应参数的类型【联合类型|any|unknown】

例如：

```ts
function multiply(x: number, y: number): number
function multiply(x: string, y: number): string
// 实现签名
function multiply(x: any, y: any): any {
  if (typeof x === 'number' && typeof y === 'number') {
    return x * y
  } else if (typeof x === 'string' && typeof y === 'number') {
    return Array(y + 1).join(x)
  }
}

console.log(multiply(5, 3)) // 输出：15
console.log(multiply('abc', 3)) // 输出：abcabcabc
```

## 九、接口

在 TypeScript 中，接口（interface）是一种用于定义代码结构的抽象类型。它提供了一种定义对象的契约，指定了对象应该包含哪些属性、方法和事件。

### 9.1 基本语法

在 TypeScript 中，接口可以通过`interface`关键字来定义。例如：

```ts
interface Person {
  name: string
  age: number
  sayHello: () => void
}
```

上述代码定义了一个名为`Person`的接口，该接口包含了`name`（字符串类型）、`age`（数字类型）和`sayHello`（函数类型）三个成员。

### 9.2 可选属性

使用`?`符号可以将属性定义为可选。示例：

```ts
interface Configuration {
  width: number
  height?: number // 可选属性
}
```

### 9.3 只读属性

使用`readonly`关键字可以定义只读属性，该属性在创建后不能被修改。示例：

```ts
interface Point {
  readonly x: number
  readonly y: number
}
```

### 9.4 索引签名

在 TypeScript 中，接口（interface）的索引签名允许你描述对象的索引器，即通过索引访问对象的方式。索引签名定义了对象可以使用的索引类型和相应的值类型。这对于描述像数组或类似对象的动态属性非常有用。

**基本语法：**

索引签名使用方括号表示，类似于数组或对象的索引访问语法。语法如下：

```ts
interface SomeInterface {
  [index: string]: valueType
}
```

这里的`index`可以是字符串或数字类型，而`valueType`定义了索引对应的值的类型。

**字符串索引：**

```ts
interface StringIndexed {
  [key: string]: string
}

const myObject: StringIndexed = {
  name: 'John',
  age: '30',
  city: 'New York'
}
```

上述例子中，`StringIndexed`接口定义了一个字符串索引签名，允许对象的键是字符串，而对应的值是字符串。

**数字签名索引：**

```ts
interface NumberIndexed {
  [key: number]: string
}

const myArray: NumberIndexed = {
  0: 'zero',
  1: 'one',
  2: 'two'
}
```

上述例子中，`NumberIndexed`接口定义了一个数字索引签名，允许对象的键是数字，而对应的值是字符串。

**可索引类型的混合使用：**

你也可以在一个接口中同时定义字符串和数字索引签名：

```ts
interface MixedIndexed {
  [key: string]: string
  [index: number]: string
}
```

**注意：当同时定义字符串和数字索引签名时，数字索引的返回值类型必须是字符串索引返回值类型的子类型，否则会报错。**

**只读索引签名：**

你还可以将索引签名定义为只读，防止在对象创建后修改索引签名对应的属性：

```ts
interface ReadonlyIndexed {
  readonly [key: string]: number
}

const readOnlyObject: ReadonlyIndexed = {
  age: 25,
  height: 180
}

// 下面的语句会导致编译错误
// readOnlyObject.age = 26;
```

### 9.5 类型函数

接口可以定义函数类型，描述函数的参数和返回值。例如：

```ts
interface Add {
  (x: number, y: number): number
}
```

### 9.6 继承接口

接口之间可以进行继承，通过`extends`关键字。例如：

```ts
interface Shape {
  color: string
}

interface Circle extends Shape {
  radius: number
}
```

### 9.7 实现接口

类（class）可以实现接口，通过`implements`关键字。例如：

```ts
interface Point {
  x: number
  y: number
}

class SomePoint implements Point {
  x = 1
  y = 2
}
```

## 十、类

在 TypeScript 中，类是一种重要的编程结构，用于创建对象和定义对象的行为。

### 10.1 类的属性和方法

在 TypeScript 中，类的定义使用 `class` 关键字，如下所示：

```ts
class Greeter {
  // 静态属性
  static cname: string = 'Greeter'
  // 成员属性
  greeting: string

  // 构造函数 - 执行初始化操作
  constructor(message: string) {
    this.greeting = message
  }

  // 静态方法
  static getClassName() {
    return 'Class name is Greeter'
  }

  // 成员方法
  greet() {
    return 'Hello, ' + this.greeting
  }
}

let greeter = new Greeter('world')
```

成员属性与静态属性，成员方法与静态方法有什么区别呢？这里无需过多解释，我们直接看一下编译生成的 ES5 代码：

```js
'use strict'
var Greeter = /** @class */ (function () {
  // 构造函数 - 执行初始化操作
  function Greeter(message) {
    this.greeting = message
  }
  // 静态方法
  Greeter.getClassName = function () {
    return 'Class name is Greeter'
  }
  // 成员方法
  Greeter.prototype.greet = function () {
    return 'Hello, ' + this.greeting
  }
  // 静态属性
  Greeter.cname = 'Greeter'
  return Greeter
})()
var greeter = new Greeter('world')
```

### 10.2 ECMAScript 私有字段

在 TypeScript 3.8 版本就开始支持**ECMAScript 私有字段**，使用方式如下：

```ts
class Person {
  #name: string

  constructor(name: string) {
    this.#name = name
  }

  greet() {
    console.log(`Hello, my name is ${this.#name}!`)
  }
}

let semlinker = new Person('Semlinker')

semlinker.#name
//     ~~~~~
// Property '#name' is not accessible outside class 'Person'
// because it has a private identifier.
```

与常规属性（甚至使用 `private` 修饰符声明的属性）不同，私有字段要牢记以下规则：

- 私有字段以 `#` 字符开头，有时我们称之为私有名称
- 每个私有字段名称都唯一地限定于其包含的类
- 不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）
- 私有字段不能在包含的类之外访问，甚至不能被检测到

### 10.3 访问修饰符

在 TypeScript 中，可以使用访问修饰符来限制对类的成员的访问。常见的有 `public`（默认）、`private` 和 `protected`：

- 类成员的默认可见性为 `public`，`public` 成员可以在任何地方访问
- `protected` 成员仅对声明它们的类的子类可见
- `private` 类似于 `protected`，但不允许从子类访问成员

### 10.4 存取器（getter/setter）

TypeScript 支持使用 `get` 和 `set` 创建存取器，用于控制对类成员的读取和赋值：

```ts
class Person {
  name: string
  _age: number = 0

  constructor(name: string) {
    this.name = name
  }

  public get age() {
    return this._age
  }

  public set age(val: string | number) {
    if (typeof val === 'string') {
      val = Number(val)
    }
    this._age = val
  }
}

const p = new Person('张三')
p.age = 18
console.log(p.age)
p.age = '20'
console.log(p.age)
```

**类的 getter 和 setter：**

- 如果在 get/set 操作期间添加其他逻辑，则最好公开该字段
- 如果 get 存在但没有 set，则属性自动为 readonly
- 如果不指定 setter 参数的类型，则从 getter 的返回类型推断
- getter 和 setter 必须有相同的 成员可见性

### 10.5 类的继承

在 TypeScript 中，类的继承是一种机制，允许一个类（称为子类或派生类）继承另一个类（称为父类或基类）的属性和方法。

```ts
class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  makeSound(): void {
    console.log('Some generic sound')
  }
}

class Dog extends Animal {
  breed: string

  constructor(name: string, breed: string) {
    super(name) // 调用父类构造函数
    this.breed = breed
  }

  // 重写父类的 makeSound 方法
  makeSound(): void {
    console.log('Meow')
    super.makeSound() // 调用父类的方法
  }
}
```

**子类重写父类的方法必须满足：**

- 和父类方法同名
- 参数和父类相同，如果是引用类型的参数，需要依据具体类型来定义
- 父类方法的访问范围【访问修饰符】必须小于等于子类重写方法的访问范围【访问修饰符】(PS: private 不能被子类重写)

### 10.6 抽象类

使用 `abstract` 关键字声明的类，我们称之为抽象类。抽象类不能被实例化，因为它里面包含一个或多个抽象方法。所谓的抽象方法，是指不包含具体实现的方法：

```ts
abstract class Person {
  constructor(public name: string) {}

  abstract say(words: string): void
}

// Cannot create an instance of an abstract class.(2511)
const lolo = new Person() // Error
```

抽象类不能被直接实例化，我们只能实例化实现了所有抽象方法的子类。具体如下所示：

```ts
abstract class Person {
  constructor(public name: string) {}

  // 抽象方法
  abstract say(words: string): void
}

class Developer extends Person {
  constructor(name: string) {
    super(name)
  }

  say(words: string): void {
    console.log(`${this.name} says ${words}`)
  }
}

const lolo = new Developer('lolo')
lolo.say('I love ts!') // lolo says I love ts!
```

## 十一、泛型

在 TypeScript 中，泛型（Generics）是一种在编写可重用、灵活且类型安全的代码时非常有用的特性。泛型允许你在编写函数、类或接口时使用参数，这些参数可以在实际使用时被指定为不同的类型。

**泛型形参一般有两种表示：**

1. A-Z 任何一个字母
2. 语义化的单词

### 11.1 泛型函数

```ts
function identity<T>(arg: T): T {
  return arg
}

// 使用泛型函数
let result = identity<string>('Hello, TypeScript!')
```

在这个例子中，`identity` 函数使用了一个类型参数 `T`，它表示任意类型。在调用函数时，你可以指定 `T` 的具体类型，或者让编译器根据传入的参数类型进行推断。

### 11.2 泛型接口

```ts
interface Ref<T> {
  value: T
}

const data: Ref<string> = {
  value: 'Hello, TypeScript!'
}

// 可以推断出 data.value 的数据类型为 string
console.log(data.value.toUpperCase())
```

### 11.3 泛型类

```ts
class ArrayList<T> {
  public index: number = 0
  public elements: Array<T> = []

  add(ele: T) {
    this.elements[this.index++] = ele
  }
}

const arr = new ArrayList<string>()
arr.add('a')
// 可以推断出 arr.elements[0] 的数据类型为 string
console.log(arr.elements[0].toUpperCase())
```

### 11.4 泛型约束

你可以对泛型进行约束，以确保泛型符合某些条件。例如：

```ts
interface Lengthwise {
  length: number
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length)
}

// 只有具有 length 属性的对象才能传递给 logLength 函数
logLength('Hello') // 正常
logLength(42) // 错误，number 没有 length 属性
```

在这个例子中，`logLength` 函数的泛型类型 `T` 被约束为必须拥有 `length` 属性，这样就确保了传递给函数的参数是合法的。

### 11.5 泛型默认值

可以为泛型参数提供默认值：

```ts
function withDefault<T = string>(arg: T): T {
  return arg
}

// 如果不传递类型参数，默认为 string 类型
let result = withDefault('Hello')
```

### 11.6 infer

`infer` 关键字通常用于在泛型类型中引入类型推断。它允许你在泛型类型定义中引入一个新的类型变量，并在使用这个泛型类型时推断出具体的类型。

具体来说，`infer` 通常与 extends 关键字一起使用。

```ts
// infer 捕获函数返回类型
type ExtractReturnType<T> = T extends (...args: any[]) => infer R ? R : never

function exampleFunction(): string {
  return 'Hello, TypeScript!'
}

const result: ExtractReturnType<typeof exampleFunction> = 'Hello again!'
```

在上面的例子中，ExtractReturnType 是一个泛型类型，接受一个函数类型 T。通过使用 extends 和 infer，它检查 T 是否为一个函数类型，如果是的话，就推断出函数的返回类型，并将其赋给变量 R。在这个例子中，result 的类型被推断为 string，因为 exampleFunction 是一个返回字符串的函数。

```ts
// infer 捕获条件类型中的类型
type ExtractArrayElementType<T> = T extends Array<infer U> ? U : never

const arrayExample: ExtractArrayElementType<string[]> = 'Hello' // 类型被推断为 string
```

在上述示例中，ExtractArrayElementType 使用 infer 来捕获数组元素的类型，并根据输入类型 T 条件性地返回这个类型。

### 11.7 内置的泛型工具

TypeScript 提供了一些内置的泛型工具（Generic Utilities），这些工具帮助开发者处理和操纵泛型类型。以下是一些常见的 TypeScript 内置泛型工具：

1. **Partial<T>**

`Partial<T>` 接受一个类型 `T`，并将其所有属性变为可选。

2. **Readonly<T>**

`Readonly<T>` 接受一个类型 `T`，并将其所有属性变为只读。

3. **Required<T>**

`Required<T>` 接受一个类型 `T`，并将其所有属性变为必需属性（非可选属性）。

4. **Pick<T,K>**

`Pick<T, K>` 接受一个类型 `T` 和一个键集合 `K`，然后从 `T` 中选择那些键属于 `K` 的类型。

```ts
interface User {
  id: number
  name: string
  age: number
}

type UserSummary = Pick<User, 'id' | 'name'>
// UserSummary 类型为 { id: number, name: string }
```

5. **Omit<T,K>**

`Omit<T, K>` 接受一个类型 `T` 和一个键集合 `K`，然后从 `T` 中排除那些键属于 `K` 的类型。

```ts
interface User {
  id: number
  name: string
  age: number
}

type UserWithoutAge = Omit<User, 'age'>
// UserWithoutAge 类型为 { id: number, name: string }
```

6. **Record<K,T>**

`Record<K, T>` 创建一个具有键类型为 `K`，值类型为 `T` 的对象类型。

```ts
type Fruit = 'apple' | 'banana' | 'orange'
type FruitPrices = Record<Fruit, number>
// FruitPrices 类型为 { apple: number, banana: number, orange: number }
```

7. **Exclude<T,U>**

`Exclude<T, U>` 从类型 `T` 中排除所有属于 `U` 类型的部分。

```ts
type Numbers = 1 | 2 | 3 | 4 | 5
type EvenNumbers = Exclude<Numbers, 1 | 3 | 5> // EvenNumbers 类型为 2 | 4
```

8. **Extract<T,U>**

`Extract<T, U>` 则从类型 `T` 中提取所有属于 `U` 类型的部分。

```ts
type Numbers = 1 | 2 | 3 | 4 | 5
type OddNumbers = Extract<Numbers, 1 | 3 | 5> // OddNumbers 类型为 1 | 3 | 5
```

9. **Capitalize<T>**

`Capitalize<T>` 用于将字符串类型 `T` 的首字母大写。

## 十二、类型操作

TypeScript 中的类型操作（Type Operations）是指可以用来操作和转换类型的一系列操作。

### 12.1 keyof 类型运算符

`keyof` 类型运算符用于获取对象类型的所有键（属性名）的联合类型。例如：

```ts
type MyObj = {
  name: string
  age: number
  gender: 'male' | 'female'
}

// 使用 keyof 获取 MyObj 类型的所有键的联合类型
type MyKeys = keyof MyObj // "name" | "age" | "gender"

function getProperty(obj: MyObj, key: MyKeys) {
  return obj[key]
}

const myObject: MyObj = {
  name: 'John',
  age: 25,
  gender: 'male'
}

console.log(getProperty(myObject, 'name'))
console.log(getProperty(myObject, 'age'))
console.log(getProperty(myObject, 'gender'))
```

### 12.2 typeof 类型运算符

`typeof` 类型运算符用于获取一个值的类型信息。例如：

```ts
let x = 10

// 使用 typeof 获取变量 x 的类型
let y: typeof x // 这里 y 的类型为 number

y = 0
// y = 'a' // 报错，y 为 number 类型

const obj = {
  name: 'John',
  age: 25
}

// 使用 typeof 获取 obj 对象的类型
type ObjectType = typeof obj // 这里 ObjectType 的类型为 { name: string, age: number }

const newObj: ObjectType = {
  name: 'Mark',
  age: 18
}
```

### 12.3 索引访问属性

索引访问类型（Index Access Types）是一种强大的特性，它允许你通过一个类型的索引来获取相应的属性类型。这在处理动态数据结构，如对象字面量或动态键的对象时非常有用。

```ts
interface Person {
  name: string
  age: number
  address: {
    city: string
    zipCode: string
  }
}

type AgeType = Person['age'] // 类型是 number
type ZipCodeType = Person['address']['zipCode'] // 类型是 string

// 使用联合、keyof或其他类型
type I1 = Person['age' | 'name'] // 类型是 string | number

type I2 = Person[keyof Person] // 类型是 string | number | { city: string; zipCode: string; }

type nameOrAge = 'name' | 'age'
type I3 = Person[nameOrAge] // 类型是 string | number
```

```ts
const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 }
]

type Person = (typeof MyArray)[number] // 类型为 {name: string; age: number}

type Age = (typeof MyArray)[number]['age'] // 类型为 number
```

### 12.4 条件类型

条件类型（Conditional Types）是一种高级的类型操作，它允许你在类型系统中进行基于条件的分支选择。条件类型通常使用在泛型类型中，根据某个条件选择不同的类型分支。

条件类型的一般形式如下：

```ts
T extends U ? X : Y
```

这里，T 是待检查的类型，U 是检查的条件类型，如果 T 是 U 的子类型（或者可以赋值给 U），则结果类型是 X，否则是 Y。

例如：

```ts
interface Animal {
  live(): void
}

interface Dog extends Animal {
  woof(): void
}

type I1 = Dog extends Animal ? number : string // 类型是 number

type I2 = RegExp extends Animal ? number : string // 类型是 string
```

### 12.5 映射类型

映射类型是一种强大的工具，它允许你创建新类型，该类型基于现有类型的属性集合进行转换。映射类型使用索引签名和 keyof 关键字来实现，让你能够以一种通用的方式处理现有类型的属性。

例如：

```ts
// 使用映射类型将现有类型的所有属性变为只读
type ReadonlyType<T> = {
  readonly [P in keyof T]: T[P]
}

interface Person {
  name: string
  age: number
}

type ReadonlyPerson = ReadonlyType<Person>
```

```ts
// 排除对象类型某些属性
type Omit<T, K extends keyof T> = {
  // [P in keyof T as Exclude<P, K>]: T[P]
  [P in Exclude<keyof T, K>]: T[P]
}

interface Person {
  name: string
  age: number
  address: string
}

const p: Omit<Person, 'address'> = {
  name: '张三',
  age: 18
}
```

## 十三、装饰器

装饰器是一种特殊类型的声明，它可以被附加到类声明、方法、属性或参数上，以修改它们的行为。

在 TypeScript 中，装饰器以 `@` 符号开头，可以应用在类声明、方法、属性或参数前。装饰器可以是一个函数，该函数在运行时被调用。

**注意：** 若要启用实验性的装饰器特性，你必须在命令行或 `tsconfig.json` 里启用 `experimentalDecorators` 编译器选项。

**命令行：**

```shell
tsc --target ES5 --experimentalDecorator
```

**tsconfig.json：**

```json
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
```

### 13.1 装饰器的分类

- 类装饰器
- 方法装饰器
- 属性装饰器
- 参数装饰器

### 13.2 装饰器工厂

装饰器工厂是生成装饰器的函数，它返回实际用于装饰的装饰器。装饰器工厂主要作用是可以给装饰器传参。例如：

```ts
function logClass(params: string) {
  console.log('装饰器工厂参数：', params)
  return function (targetClass: any) {
    console.log(`当前时间：${new Date()}`)
  }
}

@logClass('Hello')
class Person {
  constructor(public name: string) {}
}
```

### 13.3 类装饰器

用于在类声明之前应用，可以用于修改类的行为或元数据。

```ts
function logClass(targetClass: any) {
  console.log(`当前时间：${new Date()}`)

  const p1 = new targetClass('Jack')
  p1.sayHi()
}

@logClass
class Person {
  constructor(public name: string) {}

  sayHi() {
    console.log(`Hello ${this.name}`)
  }
}
```

**注意：**类装饰器函数里面的内容会立即执行，而不是等类实例化的时候才执行的。

**类装饰器的执行顺序：从右到左，从下到上，从里到外**

```ts
function logDate<T extends { new (...args: any): any }>(targetClass: T) {
  console.log('logDate')
  return class extends targetClass {
    constructor(...args: any[]) {
      super(...args)
      console.log(`创建日期 ${new Date().toLocaleDateString()}`)
    }
  }
}

function logTime<T extends { new (...args: any): any }>(targetClass: T) {
  console.log('logTime')
  return class extends targetClass {
    constructor(...args: any[]) {
      super(...args)
      console.log(`创建时间 ${new Date().toLocaleTimeString()}`)
    }
  }
}

@logDate
@logTime
class Person {
  constructor(public name: string) {}
}

const p = new Person('Mark')
// 依次输出
// logTime
// logDate
// 创建时间 17:14:51
// 创建日期 2024/2/26
```

### 13.4 方法装饰器

用于在方法声明之前应用，可以用于修改方法的行为或元数据。例如：

```ts
// 方法装饰器，打印方法的调用日志
function logMethod(
  targetClassPrototype: object,
  key: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value

  descriptor.value = function (...args: any[]) {
    console.log(`Method ${key} called with arguments: ${args}`)
    return originalMethod.apply(this, args)
  }

  return descriptor
}

class Person {
  constructor(public name: string) {}

  @logMethod
  sayHi(message: string) {
    console.log(`Hello ${message}`)
  }
}

const p = new Person('Mark')
p.sayHi('TypeScript')
// 依次输出
// Method sayHi called with arguments: TypeScript
// Hello TypeScript
```

**方法拦截器的执行顺序：**

1. 前置拦截器由左到右，由上到下
2. 原方法执行
3. 后置拦截器由右到左，由下到上

```ts
function logMethod(
  targetClassPrototype: object,
  key: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value

  descriptor.value = function (...args: any[]) {
    console.log(`logMethod ${key} 前置拦截`)
    const res = originalMethod.apply(this, args)
    console.log(`logMethod ${key} 后置拦截`)
    return res
  }

  return descriptor
}

function logMethod2(
  targetClassPrototype: object,
  key: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value

  descriptor.value = function (...args: any[]) {
    console.log(`logMethod2 ${key} 前置拦截`)
    const res = originalMethod.apply(this, args)
    console.log(`logMethod2 ${key} 后置拦截`)
    return res
  }

  return descriptor
}

class Person {
  constructor(public name: string) {}

  @logMethod2
  @logMethod
  sayHi() {
    console.log(`Hello ${this.name}`)
  }
}

const p = new Person('Mark')
p.sayHi()
// 依次输出
// logMethod2 sayHi 前置拦截
// logMethod sayHi 前置拦截
// Hello Mark
// logMethod sayHi 后置拦截
// logMethod2 sayHi 后置拦截
```

### 13.5 属性装饰器

用于在属性声明之前应用，可以用于修改属性的行为或元数据。例如：

```ts
function logProperty(target: any, key: string) {
  delete target[key]

  const backingField = '_' + key

  Object.defineProperty(target, backingField, {
    writable: true,
    enumerable: true,
    configurable: true
  })

  // property getter
  const getter = function (this: any) {
    const currVal = this[backingField]
    console.log(`Get: ${key} => ${currVal}`)
    return currVal
  }

  // property setter
  const setter = function (this: any, newVal: any) {
    console.log(`Set: ${key} => ${newVal}`)
    this[backingField] = newVal
  }

  // Create new property with getter and setter
  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  })
}

class Person {
  @logProperty
  public name: string

  constructor(name: string) {
    this.name = name
  }
}

const p1 = new Person('Mark')
p1.name = 'Jack'
// 依次输出
// Set: name => Mark
// name => Jack
```

### 13.6 参数装饰器

用于在方法参数声明之前应用，可以用于修改参数的行为或元数据。例如：

```ts
function logParameter(
  targetClassPrototype: object,
  propertyKey: string,
  parameterIndex: number
) {
  console.log(`The parameter in position ${parameterIndex} at ${propertyKey} has
    been decorated`)
}

class Greeter {
  greeting: string

  constructor(greeting: string) {
    this.greeting = greeting
  }

  sayHi(@logParameter param: string) {}
}
// The parameter in position 0 at sayHi has been decorated
```

### 13.7 装饰器的执行顺序

**各种类型装饰器的执行顺序：**

1. 属性装饰器
2. 参数装饰器
3. 方法装饰器
4. 类装饰器

```ts
function classDecorator(targetClass: any) {
  console.log('类装饰器')
}

function methodDecorator(
  targetClassPrototype: object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log('方法装饰器')
}

function propertyDecorator(target: object, key: string) {
  console.log('属性装饰器')
}

function paramsDecorator(
  target: object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  console.log('参数装饰器')
}

@classDecorator
class Person {
  @propertyDecorator
  public name: string

  constructor(name: string) {
    this.name = name
  }

  @methodDecorator
  sayHi(@paramsDecorator message: string) {
    console.log(`Hi ${message}`)
  }
}
// 依次输出
// 属性装饰器
// 参数装饰器
// 方法装饰器
// 类装饰器
```

### 13.8 元数据

在 TypeScript 中，装饰器可以用于附加元数据到类、方法、属性或参数上。元数据是关于程序实体的信息，而装饰器可以用于在运行时动态地添加、修改或检索这些元数据。

使用元数据需要先通过 npm 安装 `reflect-metadata` 这个库，还需要在命令行或 `tsconfig.json` 中设置 `emitDecoratorMetadata` 编译器选项。

**命令行：**

```she
tsc --target ES5 --experimentalDecorators --emitDecoratorMetadata
```

**tsconfig.json：**

```json
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

例如：在属性装饰器中定义元数据，然后再在方法装饰器中获取在属性装饰器中定义的数据

```ts
const metadataKey = Symbol()

function methodDecorator(
  targetClassPrototype: object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  // 获取在属性装饰器中定义的元数据
  console.log(
    '方法装饰器',
    Reflect.getMetadata(metadataKey, targetClassPrototype, 'name')
  )
}

function propertyDecorator(value: string) {
  console.log('属性装饰器')
  return Reflect.metadata(metadataKey, value)
}
class Person {
  @propertyDecorator('元数据的值')
  name: string

  constructor(name: string) {
    this.name = name
  }

  @methodDecorator
  sayHi(message: string) {
    console.log(`Hi ${message}`)
  }
}
// 依次输出
// 属性装饰器
// 方法装饰器 元数据的值
```

**三种内置的常用元数据键：**

- `design:type` 用于存储构造函数参数类型的元数据。
- `design:paramtypes` 用于存储方法返回值类型的元数据。
- `design:returntype` 用于存储属性类型的元数据。

```ts
function methodDecorator(
  targetClassPrototype: object,
  methodName: string,
  descriptor: PropertyDescriptor
) {}

class Person {
  @Reflect.metadata(Symbol('a'), 1)
  name: string = 'Mark'

  @methodDecorator
  fn(param1: string, param2: number): string {
    return 'Hello'
  }
}

const p = new Person()

const propertyType = Reflect.getMetadata('design:type', p, 'name')
console.log('propertyType: ', propertyType)

const paramTypes = Reflect.getMetadata('design:paramtypes', p, 'fn')
console.log('paramTypes: ', paramTypes)

const returnType = Reflect.getMetadata('design:returntype', p, 'fn')
console.log('returnType: ', returnType)
// 依次输出
// propertyType:  [Function: String]
// paramTypes:  [ [Function: String], [Function: Number] ]
// returnType:  [Function: String]
```

### 十四、声明文件

### 14.1 声明文件是什么？

TypeScript 的声明文件（Declaration Files）是一种用于描述 JavaScript 代码结构和类型信息的文件，通常以 `.d.ts` 为扩展名。这些文件包含了对变量、函数、类、模块等的类型定义，以便在 TypeScript 中进行静态类型检查和提供更好的开发工具支持。

### 14.2 为什么要有声明文件？

1. **类型信息：** TypeScript 的一个主要特性是静态类型检查，通过声明文件，开发者可以为现有的 JavaScript 库或模块提供类型信息。这使得 TypeScript 在编译时能够检查类型错误，提高代码的健壮性和可维护性。
2. **编辑器支持：** 声明文件可以为集成开发环境（IDE）提供更好的支持。例如，编辑器可以根据声明文件提供智能代码补全、代码导航和类型检查等功能，帮助开发者更高效地编写代码。
3. **第三方库的类型定义：** 在 JavaScript 生态系统中，有许多优秀的第三方库和框架。声明文件允许开发者为这些库提供类型定义，从而在使用这些库时能够享受到 TypeScript 提供的静态类型检查和其他优势。
4. **接口文档：** 声明文件本身也可以作为一种接口文档，方便开发者理解和使用代码。通过声明文件，开发者可以了解某个模块或库的 API 结构、函数签名等信息，提高代码的可读性和可维护性。

### 14.3 声明文件的实现

```ts
// 声明全局变量
declare var a: number
declare let s: string
// 声明只读的全局变量
declare const __DEV__: boolean = true

// 声明函数
declare function add(a: number, b: number): number

// 声明枚举
declare enum Status {
  Normal,
  Disabled
}

// 声明类
declare class Person {
  name: string
  constructor(name: string)
  sayHi(): void
}

// 声明类型
interface IPerson {
  name: string
  age: number
}

type NumOrStr = number | string

// 声明命名空间
declare namespace myObject {
  let name: string
  function sayHi(): string
  class Person {
    name: string
    constructor(name: string)
    sayHi(): void
  }

  // 嵌套对象
  namespace subObject {
    function sayHi(): void
  }
}

// 声明模块
declare module 'foo' {
  const name: string
  function sayHello(name: string): string
  export default function sayHi(): string
}
```

## 十五、编译上下文

### 15.1 tsconfig.json 的作用

- 标识 TypeScript 项目的根路径
- 配置 TypeScript 编译器
- 指定编译的文件

### 15.2 tsconfig.json 重要字段

- files - 设置要编译的文件的名称
- include - 设置需要进行编译的文件，支持路径模式匹配
- exclude - 设置无需进行编译的文件，支持路径模式匹配
- compilerOptions - 设置与编译流程相关的选项

### 15.3 compilerOptions 选项

compilerOptions 每个选项的详细说明如下：

```json
{
  "compilerOptions": {
    /* 基本选项 */
    "target": "es5", // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs", // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [], // 指定要包含在编译中的库文件
    "allowJs": true, // 允许编译 javascript 文件
    "checkJs": true, // 报告 javascript 文件中的错误
    "jsx": "preserve", // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true, // 生成相应的 '.d.ts' 文件
    "sourceMap": true, // 生成相应的 '.map' 文件
    "outFile": "./", // 将输出文件合并为一个文件
    "outDir": "./", // 指定输出目录
    "rootDir": "./", // 用来控制输出目录结构 --outDir.
    "removeComments": true, // 删除编译后的所有的注释
    "noEmit": true, // 不生成输出文件
    "importHelpers": true, // 从 tslib 导入辅助工具函数
    "isolatedModules": true, // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true, // 启用所有严格类型检查选项
    "noImplicitAny": true, // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true, // 启用严格的 null 检查
    "noImplicitThis": true, // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true, // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true, // 有未使用的变量时，抛出错误
    "noUnusedParameters": true, // 有未使用的参数时，抛出错误
    "noImplicitReturns": true, // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true, // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node", // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./", // 用于解析非相对模块名称的基目录
    "paths": {}, // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [], // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [], // 包含类型声明的文件列表
    "types": [], // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./", // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./", // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true, // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true, // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true, // 启用装饰器
    "emitDecoratorMetadata": true // 为装饰器提供元数据的支持
  }
}
```

参考资源：

- [一份不可多得的 TS 学习指南](https://juejin.cn/post/6844904184894980104)
- [TS 声明文件](https://drylint.com/TypeScript/TS%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6d.ts.html)
