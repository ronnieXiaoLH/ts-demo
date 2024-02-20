# TypeScript

## TypeScript 的优势

- 编译时静态类型检测
- 自动提示更清晰明确
- 引入了泛型和一系列的 TS 特有类型
- 强大的 d.ts 声明文件
- 轻松编译成 JS 文件
- 灵活性高

## TypeScript 核心语法

### 类型注解和类型推断

类型注解是一种明确地告诉 TypeScript 变量的类型的方式。可以在声明变量、函数参数、函数返回值等地方添加类型注解。

类型推断是 TypeScript 编译器根据代码上下文自动推断变量的类型。在大多数情况下，TypeScript 能够根据赋值语句、函数返回值等自动推断变量的类型。

### 常用的 24 种 TypeScript 类型

- 基本类型：number、string、boolean、symbol、null、undefined
- 根类型：Object、{}
- 对象类型：Array、object、Function
- 枚举：enum
- 其他特殊类型：any、unknown、never、void、元组(tuple)、可变元组
- 合成类型：联合类型、交叉类型
- 字面量数据类型

### any 和 unknown

`any` 类型表示任何类型的值，允许在编写代码时，绕过 TypeScript 的静态类型检查。

`unknown` 类型要求在使用前进行类型检查，已确保类型的正确性。

相同点：

- `any` 类型和 `unknown` 类型是任何类型的父类，所以任何类型的变量都可以赋值给 `any` 类型和 `unknown` 类型的变量。

不同点：

- 类型检查：`any` 类型不要求进行类型检查（`any` 类型的变量可以获取任何属性和方法），而 `unknown` 类型要求在使用前进行类型检查（`unknown` 类型的变量不可以直接获取任何属性和方法）。
- 类型推导：当使用 `any` 类型时，TypeScript 不会提供任何关于变量的类型信息；当使用 `unknown` 类型时，TypeScript 会记住变量的类型，但要求进行显示的类型检查。
- 类型安全：由于 `any` 类型的灵活性，可能会导致类型错误，而 `unknown` 类型的使用要更安全，因为在使用之前需要进行类型检查。

### interface 和 type

相同点：

- 都可以用于定义对象的属性和方法以及其对应的类型。

不同点：

- 可读性：`interface` 更常用于表示对象的结构，`type` 通常用于更通用的目的，可以表示联合类型 、交叉类型等。
- 合并声明：当声明同名的 `interface` 或 `type` 时，`interface` 会自动合并，`type` 不会。
- 类型范围：`type` 可以定义任何类型，`type` 可以使用交叉类型（`&`）和联合类型（`|`）进行更复杂的类型操作。
- 继承：`interface` 可以继承，`type` 无法继承

### null 和 undefined

- `null` 表示一个空值或者没有对象指定。
- `undefined` 表示一个未定义的值。
- `any`、`unknown`、`undefined` 类型的变量可以接收 undefined 的值。
- `any`、`unknown`、`null` 类型的变量可以接收 null 的值。

### 元组

元组（Tuple）是一种有序的数据结构，它允许表示一个固定长度和固定类型的数组。与普通的数组不同，元组中的每个位置可以有不同的数据类型。

- 元组的长度和每个位置的数据类型必须与定义时一致，不能多也不能少。
- 访问元组的元素时，不能超过其长度。
- 元组的各个元素可以具有不同的数据类型，但访问时需要根据定义的类型进行使用。

### 可变元组

可变元组是指具有不固定长度的元组。使用可变元组时，需要使用...语法，称为剩余元素（Rest Elements），来表示元组中的可变部分。

### 如何将 TS 数组和数组中的每个元素定义为只读

```ts
// 方式1：
const arr = [1, 2, 3] as const
// 方式2：
const arr2: readonly number[] = [1, 2, 3]
```

### 类型转换

类型转换是将一个类型的值显式转换为另一种类型的操作，有两种主要的类型转换方式：

- 类型断言
- 类型转换函数

### 类型守卫

类型守卫是一种在代码中使用条件语句来明确一个变量的类型的技术。以下是一些常见的类型守卫方式：

- typeof 类型守卫
- instanceof 类型守卫
- in 运算符类型守卫
- 自定义类型守卫

### 泛型

泛型数据：定义时不指定具体数据类型，调用时再确定类型。

泛型形参一般有两种表示：

1. A-Z 任何一个字母
2. 语义化的单词

### keyof 和 typeof 类型运算符

- `keyof` 类型运算符用于获取对象类型的所有键（属性名）的联合类型。
- `typeof` 类型运算符用于获取一个值的类型信息。

### 索引访问属性

索引访问类型（Index Access Types）是一种强大的特性，它允许你通过一个类型的索引来获取相应的属性类型。这在处理动态数据结构，如对象字面量或动态键的对象时非常有用。

