import 'reflect-metadata'

// 通过 reflect-metadata 包定义的元数据，只能通过该包提供的方法才可获取对应的元数据的值，并不会改变定义元数据的宿主的值

const metadataKey = Symbol('a')

const metadataValue = '我是元数据'

const propertyKey = 'name'

const obj = {
  name: '张三',
  age: 18
}

// 给对象定义元数据
{
  Reflect.defineMetadata(metadataKey, metadataValue, obj)
  console.log(
    '对象的原型链上（可能是继承的父类）存在定义的元数据的key？',
    Reflect.hasMetadata(metadataKey, obj)
  )
  console.log(
    '对象上自己存在定义的元数据的key？',
    Reflect.hasOwnMetadata(metadataKey, obj)
  )
  console.log(
    '对象上定义的元数据的值：',
    Reflect.getOwnMetadata(metadataKey, obj)
  )
  console.log(Reflect.getMetadataKeys(obj))
  console.log('---------------')
}

// 给对象的属性定义元数据
{
  Reflect.defineMetadata(metadataKey, metadataValue, obj, propertyKey)
  console.log(
    '对象属性的原型链上存在定义的元数据的key？',
    Reflect.hasMetadata(metadataKey, obj, propertyKey)
  )
  console.log(
    '对象属性上存在定义的元数据的key？',
    Reflect.hasOwnMetadata(metadataKey, obj, propertyKey)
  )
  console.log(
    '对象属性上定义的元数据的值：',
    Reflect.getMetadata(metadataKey, obj, propertyKey)
  )
  console.log(Reflect.getMetadataKeys(obj, propertyKey))
  console.log('------------------------')
}

// 直接在类的属性和方法上定义元数据
{
  const metadataKey2 = Symbol('b')

  const metadataValue2 = '我是元数据2'

  function classDecorator(targetClass: any) {
    console.log(
      `获取元数据${String(metadataKey)}的值：`,
      Reflect.getMetadata(metadataKey, targetClass.prototype, 'name')
    )
    console.log(
      `获取元数据${String(metadataKey2)}的值：`,
      Reflect.getMetadata(metadataKey2, targetClass.prototype, 'sayHi')
    )
  }

  @classDecorator
  class Person {
    @Reflect.metadata(metadataKey, metadataValue) // 等价于 Reflect.defineMetadata(metadataKey, metadataValue, Person.prototype, "name")
    name: string = 'Mark'

    @Reflect.metadata(metadataKey2, metadataValue2) // 等价于 Reflect.defineMetadata(metadataKey2, metadataValue2, Person.prototype, "sayHi")
    sayHi() {
      console.log('Hi')
    }
  }
}

// 三种内置的常用元数据键
{
  console.log('------------------------')

  function methodDecorator(
    targetClassPrototype: object,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {}

  class Person {
    @Reflect.metadata(Symbol('a'), 1)
    name: string = 'Mark'

    @methodDecorator
    fn(param1: string, param2: number): string {
      return 'Hello'
    }
  }

  const p = new Person()

  const propertyType = Reflect.getMetadata('design:type', p, 'name')
  console.log('propertyType: ', propertyType)

  const paramTypes = Reflect.getMetadata('design:paramtypes', p, 'fn')
  console.log('paramTypes: ', paramTypes)

  const returnType = Reflect.getMetadata('design:returntype', p, 'fn')
  console.log('returnType: ', returnType)
}
