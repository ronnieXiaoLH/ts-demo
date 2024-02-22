import 'reflect-metadata'

const formatMetadataKey = Symbol('format')
function format(formatString: string) {
  // 定义元数据
  return Reflect.metadata(formatMetadataKey, formatString)
}
function getFormat(targetClassPrototype: object, propertyKey: string) {
  // 获取元数据
  return Reflect.getMetadata(
    formatMetadataKey,
    targetClassPrototype,
    propertyKey
  )
}

class Greeter {
  @format('Hello, %s')
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    let formatString = getFormat(this, 'greeting')
    return formatString.replace('%s', this.greeting)
  }
}
console.log(new Greeter('aa').greet())

export {}
