#include <stdio.h>
#include <time.h> 
#include <stdlib.h>
#include <float.h>

#define MIN(X, Y) (((X) < (Y)) ? (X) : (Y))
#define MAX(X, Y) (((X) > (Y)) ? (X) : (Y))

// Return the minimum in in the [start, end) range
// Feel free to change the function headers or add other helper functions
int min_for_range(){
    // TODO: Fill out your implementation here
    return 0;
}

// Please do not change this unless you are entirely sure your implementation is correct
int min_for_range_reference(int* arr, int start_range, int end_range){
    int min = arr[start_range];
    for (int i=start_range; i<end_range; i++){
        min = MIN(arr[i], min);
    }
    return min;
}

void evaluate(int* arr, int* queries, int* results, int count, int query_count){
    for (int i=0; i<query_count; i++) {
        results[i] = min_for_range_reference(arr, queries[i*2], queries[i*2+1]);
    }
}

int main(){
    printf("Running tests...\n");
    // use this to fix your seed
    // srand(12491024);
    
    int n = 1000000;
    int q = 10000;
    int* arr = malloc(sizeof(int) * n);
    int* results = malloc(sizeof(int) * n);
    int* expected_results = malloc(sizeof(int) * n);
    int* queries= malloc(sizeof(int) * q * 2);
    for (int i=0; i<n; i++) {
        arr[i] = rand() % (n * 100);
        int q1 = rand() % n;
        int q2 = rand() % n;
        queries[i*2] = MIN(q1, q2);
        queries[i*2+1] = MAX(q1, q2);
    }

    clock_t start_ref = clock();
    for (int i=0; i<q; i++)
        expected_results[i] = min_for_range_reference(arr, queries[i*2], queries[i*2+1]);
    double reference_time = ((double)(clock() - start_ref))/CLOCKS_PER_SEC;
    printf("Reference time: %f s\n", reference_time);

    // Please time your global variable initialization
    start_ref = clock();
    // START: Global Variable Initialization

    // END: Global Variable Initialization
    double global_time = ((double)(clock() - start_ref))/CLOCKS_PER_SEC;
    
    double min_time = DBL_MAX;
    for (int tries=1; tries>0; tries--){
        clock_t start = clock();
        evaluate(arr, queries, results, n, q);
        clock_t time = clock() - start;
        if (((double)time/CLOCKS_PER_SEC) + global_time < min_time)
            min_time = ((double)time/CLOCKS_PER_SEC) + global_time; 
    } 
    printf("Finished in: %f s\n", min_time);
    printf("Approx percent speedup: %f \n", ((reference_time - min_time) / reference_time) * 100);
    printf("Checking Correctness...\n");
    
    int count = 0;
    for (int i=0; i<n; i++){
        if (results[i] != expected_results[i])
            count++;
    }

    if (count>0)
        printf("Failed %d out of %d\n", count, n);
    else
        printf("PASS Correctness\n");
}
