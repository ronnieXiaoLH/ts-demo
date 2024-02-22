// 类装饰器函数里面的内容会立即执行，而不是等类实例化的时候才执行的
{
  // 装饰器工厂
  function logClass(params: string) {
    console.log('装饰器工厂参数：', params)
    return function (targetClass: any) {
      console.log(`当前时间：${new Date()}`)
    }
  }

  @logClass('Hello')
  class Person {
    constructor(public name: string) {}
  }
}

{
  function logClass(targetClass: any) {
    console.log(`当前时间：${new Date()}`)

    const p1 = new targetClass('Jack')
    p1.sayHi()
  }

  @logClass
  class Person {
    constructor(public name: string) {}

    sayHi() {
      console.log(`Hello ${this.name}`)
    }
  }

  const p = new Person('Mark')

  console.log('p: ', p)
}

// 示例：打印类实例化的时间
{
  function logDate<T extends { new (...args: any): any }>(targetClass: T) {
    return class extends targetClass {
      constructor(...args: any[]) {
        super(...args)
        console.log(
          `${targetClass.name} 创建日期 ${new Date().toLocaleDateString()}`
        )
      }
    }
  }

  @logDate
  class Person {
    constructor(public name: string) {}
  }

  const p = new Person('Mark')
}

// 类装饰器执行顺序：从右到左，从下到上，从里到外
{
  function logDate<T extends { new (...args: any): any }>(targetClass: T) {
    console.log('logDate')
    return class extends targetClass {
      constructor(...args: any[]) {
        super(...args)
        console.log(`创建日期 ${new Date().toLocaleDateString()}`)
      }
    }
  }

  function logTime<T extends { new (...args: any): any }>(targetClass: T) {
    console.log('logTime')
    return class extends targetClass {
      constructor(...args: any[]) {
        super(...args)
        console.log(`创建时间 ${new Date().toLocaleTimeString()}`)
      }
    }
  }

  @logDate
  @logTime
  class Person {
    constructor(public name: string) {}
  }

  const p = new Person('Mark')
  console.log('p: ', p)
}
