{
  // 对象的 key 只能是 string 类型，key 的值只能是 number 类型
  type MyNumberRecord = Record<string, number>

  const myObject: MyNumberRecord = {
    key1: 10,
    key2: 20,
    key3: 30
  }
}

// 示例
{
  interface Todo {
    title: string
    completed: boolean
    description: string
  }

  let todoList: Todo[] = [
    {
      title: '学习TS',
      completed: false,
      description: '系统性学习TS'
    },
    {
      title: 'Vue3开发项目',
      completed: false,
      description: '使用开发Vue3+Typescript开发前端项目'
    }
  ]

  // 实现效果
  type PickTodoList<T> = Record<
    string,
    { [P in Exclude<keyof T, 'title'>]: T[P] }
  >
  type TestTodoList = PickTodoList<Todo>

  const pickTodoList: TestTodoList = {
    学习TS: {
      completed: false,
      description: '系统性学习TS'
    },
    Vue3开发项目: {
      completed: false,
      description: '使用开发Vue3+Typescript开发前端项目'
    }
  }
}
