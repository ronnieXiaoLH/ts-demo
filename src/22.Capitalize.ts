{
  type CapitalizedString = Capitalize<'hello'> // 类型为 'Hello'
}

// 示例：将一个对象类型中的所有函数名字改成 do + 函数名首字母大写的形式
{
  interface Todo {
    title: string
    completed: boolean
    add: () => void
    remove: () => void
  }

  // 排除数组
  type Exc<T> = Exclude<T, Array<any>>

  // Record 是可以接收数组的，所以需要排除数组
  type Degree<T extends Record<string, any>> = {
    [P in keyof Exc<T> as Exc<T>[P] extends Function
      ? `do${Capitalize<P & string>}`
      : never]: Exc<T>[P]
  }

  type DegreeTodo = Degree<Todo> // 类型为 {doAdd: () +> void; doRemove: () => void;}
}
