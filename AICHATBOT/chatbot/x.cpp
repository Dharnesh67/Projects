#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define pii pair<int, int>
#define pll pair<long long, long long>
#define vi vector<int>
#define vll vector<long long>
#define vvll vector<vector<long long>>
#define mii map<int, int>
#define msi map<string, int>
#define mci map<char, int>
#define si set<int>
#define sc set<char>
#define f(i, s, e) for (long long int i = s; i < e; i++)
#define pb push_back
#define mod 1000000007
unordered_map<std::string, char> mp{
    {"111111000110001100011111110001100011000110001", 'A'},
    {"111111000110001100011111110001100011000111111", 'B'},
    {"111111000010000100001000010000100001000011111", 'C'},
    {"111111000110001100011000110001100011000111111", 'D'},
    {"111111000010000100001111110000100001000011111", 'E'},
    {"111111000010000100001111110000100001000010000", 'F'},
    {"111111000010000100001011110001100011000111111", 'G'},
    {"100011000110001100011111110001100011000110001", 'H'},
    {"111110010000100001000010000100001000010011111", 'I'},
    {"111110000100001000011000110001100011000111111", 'J'},
    {"100011001010100110001111110001100011000110001", 'K'},
    {"100001000010000100001000010000100001000011111", 'L'},
    {"111111010110101101011010110001100011000110001", 'M'},
    {"100011100110101100111000110001100011000110001", 'N'},
    {"011101000110001100011000110001100011000101110", 'O'},
    {"111111000110001100011111110000100001000010000", 'P'},
    {"111111000110001100011010110001100111000111111", 'Q'},
    {"111111000110001100011111111000101001001010001", 'R'},
    {"111111000010000100001111100001000010000111111", 'S'},
    {"111110010000100001000010000100001000010000100", 'T'},
    {"100011000110001100011000110001100011000111111", 'U'},
    {"100011000110001100011000110001100010101000100", 'V'},
    {"100011000110001100011010110101101011010111111", 'W'},
    {"100010000001010000000010000000010100000010001", 'X'},
    {"100011000110001100011111100001000010000111111", 'Y'},
    {"111110000000010000000010000000010000000011111", 'Z'}};


void solve()
{
    vector<string> grid(9);
    for (int i = 0; i < 9; i++)
    {
        cin >> grid[i];
    }

    // Determine the number of characters
    int charCount = 0;
    std::size_t i = 0;
    vector<int> gap;
    while (i < grid[0].size())
    {
        i += 5;
        charCount++;
        int count = 0;
        while (i < grid[0].size() && grid[0][i] == '0')
        {
            count++;
            i++;
        }
        gap.push_back(count);
    }

    // Parse individual characters from the grid
    vector<string> charGrid(charCount, "");
    for (int j = 0; j < 9; j++)
    {
        std::size_t i = 0;
        int x = 0;
        while (i < grid[0].size())
        {
            string s = grid[j].substr(i, 5);
            charGrid[x] += s;
            i += 5;
            int a = gap[x];
            while (a--)
            {
                i++;
            }
            x++;
        }
    }

    string ans = "";
    for (auto x : charGrid)
    {
        ans += mp[x];
    }

    cout << ans;
}

int main()
{

    int t = 1;
    // cin >> t;
    while (t--)
    {
        solve();
    }
}