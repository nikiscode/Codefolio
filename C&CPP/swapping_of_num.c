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
/*swaping elements using call by reference*/
#include <stdio.h>
void swap(int *a,int *b){
int temp=*a;
*a=*b;
*b=temp;
}
int main(){
int x,y;
printf("enter first number:");
scanf("%d",&x);

printf("enter first number:");
scanf("%d",&y);

printf("before swapping:x=%d, y=%d\n",x,y);
    

printf("after swapping:x=%d, y=%d\n",x,y);

return 0;


}



