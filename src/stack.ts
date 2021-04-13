class Stack<T> {
  private count: number;
  private items: {[key: number]: T};

  constructor () {
    this.count = 0
    this.items = {}
  }

  // 只能一次添加一个元素
  push (element) {
    this.items[this.count++] = element
  }

  size () {
    return this.count
  }

  isEmpty () {
    return this.count === 0
  }

  pop () {
    if (this.isEmpty()) {
      return undefined
    }

    // 获取最后最后一个元素的 index
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  clear () {
    this.items = []
    this.count = 0
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`

    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }

    return objString
  }
}

export default Stack
