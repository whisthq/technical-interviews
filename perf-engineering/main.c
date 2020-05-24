#include <stdio.h>
#include <time.h> 
#include <stdlib.h>
#include <float.h>

#define MIN(X, Y) (((X) < (Y)) ? (X) : (Y))
#define MAX(X, Y) (((X) > (Y)) ? (X) : (Y))

// note: to run with macros: `MACRO_VARS='-DREF=0 -DTRIES=3' make; ./main`

// Run the reference or not
#ifndef REF
#define REF 1
#endif

// Number of times to grade (takes min time)
#ifndef TRIES
#define TRIES 1
#endif

// For the purpose of this question and easy parallelization 
// we are going to just store these as global variables
int* arr;
int* results;
int* expected_results;
int* queries;

// Return the minimum in in the [start, end) range
// Feel free to change the function headers or add other helper functions
int min_for_range(){
    // TODO: Fill out your implementation here
    return 0;
}

// Please do not change this unless you are entirely sure your implementation is correct
int min_for_range_reference(int start_range, int end_range){
    int min = arr[start_range];
    for (int i=start_range; i<end_range; i++){
        min = MIN(arr[i], min);
    }
    return min;
}

void evaluate(int count, int query_count){
    for (int i=0; i<query_count; i++) {
        results[i] = min_for_range_reference(queries[i*2], queries[i*2+1]);
    }
}

int main(){
    printf("Running tests...\n");
    // use this to fix your seed
    // srand(12491024);
    
    int n = 1000000;
    int q = 10000;
    arr = malloc(sizeof(int) * n);
    results = malloc(sizeof(int) * n);
    expected_results = malloc(sizeof(int) * n);
    queries= malloc(sizeof(int) * q * 2);
    for (int i=0; i<n; i++) {
        arr[i] = rand() % (n * 100);
        int q1 = rand() % n;
        int q2 = rand() % n;
        queries[i*2] = MIN(q1, q2);
        queries[i*2+1] = MAX(q1, q2);
    }

    struct timespec start, end;
    clock_gettime(CLOCK_REALTIME, &start);
    #if REF
    for (int i=0; i<q; i++)
        expected_results[i] = min_for_range_reference(queries[i*2], queries[i*2+1]);
    #endif // REF
    clock_gettime(CLOCK_REALTIME, &end);
    double reference_time = (end.tv_sec - start.tv_sec) +(end.tv_nsec - start.tv_nsec) / 1000000000.0;

    printf("Reference time: %f s\n", reference_time);

    // Please time your global variable initialization
    clock_gettime(CLOCK_REALTIME, &start);
    // START: Global Variable Initialization

    // END: Global Variable Initialization
    clock_gettime(CLOCK_REALTIME, &end);
    double global_time = (end.tv_sec - start.tv_sec) +(end.tv_nsec - start.tv_nsec) / 1000000000.0;

   
    double min_time = DBL_MAX;
    for (int tries=TRIES; tries>0; tries--){
        clock_gettime(CLOCK_REALTIME, &start);
        evaluate(n, q);
        clock_gettime(CLOCK_REALTIME, &end);
        double time = (end.tv_sec - start.tv_sec) +(end.tv_nsec - start.tv_nsec) / 1000000000.0;
        if (time + global_time < min_time)
            min_time = time + global_time;
    } 
    printf("Finished in: %f s\n", min_time);
    printf("Approx percent speedup: %f \n", ((reference_time - min_time) / reference_time) * 100);
    printf("Checking Correctness...\n");
    
    int count = 0;
    for (int i=0; i<n; i++){
        if (results[i] != expected_results[i]){
            printf("Failed index: %d, %d != %d\n", i, results[i], expected_results[i]);
            count++;
        }
    }

    if (count>0)
        printf("Failed %d out of %d\n", count, q);
    else
        printf("PASS Correctness\n");
}
