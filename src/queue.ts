class Queue<T> {
  private items: T [];
  private count: number;
  private lowestCount: number;

  constructor () {
    // 跟踪最后一个元素的位置
    this.count = 0
    // 跟踪第一个元素的位置
    this.lowestCount = 0
    this.items = []
  }

  // 从队尾添加元素
  enqueue (element) {
    this.items[this.count++] = element
  }

  isEmpty () {
    return this.count - this.lowestCount === 0
  }

  // 移除队列头的第一个元素
  dequeue () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  // 查看队列头的元素
  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  size () {
    return this.count - this.lowestCount
  }

  clear () {
    this.count = 0
    this.lowestCount = 0
    this.items = []
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }

    return objString
  }
}

export default Queue
