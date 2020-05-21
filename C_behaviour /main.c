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

    for(int i =0; i<5; i++){
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




int main(void) {
    // printf("q1 returns: %d \n", q1());
    // printf("q2 returns: %d \n", *q2());
    q3();
    return 0;
}
