// 根类型是所有其他类型的父类型，声明为根类型的变量可以赋值任意其他类型
// {} 是 Object 的简写
let a: {}

a = 1
a = 'a'
a = true

// 联合类型
let b: number | string = 1
b = 'a'

// 交叉类型
type Obj = {
  username: string
}

type Obj2 = {
  age: number
}

let obj: Obj & Obj2 = {
  username: '张三',
  age: 18
}

// 字面量数据类型
// Flag 类型的值只能是 0 或 1
type Flag = 0 | 1
let flag: Flag = 0
flag = 1

// 使用 never 类型避免出现未来扩展新的类型没有对应类型的实现，目的是写出绝对安全的代码
type DataType = number | string

function fn(data: DataType) {
  if (typeof data === 'number') {
    console.log('数字类型')
  } else if (typeof data === 'string') {
    console.log('字符串类型')
  } else {
    console.log('data 被推断为 never 类型')
  }
}

/**
 * 枚举的好处：
 *  + 有默认值，且可以自增值，节省编码时间
 *  + 语义更清晰，可读性增强
 */
// 数字枚举 - 枚举项的值默认加 1
enum Week {
  Monday = 1,
  Tuesday,
  Wensday
}

// 枚举取值
console.log(Week.Tuesday)
console.log(Week['Tuesday'])

// 枚举取 key
console.log(Week[2])

// 字符串枚举 - 枚举项必须赋值
enum Week2 {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wensday = 'Wensday2'
}

// 枚举取值
console.log(Week2.Monday)
console.log(Week2['Monday'])

// 字符串枚举不能枚举取key
// console.log(Week2['Wensday2']) // 报错

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

export {}
