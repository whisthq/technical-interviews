#include <sys/time.h>
#include <stdlib.h>
#include <stdio.h>
#include <assert.h>

#include "hash_table.h"

// This code is designed to stress test your hash table implementation. You do
// not need to significantly change it, but you may want to vary the value of
// num_tests to control the amount of time and memory that benchmarking takes
// up. Compile and run it in the command line by typing:
// make benchmark; ./benchmark

int main(void) {
  hashtable* ht = NULL;
  int num_tests = 10000000;
  // Intentionally allocating a small table so that it needs to be expanded
  allocate(&ht, 10) == 0; 

  int seed = 42;
  srand(seed);
  printf("Performing stress test. Inserting 10 million keys.\n");

  struct timeval stop, start;
  gettimeofday(&start, NULL);

  for (int i = 0; i < num_tests; i += 1) {
    int key = rand();
    int val = rand();
    put(ht, key, val);
    // printf("%d\n", i);
  }

  gettimeofday(&stop, NULL);
  double secs = (double)(stop.tv_usec - start.tv_usec) / 1000000 + (double)(stop.tv_sec - start.tv_sec); 
  printf("10 million insertions took %f seconds\n", secs);

  assert(deallocate(ht) == 0);

  return 0;
}
