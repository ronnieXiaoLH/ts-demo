// 使用映射类型将现有类型的所有属性变为只读
{
  type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P]
  }

  interface Person {
    name: string
    age: number
  }

  type ReadonlyPerson = ReadonlyType<Person>
}

// 排除对象类型某些属性
{
  type Omit<T, K extends keyof T> = {
    // [P in keyof T as Exclude<P, K>]: T[P]
    [P in Exclude<keyof T, K>]: T[P]
  }

  interface Person {
    name: string
    age: number
    address: string
  }

  const p: Omit<Person, 'address'> = {
    name: '张三',
    age: 18
  }
}
