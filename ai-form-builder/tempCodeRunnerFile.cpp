#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define f(i, s, e) for (long long int i = s; i < e; i++)

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    ll n;
    cin >> n;
    string s=to_string(n);
    ll len=s.length();
    f(i,0,len){
        if(s[i]>='5'){
            s[i]='9'-(s[i]-'0');
        }
    }
    cout<<s;
}
