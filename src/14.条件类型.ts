{
  interface Animal {
    live(): void
  }

  interface Dog extends Animal {
    woof(): void
  }

  type I1 = Dog extends Animal ? number : string // 类型是 number

  type I2 = RegExp extends Animal ? number : string // 类型是 string
}

// 示例：往一个接口中追加属性
{
  // T 是泛型接口，K 是要追加的属性类型，V 是要追加的属性的值类型
  type AddAttrToObj<T, K extends string, V> = {
    [P in keyof T | K]: P extends keyof T ? T[P] : V
  }

  interface Person {
    name: string
    age: number
  }

  type NewPerson = AddAttrToObj<Person, 'gender', string> // 类型是 { name: string; age: number; gender: string }
}
