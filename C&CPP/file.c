//to_create_a_file_and_to_write_something in it
#include <stdio.h>
int main() {
FILE *fptr
fptr=fopen("C:\\Users\\91789\\Documents\\niki.txt" ,"w");
fprintf(fptr,"This is my first file creation in C ");
fclose(fptr);
return 0;
}

/*to read the file*/
#include <stdio.h>
int main() {
    FILE *fptr;
    fptr=fopen("C:\\Users\\91789\\Documents\\nikitha.txt" ,"r");
    fprintf(fptr,"very excited to this program");
    fprintf(fptr,"\nfirst program");
    char mystring[1000];
    fgets(mystring,1000,fptr);
    printf("%s",mystring);
    while(fgets(mystring,1000,fptr)){
        printf("%s",mystring);
    }
    fclose(fptr);
     return 0;
}

