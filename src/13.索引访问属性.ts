{
  interface Person {
    name: string
    age: number
    address: {
      city: string
      zipCode: string
    }
  }

  type AgeType = Person['age'] // 类型是 number
  type ZipCodeType = Person['address']['zipCode'] // 类型是 string

  // 使用联合、keyof或其他类型
  type I1 = Person['age' | 'name'] // 类型是 string | number

  type I2 = Person[keyof Person] // 类型是 string | number | { city: string; zipCode: string; }

  type nameOrAge = 'name' | 'age' // 字面量（模板字面）类型
  type I3 = Person[nameOrAge] // 类型是 string | number
}

{
  const MyArray = [
    { name: 'Alice', age: 15 },
    { name: 'Bob', age: 23 },
    { name: 'Eve', age: 38 }
  ]

  type Person = (typeof MyArray)[number] // 类型为 {name: string; age: number}

  type Age = (typeof MyArray)[number]['age'] // 类型为 number
}
