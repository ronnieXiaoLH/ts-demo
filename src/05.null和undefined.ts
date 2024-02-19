// 变量只有声明为包含 undefined 的联合类型才可未初始化值而使用
let s: string | undefined
console.log('s:', s)

// `any`、`unknown`、`undefined` 类型的变量可以接收 undefined 的值
let a: any = undefined
let b: unknown = undefined
let c: undefined = undefined

// `any`、`unknown`、`null` 类型的变量可以接收 null 的值
let a2: any = null
let b2: unknown = null
let c2: null = null

// 在函数参数中，可选参数，想直接使用参数的属性或方法，需要
function fn(n?: number) {
  // 方式一
  if (n) {
    console.log(n.toFixed(2))
  }
  // 方式二
  console.log(n?.toFixed(2))
  // 方式三
  console.log(n!.toFixed(2))
  // 方式四
  console.log((n as number).toFixed(2))
}

fn(1)

export {}
