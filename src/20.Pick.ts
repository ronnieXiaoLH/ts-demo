{
  interface Person {
    name: string
    age: number
    address: string
  }

  type PersonSummary = Pick<Person, 'name' | 'age'> // 类型是 { name: string; age: number }
}
