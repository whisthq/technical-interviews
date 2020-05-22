#include "hash_table.h"

unsigned int hash(keyType x);

// A basic hash function, no need to modify or implement your own.
unsigned int hash(keyType x) {
    x = ((x >> 16) ^ x) * 0x45d9f3b;
    x = ((x >> 16) ^ x) * 0x45d9f3b;
    x = (x >> 16) ^ x;
    return x;
}

// Initialize the components of a hashtable.
// The size parameter is the expected number of elements to be inserted.
int allocate(hashtable** ht, int size) {
    (void)ht;
    (void)size;
    return 0;
}

// This method inserts a key-value pair into the hash table.
int put(hashtable* ht, keyType key, valType value) {
    (void)ht;
    (void)key;
    (void)value;
    return 0;
}

// This method retrieves entries with a matching key and stores the
// corresponding values in the values array. The size of the values array is
// given by the parameter num_values. If there are more matching entries than
// num_values, they are not stored in the values array to avoid a buffer
// overflow. The function returns the number of matching entries using the
// num_results pointer. If the value of num_results is greater than num_values,
// the caller can invoke this function again (with a larger buffer) to get
// values that it missed during the first call.
int get(hashtable* ht, keyType key, valType* values, int num_values,
        int* num_results) {
    (void)ht;
    (void)key;
    (void)values;
    (void)num_values;
    (void)num_results;
    return 0;
}

// This method erases all key-value pairs with a given key from the hash table.
int erase(hashtable* ht, keyType key) {
    (void)ht;
    (void)key;
    return 0;
}

// This method frees all memory occupied by the hash table.
int deallocate(hashtable* ht) {
    (void)ht;
    return 0;
}
