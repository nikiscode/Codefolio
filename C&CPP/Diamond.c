 
//Diamond
#include <stdio.h>
int main() {
    int i, j, space, rows;

    printf("Enter the number of rows for the diamond (half): ");
    scanf("%d", &rows);

    space = rows - 1;

    // Upper half of the diamond
    for(i = 1; i <= rows; i++) {
        for(j = 1; j <= space; j++)
            printf(" ");
        for(j = 1; j <= (2 * i - 1); j++)
            printf("*");
        printf("\n");
        space--;
    }

    space = 1;

    // Lower half of the diamond
    for(i = 1; i <= rows - 1; i++) {
        for(j = 1; j <= space; j++)
            printf(" ");
        for(j = 1; j <= (2 * (rows - i) - 1); j++)
            printf("*");
        printf("\n");
        space++;
    }

    return 0;
}

