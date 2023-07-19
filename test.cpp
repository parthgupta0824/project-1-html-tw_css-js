#include <bits/stdc++.h>
using namespace std;
int main(){
    long long n;cin>>n;
    long long ans = 0;
    for(int i=1;i<=n;i++) ans += (pow(i,2));
    cout<<ans<<endl;
    return 0;
}



