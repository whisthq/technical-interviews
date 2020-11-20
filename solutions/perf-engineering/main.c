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
#define arr_size 1000000
int* arr;
int* results;
int* expected_results;
int* queries;


typedef struct node_s
{
    int left_range;
    int right_range;
    int min;
    struct node_s* left;
    struct node_s* right;
} node;

node* root = NULL;

node* create_min_for_range( int start_range, int end_range )
{
    node* n = malloc( sizeof( node ) );
    n->left_range = start_range;
    n->right_range = end_range;
    if( start_range == end_range )
    {
        n->min = arr[start_range];
        n->left = NULL;
        n->right = NULL;
    } else
    {
        int mid = (end_range + start_range) / 2;
        n->left = create_min_for_range( start_range, mid );
        n->right = create_min_for_range( mid + 1, end_range );
        n->min = MIN( n->left->min, n->right->min );
    }
    return n;
}

void create_min( int start_range, int end_range )
{
    end_range--;
    root = create_min_for_range( start_range, end_range );
}

int query_min( node* n, int start_range, int end_range )
{
    if( start_range <= n->left_range && n->right_range <= end_range )
    {
        return n->min;
    }
    if( end_range < n->left_range )
    {
        return 1000000000;
    }
    if( n->right_range < start_range )
    {
        return 1000000000;
    }
    return MIN( query_min( n->left, start_range, end_range ), query_min( n->right, start_range, end_range ) );
}

// Return the minimum in in the [start, end) range
// Feel free to change the function headers or add other helper functions
// int sz = size of the array
int min_for_range( int start_range, int end_range )
{
    end_range--;

    if( !root )
    {
        create_min( 0, arr_size );
    }

    return query_min( root, start_range, end_range );
}

// Please do not change this unless you are entirely sure your implementation is correct
int min_for_range_reference( int start_range, int end_range )
{
    int min = arr[start_range];
    for( int i = start_range; i<end_range; i++ )
    {
        min = MIN( arr[i], min );
    }
    return min;
}

int main()
{
    printf( "Running tests...\n" );
    // use this to fix your seed
    // srand(12491024);

    int n = arr_size;
    int q = 10000;
    arr = malloc( sizeof( int ) * n );
    results = malloc( sizeof( int ) * q );
    expected_results = malloc( sizeof( int ) * q );
    queries = malloc( sizeof( int ) * q * 2 );
    for( int i = 0; i<n; i++ )
    {
        arr[i] = rand() % (n * 100);
    }
    for( int i = 0; i<q; i++ )
    {
        int q1 = rand() % n;
        int q2 = rand() % n;
        queries[i*2] = MIN( q1, q2 );
        queries[i*2+1] = MAX( q1, q2 ) + 1;
    }

    struct timespec start, end;
    clock_gettime( CLOCK_REALTIME, &start );
#if REF
    for( int i = 0; i<q; i++ )
        expected_results[i] = min_for_range_reference( queries[i*2], queries[i*2+1] );
#endif // REF
    clock_gettime( CLOCK_REALTIME, &end );
    double reference_time = (end.tv_sec - start.tv_sec) +(end.tv_nsec - start.tv_nsec) / 1000000000.0;

    printf( "Reference time: %f s\n", reference_time );

    // Please time your global variable initialization
    clock_gettime( CLOCK_REALTIME, &start );
    // START: Global Variable Initialization

    // END: Global Variable Initialization
    clock_gettime( CLOCK_REALTIME, &end );
    double global_time = (end.tv_sec - start.tv_sec) +(end.tv_nsec - start.tv_nsec) / 1000000000.0;


    double min_time = DBL_MAX;
    for( int tries = TRIES; tries>0; tries-- )
    {
        clock_gettime( CLOCK_REALTIME, &start );

        for( int i = 0; i<q; i++ )
            results[i] = min_for_range( queries[i*2], queries[i*2+1] );
        clock_gettime( CLOCK_REALTIME, &end );
        double time = (end.tv_sec - start.tv_sec) +(end.tv_nsec - start.tv_nsec) / 1000000000.0;
        if( time + global_time < min_time )
            min_time = time + global_time;
    }
    printf( "Finished in: %f s\n", min_time );
    printf( "Approx percent speedup: %f \n", ((reference_time - min_time) / reference_time) * 100 );
    printf( "Checking Correctness...\n" );

    int count = 0;
    for( int i = 0; i<q; i++ )
    {
        if( results[i] != expected_results[i] )
        {
            printf( "Failed index: %d, %d != %d\n", i, results[i], expected_results[i] );
            count++;
        }
    }

    if( count>0 )
        printf( "Failed %d out of %d\n", count, q );
    else
        printf( "PASS Correctness\n" );
}
