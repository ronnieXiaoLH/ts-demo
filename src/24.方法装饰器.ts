{
  // 方法装饰器，打印方法的调用日志
  function logMethod(
    targetClassPrototype: object,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
      console.log(`Method ${key} called with arguments: ${args}`)
      return originalMethod.apply(this, args)
    }

    return descriptor
  }

  class Person {
    constructor(public name: string) {}

    @logMethod
    sayHi() {
      console.log(`Hello ${this.name}`)
    }
  }

  const p = new Person('Mark')
  p.sayHi()
  console.log('---------------------')
}

/**
 * 方法拦截器的执行顺序：
 *  1. 前置拦截器由左到右，由上到下
 *  2. 原方法执行
 *  3. 后置拦截器由右到左，由下到上
 */
{
  function logMethod(
    targetClassPrototype: object,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
      console.log(`logMethod ${key} 前置拦截`)
      const res = originalMethod.apply(this, args)
      console.log(`logMethod ${key} 后置拦截`)
      return res
    }

    return descriptor
  }

  function logMethod2(
    targetClassPrototype: object,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
      console.log(`logMethod2 ${key} 前置拦截`)
      const res = originalMethod.apply(this, args)
      console.log(`logMethod2 ${key} 后置拦截`)
      return res
    }

    return descriptor
  }

  class Person {
    constructor(public name: string) {}

    @logMethod2
    @logMethod
    sayHi() {
      console.log(`Hello ${this.name}`)
    }
  }

  const p = new Person('Mark')
  p.sayHi()
}
