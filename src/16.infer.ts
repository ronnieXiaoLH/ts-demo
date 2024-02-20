// infer 捕获函数返回类型
{
  type ExtractReturnType<T> = T extends (...args: any[]) => infer R ? R : never

  function exampleFunction(): string {
    return 'Hello, TypeScript!'
  }

  // ExtractReturnType<typeof exampleFunction> 推断出类型是 string
  const result: ExtractReturnType<typeof exampleFunction> = 'Hello again!'
}

// infer 捕获条件类型中的类型
{
  type ExtractArrayElementType<T> = T extends Array<infer U> ? U : never

  // ExtractArrayElementType<string[]> 推断出类型是 string
  const arrayExample: ExtractArrayElementType<string[]> = 'Hello' // 类型被推断为 string
}
