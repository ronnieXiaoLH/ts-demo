// 元组的长度和每个位置的数据类型必须与定义时一致，不能多也不能少
let myTuple: [number, string, boolean] = [1, 'hello', true]

let num = myTuple[0]
let str = myTuple[1]
let bool = myTuple[2]

console.log(num, str, bool)

// 访问元组的元素时，不能超过其长度
// let a = myTuple[3]

// 访问元组中的元素时，需要根据定义的类型进行使用
let f = num.toFixed(2)
console.log(f)

// 可变元组
// type VariableTuple = [string, number, boolean, ...string[]]
// 元组标签
type VariableTuple = [
  name: string,
  age: number,
  isFemale: boolean,
  ...rest: string[]
]

let myTuple2: VariableTuple = ['张三', 18, true, '深圳']

// 可变元组解构
const [name, age, isFemale, ...rest] = myTuple2

console.log(name, age, isFemale, rest)

export {}
