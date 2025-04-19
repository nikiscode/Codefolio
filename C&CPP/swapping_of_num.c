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
/*swapping of numbers in type */
#include<stdio.h>
typedef int integer;
int main() {
    integer s;
    integer d;
    integer x;
    printf("enter the num1:");
    scanf("%d",&s);
    printf("enter the num2:");
    scanf("%d",&d);
        x=s;
        s=d;
        d=x;
        printf("%d %d",s,d);
        return 0;

}


