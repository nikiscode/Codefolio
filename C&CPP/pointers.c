#include <stdio.h>
int main() {
    int arr[2];
    int *ptr = arr;
    printf("Enter 2 elements:\n");
    for (int i = 0; i < 2; i++) {
        scanf("%d", ptr + i);
    }
    printf("Array elements are:\n");
    for (int i = 0; i < 2; i++) {
        printf("%d ", *(ptr + i));
    }
    return 0;
}

