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
    integer a;
    integer b;
    integer c;
    printf("enter the num1:");
    scanf("%d",&a);
    printf("enter the num2:");
    scanf("%d",&b);
        c=a;
        a=b;
        b=c;
        printf("%d %d",a,b);
        return 0;

}


