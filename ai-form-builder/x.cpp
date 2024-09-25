Q3. Reach End of Array With Max Score
Attempted
Medium
5 pt.
You are given an integer array nums of length n.

Your goal is to start at index 0 and reach index n - 1. You can only jump to indices greater than your current index.

The score for a jump from index i to index j is calculated as (j - i) * nums[i].

Return the maximum possible total score by the time you reach the last index.

 

Example 1:

Input: nums = [1,3,1,5]

Output: 7

Explanation:

First, jump to index 1 and then jump to the last index. The final score is 1 * 1 + 2 * 3 = 7.

Example 2:

Input: nums = [4,3,1,3,2]

Output: 16

Explanation:

Jump directly to the last index. The final score is 4 * 4 = 16.

 class Solution {
public:
    vector<long long> dp;

    long long f(int i, vector<int>& nums) {
        if (i == nums.size() - 1) {
            return 0;
        }
        if (dp[i] != -1) {
            return dp[i];
        }
        long long total = 0;
        for (int j = i + 1; j < nums.size(); j++) {
            total = max(total, (long long)(j - i) * (long long)(nums[i]) + f(j, nums));
        }
        return dp[i] = total;
    }

    long long findMaximumScore(vector<int>& nums) {
        dp.resize(nums.size(), -1);
        return f(0, nums);
    }
};
