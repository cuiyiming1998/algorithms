import { describe, expect, it } from 'vitest'
import  {add} from './add.ts'

// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]
describe('add', () => {
  it('测试用例1', () => {
    const l1 = {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 9,
              next: {
                val: 9,
                next: {
                  val: 9,
                  next: null
                }
              }
            }
          }
        }
      }
    }

    const l2 = {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: null
          }
        }
      }
    }
    const res = {
      val: 8,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 0,
              next: {
                val: 0,
                next: {
                  val: 0,
                  next: {
                    val: 1,
                    next: null
                  }
                }
              }
            }
          }
        }
      }
    }
    expect(add(l1 as any, l2 as any)).toEqual(res)
  })
})
