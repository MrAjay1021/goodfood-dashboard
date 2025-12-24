import { twoSum } from "@/utils/twoSum"

describe("twoSum", () => {
  test("should return indices of two numbers that add up to target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  })

  test("should work with numbers in different positions", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
  })

  test("should work with duplicate numbers", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })

  test("should return empty array when no solution exists", () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([])
  })

  test("should work with negative numbers", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4])
  })

  test("should work with zero", () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3])
  })
})