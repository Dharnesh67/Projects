#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    bool checkSubarraySum(vector<int> &nums, int k)
    {
        int x = nums[0];
        unordered_map<int,int>mp;
        for (int i = 1; i < nums.size(); i++)
        {
            x += nums[i];
            mp[x]++;
        }
        for(auto i:mp)
        {
            cout<<i.first<<" "<<i.second<<endl;
        }
        return false;
    }
};
int main()
{
   Solution s;
   vector<int>v={23,2,4,6,6};
   s.checkSubarraySum(v,7);
}