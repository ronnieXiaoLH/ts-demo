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
