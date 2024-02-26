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

{
  function logParameter(
    targetClassPrototype: object,
    propertyKey: string,
    parameterIndex: number
  ) {
    console.log(`The parameter in position ${parameterIndex} at ${propertyKey} has
    been decorated`)
  }

  class Greeter {
    greeting: string

    constructor(greeting: string) {
      this.greeting = greeting
    }

    sayHi(@logParameter param: string) {}
  }
}
