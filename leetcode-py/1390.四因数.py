#
# @lc app=leetcode.cn id=1390 lang=python3
#
# [1390] 四因数
#
# https://leetcode.cn/problems/four-divisors/description/
#
# algorithms
# Medium (42.15%)
# Likes:    46
# Dislikes: 0
# Total Accepted:    15.6K
# Total Submissions: 34.1K
# Testcase Example:  '[21,4,7]'
#
# 给你一个整数数组 nums，请你返回该数组中恰有四个因数的这些整数的各因数之和。如果数组中不存在满足题意的整数，则返回 0 。
#
#
#
# 示例 1：
#
#
# 输入：nums = [21,4,7]
# 输出：32
# 解释：
# 21 有 4 个因数：1, 3, 7, 21
# 4 有 3 个因数：1, 2, 4
# 7 有 2 个因数：1, 7
# 答案仅为 21 的所有因数的和。
#
#
# 示例 2:
#
#
# 输入: nums = [21,21]
# 输出: 64
#
#
# 示例 3:
#
#
# 输入: nums = [1,2,3,4,5]
# 输出: 0
#
#
#
# 提示：
#
#
# 1 <= nums.length <= 10^4
# 1 <= nums[i] <= 10^5
#
#
#

# @lc code=start
from typing import List


class Solution:
    def sumFourDivisors(self, nums: List[int]) -> int:
        ans = 0
        for num in nums:
            factor_cnt = factor_sum = 0
            i = 1

            while i * i <= num:
                if num % i == 0:
                    factor_cnt += 1
                    factor_sum += i
                    if not i * i == num:
                        factor_cnt += 1
                        factor_sum += num // i

                i += 1

            if factor_cnt == 4:
                ans += factor_sum

        return ans


# @lc code=end
