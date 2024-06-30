#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define f(i, s, e) for (long long int i = s; i < e; i++)
bool check(ll mid, ll m, vector<ll> &v)
{
    ll lines = 1;
    ll width = 0;
    f(i, 0, v.size())
    {
        if ((width + v[i] + (width > 0 ? 1 : 0)) > mid)
        {
            lines++;
            width = v[i];
        }
        else
        {
            width += (v[i] + (width > 0 ? 1 : 0));
        }
    }
    return (lines <= m);
}
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll n, m;
    cin >> n >> m;
    vector<ll> v(n);
    for (int i = 0; i < n; i++)
    {
        cin >> v[i];
    }
    ll sum = accumulate(begin(v), end(v), 0LL);
    ll i = 1;
    ll j = sum + n - 1;
    while (i < j)
    {
        ll mid = i + (j - i) / 2;
        if (check(mid, m, v))
        {
            j = mid;
        }
        else
        {
            i = mid + 1;
        }
    }
    cout << i << endl;
}