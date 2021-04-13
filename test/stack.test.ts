import { Stack } from '../src/index'

describe('Stack', () => {
  test('Stack Methods', () => {
    const stack = new Stack()
    expect(stack.isEmpty()).toBe(true)
    stack.push(5)
    stack.push(8)
    expect(stack.peek()).toBe(8)
    stack.push(11)
    expect(stack.size()).toBe(3)
    expect(stack.isEmpty()).toBe(false)
    stack.push(15)
    stack.pop()
    stack.pop()
    expect(stack.size()).toBe(2)
  })
})
