#include <stdio.h>
struct book{
char title[50];
char author[50];
float price;
};
int main(){
     struct book b1;
     printf("enter the title:\n");
    scanf("%s",b1.title);
    printf("enter the author:\n");
    scanf("%s",b1.author);
     printf("enter the price:\n");
    scanf("%f",b1.price);
    printf("title: %s\n",b1.title);
    printf("author: %s\n",b1.author);
    printf("price: %f\n",b1.price);

return 0;
}

