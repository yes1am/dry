import { day } from '../src/index'

describe('day', () => {
  test('day Methods', () => {
    const date = day('2018-08-08')
    expect(date.year()).toBe(2018)
    // month 是从 0 到 11 的
    expect(date.month()).toBe(7)
    expect(date.date()).toBe(8)
  })
})
