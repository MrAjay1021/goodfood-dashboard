import twoSum from "../utils/twoSum"

describe("twoSum", () => {
  // Positive test case - normal scenario
  test("should return correct indices for valid input", () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    const result = twoSum(nums, target)
    expect(result).toEqual([0, 1])
  })

  // Positive test case - numbers not adjacent
  test("should find indices when numbers are not adjacent", () => {
    const nums = [3, 2, 4]
    const target = 6
    const result = twoSum(nums, target)
    expect(result).toEqual([1, 2])
  })

  // Negative test case - no solution exists
  test("should return empty array when no solution exists", () => {
    const nums = [1, 2, 3]
    const target = 100
    const result = twoSum(nums, target)
    expect(result).toEqual([])
  })

  // Edge case - same number twice
  test("should handle same number used twice", () => {
    const nums = [3, 3]
    const target = 6
    const result = twoSum(nums, target)
    expect(result).toEqual([0, 1])
  })

  // Edge case - empty array
  test("should return empty array for empty input", () => {
    const nums = []
    const target = 5
    const result = twoSum(nums, target)
    expect(result).toEqual([])
  })

  // Edge case - negative numbers
  test("should handle negative numbers", () => {
    const nums = [-1, -2, -3, -4, -5]
    const target = -8
    const result = twoSum(nums, target)
    expect(result).toEqual([2, 4])
  })
})
