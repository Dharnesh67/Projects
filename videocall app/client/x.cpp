#include <bits/stdc++.h>
using namespace std;


class Solution
{
public:
    int f(int i, int j, vector<vector<int>> &grid)
    {
        if (i < 0 || j < 0 || i >= grid.size() || j >= grid[0].size() || grid[i][j] != 1)
        {
            return 0;
        }
        grid[i][j] = 0;
        return 1 + {f(i, j + 1, grid),
                    f(i, j - 1, grid),
                    f(i + 1, j, grid),
                    f(i - 1, j, grid)};
    }
    int maxAreaOfIsland(vector<vector<int>> &grid)
    {
        int ans=0;
        for (int i = 0; i < grid.size(); i++)
        {
            for (int j = 0; j<grid[0].size(); j++)
            {
                if(grid[i][j]==0){
                    ans=max(ans,f(i,j,grid));
                }
            }
        }
        return ans;
    }
};

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n, m;
    cin >> n >> m;
    graph.resize(n + 1);
    while (m--)
    {
        int x, y;
        cin >> x >> y;
        graph[x].push_back(y);
    }
    int maxans = 0;
    for (int i = 1; i <= n; i++)
    {
        maxans = max(maxans, dia(i));
    }
    cout << maxans;
}