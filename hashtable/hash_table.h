#ifndef HASH_TABLE 
#define HASH_TABLE  

typedef struct hashtable {
// define the components of the hash table here 
} hashtable;

typedef int keyType;
typedef int valType;



int allocate(hashtable** ht, int size);
int put(hashtable* ht, keyType key, valType value);
int get(hashtable* ht, keyType key, valType *values, int num_values, int* num_results);
int erase(hashtable* ht, keyType key);
int deallocate(hashtable* ht);

#endif