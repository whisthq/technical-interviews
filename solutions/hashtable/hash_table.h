#ifndef HASH_TABLE 
#define HASH_TABLE  

#define KEYS_PER_NODE 4
typedef int keyType;
typedef int valType;

// the valid component is used to tell whether this node is storing anything, since our hashtable is an array
// of ll heads and the heads do not store values when initialized. 
typedef struct ll_node {
    keyType keys[KEYS_PER_NODE];
    valType vals[KEYS_PER_NODE];
    char valid[KEYS_PER_NODE];
    struct ll_node *next;
} ll_node;

typedef struct hashtable {
// define the components of the hash table here (e.g. the array, bookkeeping for number of elements, etc)
    ll_node *ht_array;
    int num_pairs;
    int size;
} hashtable;

int allocate(hashtable** ht, int size);
int put(hashtable* ht, keyType key, valType value);
int get(hashtable* ht, keyType key, valType *values, int num_values, int* num_results);
int erase(hashtable* ht, keyType key);
int deallocate(hashtable* ht);

#endif  // HASH_TABLE