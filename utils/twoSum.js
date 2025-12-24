/**
 * twoSum - Find two numbers that add up to target
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @returns {number[]} - Indices of two numbers that add up to target
 * 
 * Time Complexity: O(n) - Single pass through array
 * Space Complexity: O(n) - Hash map storage
 */
export function twoSum(nums, target) {
  const numMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (numMap.has(complement)) {
      return [numMap.get(complement), i]
    }

    numMap.set(nums[i], i)
  }

  return []
}