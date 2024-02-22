import './28.reflect-metadata的使用'

// 声明文件的使用
/**
 * 下面的代码使用全局变量和函数在 TS 编译阶段中是不报错的，因为全局声明告诉 TS 在代码运行阶段这些全局变量是存在的
 * 但是如果我们直接运行下面代码是会报错的，因为我们并没有在全局定义这些变量
 */
// a = 123
// s = 'Hello, TypeScript!'
// console.log(`全局变量：a :${a}, s: ${s}, __DEV__: ${__DEV__}`)
// console.log(`全局函数：add: ${add(1, 2)}`)

// let status = Status.Normal
// console.log('status: ', status)

// let status2 = Status.Disabled
// console.log('status2: ', status2)

// const p = new Person('Mark')
// console.log('p:', p)

// let p2: IPerson = {
//   name: 'Mark',
//   age: 18
// }

// console.log('p2:', p2)

// let n: NumOrStr = 1
// n = 'a'
// console.log('n:', n)

// console.log(myObject.name.toUpperCase())
// console.log(myObject.sayHi())
// console.log(new myObject.Person('Tom'))
// console.log(myObject.subObject.sayHi())

export {}
