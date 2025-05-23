//string of an array
#include <stdio.h>
int main() {
   int n, temp;
   printf("Enter number of elements: ");
    scanf("%d", &n);
    int arr[n];
    int *ptr = arr;
    printf("Enter %d elements:\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", (ptr + i));
    }
    for(int i = 0; i < n - 1; i++) {
        for(int j = i + 1; j < n; j++) {
            if (*(ptr + i) > *(ptr + j)) {
                temp = *(ptr + i);
                *(ptr + i) = *(ptr + j);
                *(ptr + j) = temp;
            }
        }
    }
    printf("Sorted array in ascending order:\n");
    for(int i = 0; i < n; i++) {
        printf("%d ", *(ptr + i));
    }
     return 0;
}

