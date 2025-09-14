



//union function 
#include <stdio.h>
// Define a union
union Data {
    int i;
    float f;
    char str[20];
};
int main() {
    union Data data;
    // Store an integer
    data.i = 10;
    printf("data.i = %d\n", data.i);
    // Store a float (overwrites previous data)
    data.f = 220.5;
    printf("data.f = %.1f\n", data.f);
    // Store a string (overwrites previous data)
    snprintf(data.str, sizeof(data.str), "Hello");
    printf("data.str = %s\n", data.str);
    return 0;
}
