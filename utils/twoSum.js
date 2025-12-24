/**
 * twoSum - Find indices of two numbers that add up to target
 * @param {number[]} nums - Array of numbers
 * @param {number} target - Target sum
 * @returns {number[]} - Indices of two numbers adding to target, or empty array if none exist
 */
function twoSum(nums, target) {
  // Using a hash map for O(n) time complexity
  const numMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (numMap.has(complement)) {
      return [numMap.get(complement), i]
    }

    numMap.set(nums[i], i)
  }

  // If no pair found, return empty array
  return []
}

export default twoSum
