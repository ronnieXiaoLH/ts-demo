/**
 * 各种类型装饰器的执行顺序：
 *  1. 属性装饰器
 *  2. 参数装饰器
 *  3. 方法装饰器
 *  4. 类装饰器
 */

import 'reflect-metadata'

const metadataKey = Symbol()

{
  function classDecorator(targetClass: any) {
    console.log('类装饰器')
  }

  function methodDecorator(
    targetClassPrototype: object,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    // 获取在属性装饰器中定义的元数据
    console.log(
      '方法装饰器',
      Reflect.getMetadata(metadataKey, targetClassPrototype, 'name')
    )
  }

  function propertyDecorator(value: string) {
    console.log('属性装饰器')
    return Reflect.metadata(metadataKey, value)
  }

  function paramsDecorator(
    target: object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) {
    console.log('参数装饰器')
  }

  @classDecorator
  class Person {
    @propertyDecorator('元数据的值')
    name: string

    constructor(name: string) {
      this.name = name
    }

    @methodDecorator
    sayHi(@paramsDecorator message: string) {
      console.log(`Hi ${message}`)
    }
  }
}

{
  console.log('-------------------------------')
  function classDecorator(targetClass: any) {
    console.log('类装饰器')
  }

  function methodDecorator(
    targetClassPrototype: object,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    // 获取在属性装饰器中定义的元数据
    console.log(
      '方法装饰器',
      Reflect.getMetadata(metadataKey, targetClassPrototype, 'name2')
    )
  }

  function propertyDecorator(
    targetClassPrototype: object,
    propertyKey: string | symbol
  ) {
    console.log('属性装饰器')
    // 定义元数据
    Reflect.defineMetadata(
      metadataKey,
      '我是元数据',
      targetClassPrototype,
      'name2'
    )
  }

  function paramsDecorator(
    target: object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) {
    console.log('参数装饰器')
  }

  @classDecorator
  class Person {
    @propertyDecorator
    name: string

    constructor(name: string) {
      this.name = name
    }

    @methodDecorator
    sayHi(@paramsDecorator message: string) {
      console.log(`Hi ${message}`)
    }
  }
}

console.log('-------------------------------')

function methodDecorator(
  targetClassPrototype: object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  // 获取在属性装饰器中定义的元数据
  console.log(
    '方法装饰器',
    Reflect.getMetadata(metadataKey, targetClassPrototype, 'name')
  )
}

function propertyDecorator(value: string) {
  console.log('属性装饰器')
  return Reflect.metadata(metadataKey, value)
}
class Person {
  @propertyDecorator('元数据的值')
  name: string

  constructor(name: string) {
    this.name = name
  }

  @methodDecorator
  sayHi(message: string) {
    console.log(`Hi ${message}`)
  }
}

export {}
