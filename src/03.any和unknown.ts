let a: any = 1
a = 'a'
a = false

let b: unknown = 1
// b.toFixed(2) // 错误，unknown 类型需要进行类型检查
if (typeof b === 'number') {
  // 先进行类型检查，再使用对应类型的方法
  b = b.toFixed(2)
}

console.log('b:', b)

// any 类型是任何类型的子类，可以将 any 类型的变量赋值给其他类型的变量
let n: any = 1
let s: string = n

export {}
