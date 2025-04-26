#include <stdio.h>
int main(){
int a,b,c;
printf("Enter the first num:");
scanf("%d",&a);
printf("Enter the second num:");
sacnf("%d",&b);
r=a;
n=b;
s=c;
printf("%d %d",a,b);
return 0;
}
/*swapping of numbers with typedef */
#include<stdio.h>
typedef int integer;
int main() {
    integer s;
    integer n;
    integer r;
    printf("enter the num1:");
    scanf("%d",&s);
    printf("enter the num2:");
    scanf("%d",&n);
    r=s;
    s=n;
    n=r;
    printf("%d %d",s,n);
    return 0;
}


