#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define f(i, s, e) for (long long int i = s; i < e; i++)

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int x, y, z;
    cin>>x>>y>>z;
    int arr[3]={x,y,z};
    sort(arr,arr+3);
    cout<<abs(abs(arr[1]-arr[0])+abs(arr[2]-arr[1]));
}
