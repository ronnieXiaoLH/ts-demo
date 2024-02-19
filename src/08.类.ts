// 类成员
{
  class Person {
    name: string
    age: number
    address: string = '深圳'

    readonly getName: () => string = () => this.name

    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
  }

  const p1 = new Person('张三', 18)
  console.log(p1.getName())
}

// 静态成员
{
  class DateUtil {
    static formatDate(date = new Date()) {
      return date.toLocaleDateString()
    }

    static formatTime(date = new Date()) {
      return date.toLocaleTimeString()
    }
  }

  console.log(DateUtil.formatDate())
  console.log(DateUtil.formatTime())
}

// 单例模式
{
  // 方式1：立即创建单例模式
  class DateUtil2 {
    static dateUtil = new DateUtil2()

    constructor() {
      console.log(1, '构造函数执行')
    }

    formatDate(date = new Date()) {
      return date.toLocaleDateString()
    }

    formatTime(date = new Date()) {
      return date.toLocaleTimeString()
    }
  }

  console.log(2, '开始...')
  console.log(
    3,
    DateUtil2.dateUtil.formatDate(),
    DateUtil2.dateUtil.formatTime()
  )

  // export default DateUtil2.dateUtil

  // 方式2：
  class DateUtil3 {
    static dateUtil: DateUtil3

    constructor() {
      console.log(2, '构造函数执行')
    }

    static getInstance(): DateUtil3 {
      if (!this.dateUtil) {
        this.dateUtil = new DateUtil3()
      }
      return this.dateUtil
    }

    formatDate(date = new Date()) {
      return date.toLocaleDateString()
    }

    formatTime(date = new Date()) {
      return date.toLocaleTimeString()
    }
  }

  console.log(1, '开始')
  console.log(
    3,
    DateUtil3.getInstance().formatDate(),
    DateUtil3.getInstance().formatTime()
  )
}

/**
 * 类的 getter 和 setter：
 *  + 如果在 get/set 操作期间添加其他逻辑，则最好公开该字段
 *  + 如果 get 存在但没有 set，则属性自动为 readonly
 *  + 如果不指定 setter 参数的类型，则从 getter 的返回类型推断
 *  + getter 和 setter 必须有相同的 成员可见性
 */
{
  class Person {
    name: string
    _age: number = 0

    constructor(name: string) {
      this.name = name
    }

    public get age() {
      return this._age
    }

    public set age(val: string | number) {
      if (typeof val === 'string') {
        val = Number(val)
      }
      this._age = val
    }
  }

  const p = new Person('张三')
  p.age = 18
  console.log(p.age)
  p.age = '20'
  console.log(p.age)
}

// 继承
{
  // 交通工具
  class Vechile {
    constructor(
      public brand: string, // 品牌
      public vechileNo: string, // 车牌号
      public days: number, // 租赁天数
      public deposit: number // 押金
    ) {}

    // 计算租赁车的价格
    /**
     * TS 继承，方法重写：
     *  当父类中方法的实现，不能满足或完全满足子类的功能，需要在子类中进行方法重写
     */
    public calulateRent(): number {
      console.log(`${this.brand}车牌号为：${this.vechileNo}开始被租`)
      return 0
    }

    // 支付押金
    public payDesposit() {
      console.log(
        `${this.brand}车牌号为：${this.vechileNo}支付了：${this.deposit}`
      )
    }
  }

  // 小轿车
  class Car extends Vechile {
    constructor(
      public brand: string,
      public vechileNo: string,
      public days: number,
      public deposit: number,
      public type: string
    ) {
      super(brand, vechileNo, days, deposit)
    }

    // 根据车的型号获取租车单价
    public getPriceByType(): number {
      let rentMoneyByDay: number = 0
      switch (this.type) {
        case '普拉多巡洋舰':
          rentMoneyByDay = 800
          break
        case '凯美瑞旗舰版':
          rentMoneyByDay = 400
          break
        case '威驰智行版':
          rentMoneyByDay = 200
          break
        default:
          break
      }
      return rentMoneyByDay
    }

    /**
     * 子类重写父类的方法：
     *  + 1. 和父类方法同名
     *  + 2. 参数和父类相同，如果是引用类型的参数，需要依据具体类型来定义
     *  + 3. 父类方法的访问范围【访问修饰符】必须小于等于子类重写方法的访问范围【访问修饰符】(PS: private 不能被子类重写)
     */
    public calulateRent(): number {
      super.calulateRent()
      return this.days * this.getPriceByType()
    }
  }

  // 大巴
  class Bus extends Vechile {
    constructor(
      public brand: string,
      public vechileNo: string,
      public days: number,
      public deposit: number,
      public seatNum: number
    ) {
      super(brand, vechileNo, days, deposit)
      if (this.seatNum > 200) {
        throw new Error('座位数不能大于200')
      }
    }

    // 根据车的座位数获取租车单价
    public getPriceBySeatNum(): number {
      let rentMoneyByDay: number = 0
      if (this.seatNum <= 20) {
        rentMoneyByDay = 1000
      } else if (this.seatNum <= 50) {
        rentMoneyByDay = 2000
      } else {
        rentMoneyByDay = 5000
      }
      return rentMoneyByDay
    }

    public calulateRent(): number {
      return this.days * this.getPriceBySeatNum()
    }
  }

  const car = new Car('普拉多', '京A23435', 3, 100000, '普拉多巡洋舰')
  console.log(car.calulateRent())

  const bus = new Bus('大巴', '京43287', 3, 50000, 30)
  console.log(bus.calulateRent())
}

export {}
