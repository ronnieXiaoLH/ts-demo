{
  type Animal = 'Dog' | 'Cat' | 'Bird' | 'Fish'
  type Mammal = 'Dog' | 'Cat'

  type NonMammals = Exclude<Animal, Mammal> // 结果类型为 'Bird' | 'Fish'
}
