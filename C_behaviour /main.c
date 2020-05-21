#include <stdlib.h>
#include <stdio.h>



int q1(void){

    int x = 2;

    for(int i=0; i<5; i++){
        x = x * x;
        printf("x is %d\n", x );
    }

    return x; 
}


int* q2(void){
    int x = 5;
    x = x * 2 + 3;

    return &x;
}

int* q3(void){
    int* x = malloc(sizeof(int) * 4);

    for(size_t i =0; i<5; i++){
        int *p = x + i;
        *p = i; 
    }


    return x;
}


int q4(void){
    int* x = malloc(sizeof(int));
    int* y = malloc(sizeof(int));

    *x = 7;
    *y = 4;

    return x>y ? 1 : 0;
}

int q5(void){
    static int x;
    x = x + 10;

    return x;
}


int q6(void){
    printf("Size of int: %ld\n", sizeof(int));
    printf("Size of int pointer: %ld\n", sizeof(int*));

    return 0;
}


typedef struct my_struct {
  int a;
  int* b;
} my_struct;


int q7(void){
    printf("size of my struct: %ld\n", sizeof(my_struct));
    return 0;

}


int main(void) {
    // printf("q1 returns: %d \n", q1());
    // printf("q2 returns: %d \n", *q2());
    printf("q4 returns: %d \n", q4());
    printf("q5 first run returns: %d \n", q5());
    printf("q5 second run returns: %d \n", q5());\
    q6();
    q7();
    return 0;
}
