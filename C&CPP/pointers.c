#include <stdio.h>
int main() {
    int arr[4];
    int *ptr = arr;
    printf("Enter 4 elements:\n");
    for (int i = 0; i < 4; i++) {
        scanf("%d", ptr + i);
    }
    printf("Array elements are:\n");
    for (int i = 0; i < 4; i++) {
        printf("%d ", *(ptr + i));
    }
    return 0;
}

