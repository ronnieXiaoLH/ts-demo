// keyof 类型运算符
{
  type MyObj = {
    name: string
    age: number
    gender: 'male' | 'female'
  }

  // 使用 keyof 获取 MyObj 类型的所有键的联合类型
  type MyKeys = keyof MyObj // "name" | "age" | "gender"

  // 这里的 MyKeys 鼠标悬停的时候并不会直观的展示它的类型，解决方法如下
  type DirectKeys<T> = T extends any ? T : never
  type MyKeys2 = DirectKeys<keyof MyObj> // 此时鼠标直接悬停在 MyKeys2 上会直观的展示它的类型

  function getProperty(obj: MyObj, key: MyKeys) {
    return obj[key]
  }

  const myObject: MyObj = {
    name: 'John',
    age: 25,
    gender: 'male'
  }

  console.log(getProperty(myObject, 'name'))
  console.log(getProperty(myObject, 'age'))
  console.log(getProperty(myObject, 'gender'))
}

// 示例：keyof 扁平化模块属性名
{
  // 有多个模块，每个模块中都有一系列方法，要求定义出一种类型，能够直观的知道一共有哪些方法（平铺）
  type Modules = {
    menu: {
      setActiveIndex: (index: string) => string
      setCollapse: (collapse: boolean) => boolean
    }

    user: {
      setUserInfo: (userInfo: any) => void
    }
  }

  type MB<T, U> = `${T & string}/${U & string}`

  type ModulesSpliceKeys<T> = {
    [Key in keyof T]: MB<Key, keyof T[Key]>
  }[keyof T] // [keyof T] 舍弃 T 中的 key

  type TestModulesSpliceKeys = ModulesSpliceKeys<Modules> // 类型是 'menu/setActiveIndex' | 'menu/setCollapse' | 'user/setUserInfo'
}

// typeof 类型运算符
{
  let x = 10

  // 使用 typeof 获取变量 x 的类型
  let y: typeof x // 这里 y 的类型为 number

  y = 0
  // y = 'a' // 报错，y 为 number 类型

  const obj = {
    name: 'John',
    age: 25
  }

  // 使用 typeof 获取 obj 对象的类型
  type ObjectType = typeof obj // 这里 ObjectType 的类型为 { name: string, age: number }

  const newObj: ObjectType = {
    name: 'Mark',
    age: 18
  }
}
