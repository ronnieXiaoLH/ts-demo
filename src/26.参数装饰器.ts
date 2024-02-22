import 'reflect-metadata'

{
  // 参数装饰器，用于记录方法参数的类型
  function logParameter(
    targetClassPrototype: object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) {
    console.log(targetClassPrototype, propertyKey, parameterIndex)
    console.log(
      `Parameter type: ${
        Reflect.getMetadata(
          'design:paramtypes',
          targetClassPrototype,
          propertyKey
        )[parameterIndex].name
      }`
    )
  }

  class MyClass {
    myMethod(@logParameter param: string) {
      // method implementation
    }
  }
}
