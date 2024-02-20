// 函数重载
{
  type MessageType = 'image' | 'audio'

  interface Message {
    id: number
    type: MessageType
    message: string
  }

  let messages: Message[] = [
    {
      id: 1,
      type: 'image',
      message: '你好'
    },
    {
      id: 2,
      type: 'audio',
      message: '举杯邀明月，对影成三人'
    },
    {
      id: 3,
      type: 'audio',
      message: '早呀'
    },
    {
      id: 4,
      type: 'image',
      message: '中午吃什么'
    },
    {
      id: 5,
      type: 'image',
      message: '今天周五'
    }
  ]

  /**
   * 函数签名：函数名称 + 函数参数 + 函数参数类型 + 返回值类型
   * 函数重载的定义：包含以下规则的一组函数就是 TS 函数重载
   *  + 1. 由一个实现签名 + 一个或多个重载签名合成
   *  + 2. 调用重载函数时，会根据传递来的参数来判断你调用的是哪一个函数
   *  + 3. 只有一个函数体，只有实现签名配备了函数体
   *  + 4. 实现签名参数个数可以少于重载签名的参数个数，但是实现签名某个参数包含重载签名的参数，那么该参数类型就必须兼容所有重载签名对应参数的类型【联合类型|any|unknown】
   */

  function getMessage(id: number): Message
  function getMessage(msgType: MessageType): Message[]
  // 实现签名
  function getMessage(payload: any): Message | Message[] | undefined {
    if (typeof payload === 'number') {
      return messages.find((item) => item.id === payload)
    } else {
      return messages.filter((item) => item.type === payload)
    }
  }

  console.log(getMessage(2))
  console.log(getMessage('image'))
}

// 泛型函数重载
{
  function quickSort<T>(arr: Array<T>): Array<T> {
    if (arr.length < 2) return arr
    const left: Array<T> = [],
      right: Array<T> = []
    const mid = arr.splice(Math.floor(arr.length / 2), 1)[0]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return quickSort(left).concat(mid, quickSort(right))
  }

  // 中文排序
  function sortChinese<T>(arr: Array<T>): Array<T> {
    return arr.sort((a, b) => (a as any).localeCompare(b, 'zh-CN'))
  }

  // 字符串自排序
  function strSelfSort(str: string): string {
    let strArr = str.split('')
    let strSortArr = quickSort(strArr)
    return strSortArr.join('')
  }

  const arr = [5, 8, 2, 3, 2, 10, 1, 7, 6]
  // console.log(quickSort(arr))

  const chineseArr = ['武汉', '郑州', '太原', '济南', '沈阳', '大连']
  // console.log(sortChinese(chineseArr))

  // const str = 'gadafdlkjv'
  // console.log(strSelfSort(str))

  // 判断数组是否有中文
  function isChinese(arr: any[]): boolean {
    const reg = /[\u4e00-\u9fa5]+/g
    return arr.some((item) => reg.test(item))
  }

  /**
   * 泛型函数重载
   */
  function sort(data: string): string
  function sort<T>(data: T): T
  function sort(data: any): any {
    if (typeof data === 'string') {
      return strSelfSort(data)
    }
    if (data instanceof Array) {
      if (isChinese(data)) {
        return sortChinese(data)
      }
      const newArr = data.map((item) =>
        typeof item === 'string' ? strSelfSort(item) : item
      )
      return quickSort(newArr as any)
    }
  }

  const strArr = ['bd', 'cd', 'ac', 'vd', 'ca']
  console.log(sort(arr))
  console.log(sort(chineseArr))
  console.log(sort(strArr))
  console.log(sort('asdafqrqoiu'))
}
