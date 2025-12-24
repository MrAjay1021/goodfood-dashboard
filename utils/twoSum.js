/**
 * twoSum - Returns indices of two numbers that add up to target
 * @param nums - Array of numbers
 * @param target - Target sum
 * @returns Array of two indices, or empty array if no solution exists
 */
export function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i]
    }

    numMap.set(nums[i], i)
  }

  return []
}
