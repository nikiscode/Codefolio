#include <stdio.h>
int main(){
    int n,s,r;
    printf("Enter the first number:");
    scanf("%d",&n);
    printf("Enter the second number:");
    sacnf("%d",&s);
    r=n;
    n=s;
    s=r;
    printf("%d %d",n,s);
    return 0;
}

