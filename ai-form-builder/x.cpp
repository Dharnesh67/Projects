#include <bits/stdc++.h>
using namespace std;

set<pair<int, int>> vis;

int f(int i, int j, int south, int col, string s, string &ans, int &len) {
    if (i == 0 && j == 0) {
        if (s.length() < len) {
            ans = s;
            len = s.length();
        }
        return s.length();
    }
    if (i > south || abs(j) > col || vis.count({i, j})) {
        return INT_MAX;
    }
    vis.insert({i, j});
    int res = 1 + min({
        f(i + 1, j, south, col, s + 'S', ans, len),
        f(i, j - 1, south, col, s + 'W', ans, len),
        f(i, j + 1, south, col, s + 'E', ans, len)
    });
    vis.erase({i, j});
    return res;
}

string solution(string &forth) {
    int i = 0, j = 0;
    int south = 0, east = 0, west = 0;
    for (char c : forth) {
        vis.insert({i, j});
        if (c == 'N') {
            i--;
            south++;
        } else if (c == 'E') {
            j++;
            east++;
        } else if (c == 'W') {
            j--;
            west++;
        }
    }

    string ans = "";
    int len = INT_MAX;
    f(i, j, south, max(east, west), "", ans, len);
    return ans;
}
