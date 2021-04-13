import { Queue } from '../src/index'

describe('Queue', () => {
  test('Queue Methods', () => {
    const queue = new Queue()
    expect(queue.isEmpty()).toBe(true)
    queue.enqueue('john')
    queue.enqueue('jack')
    expect(queue.toString()).toBe('john,jack')
    queue.enqueue('camila')
    expect(queue.toString()).toBe('john,jack,camila')
    expect(queue.size()).toBe(3)
    expect(queue.isEmpty()).toBe(false)
    queue.dequeue()
    queue.dequeue()
    expect(queue.toString()).toBe('camila')
  })
})
