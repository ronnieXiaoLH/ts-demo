{
  type Animal = 'Dog' | 'Cat' | 'Bird' | 'Fish'
  type Mammal = 'Dog' | 'Cat'

  type OnlyMammals = Extract<Animal, Mammal> // 结果类型为 'Dog' | 'Cat'
}
