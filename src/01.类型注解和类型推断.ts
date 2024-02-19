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
console.log(add2(1, 2))

export {}
