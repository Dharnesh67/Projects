#include <bits/stdc++.h>
using namespace std;
#define pp pair<int, int>
class Solution
{
public:
    int minCostConnectPoints(vector<vector<int>> &p)
    {
        int n = p.size();
        vector<vector<pair<int, int>>> edges(n);
        for (int i = 0; i < p.size(); i++)
        {
            for (int j = i + 1; j < p.size(); i++)
            {
                int cost = (abs(p[i][0] - p[j][0]) + abs(p[i][1] - p[j][1]));
                edges[i].push_back({j, cost});
            }
        }
        priority_queue<pp, vector<pp>, greater<pp>> pq; // cost,node
        pq.push({0, 0});
        vector<bool> vis(n, false);
        vector<int> dis(n, INT_MAX);
        int ans = 0;
        while (!pq.empty())
        {
            auto x = pq.top();
            pq.pop();
            int node = x.second;
            if (vis[node])
            {
                continue;
            }
            vis[node] = 1;
            ans += x.first;
            for (auto &neigh : edges[node])
            {
                if (!vis[neigh.first] && dis[neigh.first] > neigh.second)
                {
                    dis[neigh.first] = neigh.second;
                    pq.push({neigh.second, neigh.first});
                }
            }
        }
        return ans;
    }
};

int main()
{
}