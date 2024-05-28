#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    static bool compare(pair<double, int> &a, pair<double, int> &b)
    {
        return a.first < b.first;
    }
    int maxPointsInsideSquare(vector<vector<int>> &points, string s)
    {
        unordered_set<char> st;
        priority_queue<pair<double, int>, vector<pair<double, int>>, decltype(&compare)> pq(compare);
        for (int i = 0; i < points.size(); i++)
        {
            double distance = sqrt(points[i][0] * points[i][0] + points[i][1] * points[i][1]);
            pq.push({distance, i});
        }
        int count = 0;
        int maxx = INT_MIN;
        int maxy = INT_MIN;
        while (!pq.empty())
        {
            auto x = pq.top();
            pq.pop();
            maxx = max(points[x.second][0], maxx);
            maxy = max(points[x.second][1], maxy);
            if (!st.count(s[x.second]))
            {
                st.insert(s[x.second]);
            }
            else
            {
                for (int i = 0; i < points.size(); i++)
                {
                    if (maxx>points[i][0] && maxy>points[i][1] && st.count(s[i])){
                            count++;
                    }
                }
                break;
            }
        }
        return count;
    }
};