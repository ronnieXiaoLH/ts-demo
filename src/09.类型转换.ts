// 类型断言
{
  let value: any = 'Hello, TypeScript!'
  // 1. 尖括号语法
  console.log((<string>value).length)
  // 2. as 语法
  console.log((value as string).length)
}

// 类型转换函数：TypeScript 提供了一些内置的类型转换函数，如 Number(), String(), Boolean() 等，可以用于将值转换为相应的基本类型。
{
  let str: string = '42'
  let num: number = Number(str)
  console.log('num', num)
}
