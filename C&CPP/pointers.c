//pointers in c
#include <stdio.h>
int main() {
    int arr[8];
    int *ptr = arr;
    printf("Enter 8 elements:\n");
    for (int i = 0; i < 8; i++) {
        scanf("%d", ptr + i);
    }
    printf("Array elements are:\n");
    for (int i = 0; i < 8; i++) {
        printf("%d ", *(ptr + i));
    }
 
    return 0;
}

