// interface 会合并声明
interface Person {
  name: string
}

interface Person {
  age: number
}

let person: Person = {
  name: '张三',
  age: 18
}

// type 类型同名声明会报错
type Person2 = {
  name: string
}

// type Person2 = {
//   age: number
// }

// type 可以直接进行交叉类型和联合类型的复杂类型操作
type A = {
  name: string
}

type B = {
  age: number
}

type C = A & B

let c: C = {
  name: '张三',
  age: 18
}

type D = A | B

let d: D = {
  name: '张三'
}

d = {
  age: 18
}

// interface 无法直接进行联合类型和交叉类型的复杂类型操作
interface A2 {
  name: string
}

interface B2 {
  age: number
}

let c2: A2 & B2 = {
  name: '李四',
  age: 20
}

let d2: A2 | B2 = {
  name: '李四'
}

d2 = {
  age: 20
}

// interface 可以继承，type 不可以继承
interface M {
  name: string
}

interface M2 {
  age: number
}

type M3 = {
  address: string
}

interface P extends M, M2, M3 {}

let p: P = {
  name: '张三',
  age: 18,
  address: '深圳'
}

export {}
