#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define pii pair<int, int>
#define pll pair<long long, long long>
#define vi vector<int>
#define vll vector<long long>
#define mii map<int, int>
#define si set<int>
#define sc set<char>

#define f(i, s, e) for (long long int i = s; i < e; i++)
#define cf(i, s, e) for (long long int i = s; i <= e; i++)
#define rf(i, e, s) for (long long int i = e - 1; i >= s; i--)
#define pb push_back
#define eb emplace_back
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int t;
    cin >> t;
    while (t--)
    {
        int n,m,k;
        cin>>n>>m>>k;
        unordered_map<int,pair<int,int>> mp;
        f(i,0,n)
        {
            f(j,0,m)
            {
                int color=1;
                while(true)
                {
                    if(mp.find(color)==mp.end())
                    {
                        mp[color]={i,j};
                        break;
                    }else{
                        int x=mp[color].first;
                        int y=mp[color].second;
                        if(max(abs(x-i),abs(y-j))>=k)
                        {
                            mp[color]={i,j};
                            break;
                        }
                    }
                    color++;
                }
            }
        }
        cout<<mp.size()<<endl;
    }
}