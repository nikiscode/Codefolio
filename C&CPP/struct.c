/*book title, author , price */
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

/*dmart itms */
#include <stdio.h>
struct item{
char names[5];
int quantity[5];
float cost;
};
int main(){
     struct items i1;
     printf("enter the name:\n");
    scanf("%s",i1.name);
     printf("enter the quantity:\n");
    scanf("%d",i1.quantity);
    printf("enter the cost:\n");
    scanf("%f",i1.cost);
    printf("name: %s\n",i1.name);
    printf(" quantity: %s\n",i1. quantity);
    printf("cost: %f\n",i1.cost);
return 0;
}
