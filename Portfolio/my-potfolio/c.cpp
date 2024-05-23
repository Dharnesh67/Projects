#include<bits/stdc++.h>
using namespace std;
void printbinary(int num){
    for (int i = 10; i >=0; i--)
    {
        cout<<((num>>i)&1);
    }
    cout<<"\n";
}
int main(){
   cout<<(3434>>1);
   cout<<char('m'& '_');
}