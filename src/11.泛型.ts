// 泛型函数
{
  function identity<T>(arg: T): T {
    return arg
  }

  // 使用泛型函数
  let output = identity<string>('Hello, TypeScript!')
  console.log(output)
  // 或者让 TypeScript 推断类型
  let outputInferred = identity('Hello, TypeScript!')
  console.log(outputInferred)
}

// 泛型接口
{
  interface Ref<T> {
    value: T
  }

  const data: Ref<string> = {
    value: 'Hello, TypeScript!'
  }

  // 可以推断出 data.value 的数据类型为 string
  console.log(data.value.toUpperCase())
}

// 泛型类
{
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
}

// 泛型约束：约束泛型的类型范围
{
  interface Lengthwise {
    length: number
  }

  // loggingIdentity 的泛型参数类型必须符合 Lengthwise 接口
  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg
  }

  // 正确的使用
  loggingIdentity('Hello') // 返回 "Hello"
  loggingIdentity([1, 2, 3]) // 返回 [1, 2, 3]

  // 错误的使用
  // loggingIdentity(42) // 编译错误，因为 number 类型没有 length 属性
}