### 条件类型

条件类型（Conditional Types）是一种高级的类型操作，它允许你在类型系统中进行基于条件的分支选择。条件类型通常使用在泛型类型中，根据某个条件选择不同的类型分支。

条件类型的一般形式如下：

```ts
T extends U ? X : Y
```

这里，T 是待检查的类型，U 是检查的条件类型，如果 T 是 U 的子类型（或者可以赋值给 U），则结果类型是 X，否则是 Y。

### infer

`infer` 关键字通常用于在泛型类型中引入类型推断。它允许你在泛型类型定义中引入一个新的类型变量，并在使用这个泛型类型时推断出具体的类型。

具体来说，`infer` 通常与 extends 关键字一起使用。

```ts
type ExtractReturnType<T> = T extends (...args: any[]) => infer R ? R : never

function exampleFunction(): string {
  return 'Hello, TypeScript!'
}

const result: ExtractReturnType<typeof exampleFunction> = 'Hello again!'
```

在上面的例子中，ExtractReturnType 是一个泛型类型，接受一个函数类型 T。通过使用 extends 和 infer，它检查 T 是否为一个函数类型，如果是的话，就推断出函数的返回类型，并将其赋给变量 R。在这个例子中，result 的类型被推断为 string，因为 exampleFunction 是一个返回字符串的函数。

```ts
type ExtractArrayElementType<T> = T extends Array<infer U> ? U : never

const arrayExample: ExtractArrayElementType<string[]> = 'Hello' // 类型被推断为 string
```

在上述示例中，ExtractArrayElementType 使用 infer 来捕获数组元素的类型，并根据输入类型 T 条件性地返回这个类型。

### Extract

`Extract` 是一个用于从联合类型中提取符合指定类型的子集的工具类型。它通过从给定的联合类型中选择那些可以赋值给指定类型的部分，创建一个新的类型。

基本语法如下：

```ts
type Extract<T, U> = T extends U ? T : never
```

这里的 T 是要从中提取类型的联合类型，而 U 是要提取的目标类型。Extract 会检查 T 中的每个成员，如果该成员是 U 的子类型，则将其包括在最终的结果中；否则，将其排除。

### Exclude

`Exclude` 是一个用于从联合类型中排除符合指定类型的子集的工具类型。它通过从给定的联合类型中排除那些可以赋值给指定类型的部分，创建一个新的类型。

基本语法如下：

```ts
type Exclude<T, U> = T extends U ? never : T
```

这里的 T 是要从中排除类型的联合类型，而 U 是要排除的目标类型。Exclude 会检查 T 中的每个成员，如果该成员是 U 的子类型，则将其排除在最终的结果中；否则，将其包括。

### Record

`Record` 是一个泛型类型，用于表示对象的类型，其中键和值的类型都是泛型参数。Record 类型有助于定义具有特定键和值类型的对象类型。

基本语法如下：

```ts
type MyRecord<K extends string | number | symbol, T> = Record<K, T>
```

这里，K 代表键的类型，可以是字符串、数字或符号，而 T 代表值的类型。使用 Record 时，你需要指定这两个泛型参数。

### Pick

`Pick` 是一个通用工具类型（Utility Type），用于从对象类型中选择指定的属性，然后创建一个新的类型。Pick 接受两个参数：第一个参数是源类型（原始类型），第二个参数是一个或多个属性名的字符串字面量联合类型，表示要选择的属性。

基本语法如下：

```ts
type PickedType = Pick<SourceObjectType, 'Prop1' | 'Prop2' | 'Prop3'>
```

这里，SourceObjectType 是源类型，即从中选择属性的类型。'Prop1' | 'Prop2' | 'Prop3'是一个字符串字面量联合类型，表示要选择的属性名。

### 映射类型

映射类型是一种强大的工具，它允许你创建新类型，该类型基于现有类型的属性集合进行转换。映射类型使用索引签名和 keyof 关键字来实现，让你能够以一种通用的方式处理现有类型的属性。

### Capitalize

`Capitalize` 是一个内置的类型工具（Type Utility），它用于将字符串的第一个字符转换为大写形式。这个类型接受一个字符串类型作为参数，并返回一个新的字符串类型，其中第一个字母被转换为大写。

### Required & Partial & Readonly

- `Required` 是一个泛型类型，接受一个类型参数 T，并返回一个新的类型，该新类型要求 T 中的所有属性都变为必需属性（非可选属性）。

- `Partial` 也是一个泛型类型，接受一个类型参数 T，并返回一个新的类型，该新类型将 T 中的所有属性都变为可选属性。

- `Readonly` 也是一个泛型类型，接受一个类型参数 T，并返回一个新的类型，该新类型将 T 中的所有属性变为只读属性，防止在实例化后修改这些属性的值。
