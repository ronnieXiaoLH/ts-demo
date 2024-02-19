// typeof 类型守卫
{
  function logLength(value: string | number) {
    if (typeof value === 'string') {
      console.log(value.length) // 在这里 TypeScript 知道 value 是字符串类型
    } else {
      console.log(value) // 在这里 TypeScript 知道 value 是数字类型
    }
  }
  logLength('abc')
  logLength(666)
}

// instanceof 类型守卫
{
  class Animal {
    move() {
      console.log('Moving...')
    }
  }

  class Bird extends Animal {
    fly() {
      console.log('Flying...')
    }
  }

  function moveAnimal(animal: Animal) {
    if (animal instanceof Bird) {
      animal.fly() // 在这里 TypeScript 知道 animal 是 Bird 类型
    } else {
      animal.move() // 在这里 TypeScript 知道 animal 是 Animal 类型
    }
  }

  const bird = new Bird()
  moveAnimal(bird)

  const animal = new Animal()
  moveAnimal(animal)
}

// in 运算符守卫
{
  class Bird {
    fly() {
      console.log('Flying...')
    }
  }

  class Fish {
    swim() {
      console.log('Swiming...')
    }
  }

  function move(animal: Bird | Fish) {
    if ('fly' in animal) {
      animal.fly()
    } else {
      animal.swim()
    }
  }

  const bird = new Bird()
  move(bird)
}

// 自定义类型守卫：如果返回的是 true，则参数就是 is 后面的数据类型
{
  function isString(value: any): value is string {
    return typeof value === 'string'
  }

  function processValue(value: any) {
    if (isString(value)) {
      console.log(value.toUpperCase()) // 在这里 TypeScript 知道 value 是字符串类型
    } else {
      console.log(value) // 在这里 TypeScript 知道 value 不是字符串类型
    }
  }

  processValue('Hello TypeScript')
}
