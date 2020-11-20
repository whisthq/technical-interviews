#include "hash_table.h"
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// A basic hash function, no need to modify or implement your own. 
unsigned int hash(keyType x) {
    x = ((x >> 16) ^ x) * 0x45d9f3b;
    x = ((x >> 16) ^ x) * 0x45d9f3b;
    x = (x >> 16) ^ x;
    return x;
}

// Initialize the components of a hashtable.
// The size parameter is the expected number of elements to be inserted.
// This method returns an error code, 0 for success and -1 otherwise (e.g., if the parameter passed to the method is not null, if malloc fails, etc).
int allocate(hashtable** ht, int size) {
    *ht = (hashtable*) malloc(sizeof(hashtable));
    if (!ht) {
        return -1;
    }
    (*ht)->num_pairs = 0;
    (*ht)->size = 2; //round(1.3 * size); // Ideal solution is next prime. we want to keep the hash table at around 75% capacity
    (*ht)->ht_array = malloc(sizeof(ll_node) * (*ht)-> size);
    // malloc fail check the array of linked lists 
    if (!(*ht)->ht_array) {
        return -1;
    }

    // set all of the valid bytes to negaive 1 since these nodes do not yet store anything
    for (int i = 0; i < (*ht)->size; i++) {
        for (int j = 0; j < KEYS_PER_NODE; j++) {
            (*ht)->ht_array[i].valid[j] = -1;
        }
        (*ht)->ht_array[i].next = NULL;
    }    
    return 0;
}

// A helper function to insert a key/value pair into the array inside a node. 
// Returns -1 if the array is already full and the index otherwise. 
static int place_in_array(keyType *keys, valType *vals, char *valid, keyType key, valType value) {
    // Loop through array looking for first free slot, indicated by a -1 value for valid
    for (int i = 0; i < KEYS_PER_NODE; i++) {
        if (valid[i] < 0){
            valid[i] = 1;
            vals[i] = value;
            keys[i] = key;
            return i;
        }
    }
    return -1;
}

int expand(hashtable* ht, size_t new_size) {
    ll_node *new_array = malloc(sizeof(ll_node) * new_size);
    ll_node *old_array = ht->ht_array;
    ht->ht_array = new_array;
    int old_size = ht->size;
    ht->size = new_size;

    // init new array 
    for (int i = 0; i < new_size; i ++) {
        for (int j = 0; j < KEYS_PER_NODE; j++) {
            ht->ht_array[i].valid[j] = -1;
        }
        ht->ht_array[i].next = NULL;
    }    

    // iterate through old inserting into new.
    for (int i = 0; i < old_size; i++) {
        ll_node *curr_node = &old_array[i];
        int not_head = 0;
        while (curr_node) {
            for (int j = 0; j < KEYS_PER_NODE; j++) {
                if (curr_node->valid[j] == 1) {
                    if (put(ht, curr_node->keys[j], curr_node->vals[j]) < 0) {
                        return -1; 
                    }
                }
            }
            // Freeing linked list memory as we go
            if (not_head) {
                ll_node *next_node = curr_node->next;  
                free(curr_node);
                curr_node = next_node;
            } else {
                curr_node = curr_node->next;
                not_head = 1;
            }
        }
    }
    free(old_array);
    return 0;
}

// This method inserts a key-value pair into the hash table.
// It returns an error code, 0 for success and -1 otherwise (e.g., if malloc is called and fails).
int put(hashtable* ht, keyType key, valType value) {
    if (!ht) {
        return -1;
    }
    valType hash_key = hash(key);
    // mod the has value to fit into the table size 
    hash_key = hash_key % ht->size;
    ht->num_pairs += 1;
    ll_node *llist = &ht->ht_array[hash_key];

    // Iterate though llist nodes until we
    while (place_in_array(llist->keys, llist->vals, llist->valid, key, value) == -1) {
        if (llist-> next == NULL){
            ll_node *new_node = malloc(sizeof(ll_node));
            for (int j = 0; j < KEYS_PER_NODE; j++){
                new_node->valid[j] = -1;
            }
            llist->next = new_node; 
            new_node->next = NULL;
        }
        llist = llist->next;  
    }

    // If the hash table is at > 80% capacity we double the size
    if (ht->num_pairs >= nearbyint(ht->size * 0.80)) {
        printf("Calling expand\n");
        if (expand(ht, ht->size * 2) < 0) {
            return -1;
        }
    }
    return 0;
}

// This function finds values that match the key in a given array 
// keys, vals and valid are arrays stored in a linked list node. 
// returned results should be an array of size at least KEYS_PER_NODE 
// num_results is used to tell the caller how many results were found in this node. 
static int find_in_array(keyType *keys, valType *vals, char *valid, keyType key, valType *returned_results, int *num_results) {
    int local_num_results = 0;
    for (int i = 0; i < KEYS_PER_NODE; i ++) {
        if (valid[i] > 0 && keys[i] == key) {
            returned_results[local_num_results] = vals[i];
            local_num_results += 1;
        }
    }
    *num_results = local_num_results;
    return 0; 
}

// This method retrieves entries with a matching key and stores the corresponding values in the
// values array. The size of the values array is given by the parameter
// num_values. If there are more matching entries than num_values, they are not
// stored in the values array to avoid a buffer overflow. The function returns
// the number of matching entries using the num_results pointer. If the value of num_results is greater than
// num_values, the caller can invoke this function again (with a larger buffer)
// to get values that it missed during the first call. 
// This method returns an error code, 0 for success and -1 otherwise (e.g., if the hashtable is not allocated).
int get(hashtable* ht, keyType key, valType *values, int num_values, int *num_results) {
    if (!ht) {
        return -1;
    }

    int retrieved_values = 0;
    valType hash_key = hash(key) ;
    hash_key = hash_key % ht-> size;
    // printf("gets hash key %d \n", hash_key);    

    ll_node *llist = &ht->ht_array[hash_key];
    // iterate through the llist, if key matches increment num_results, if we still have space add value to val array
    while (llist) {
       valType vals_in_node[KEYS_PER_NODE];
       int num_node_results = 0;
       find_in_array(llist->keys, llist->vals, llist->valid, key, vals_in_node, &num_node_results);
       for (int i = 0; i < num_node_results; i++) {
            if (retrieved_values < num_values){
                // printf("a returned value should be %d\n", llist.val);
                values[retrieved_values] = vals_in_node[i];
                retrieved_values += 1;
            }
        }    
        llist = llist->next;      
    } 
    *num_results = retrieved_values;
    return 0;
}

// This function finds values that match the key in a given array 
// keys, vals and valid are arrays stored in a linked list node. 
// returned results should be an array of size at least KEYS_PER_NODE 
// num_results is used to tell the caller how many results were found in this node. 
static int erase_from_array(keyType *keys, char *valid, keyType key, int *num_erased) {
    int local_num_erased = 0;
    for (int i = 0; i < KEYS_PER_NODE; i ++) {
        if (valid[i] && keys[i] == key) {
            valid[i] = -1;
            local_num_erased += 1;
        }
    }
    *num_erased = local_num_erased;
    return 0; 
}

// This method erases all key-value pairs with a given key from the hash table.
// It returns an error code, 0 for success and -1 otherwise (e.g., if the hashtable is not allocated).
int erase(hashtable* ht, keyType key) {
    if (!ht){
        return -1;
    }

    valType hash_key = hash(key);
    hash_key = hash_key % ht-> size;
    // printf("erase hash key %d \n", hash_key);  
    ll_node *llist = &ht->ht_array[hash_key];

    while(llist != NULL){
        int loop_erase_counter = 0;
        erase_from_array(llist->keys, llist->valid, key, &loop_erase_counter);
        ht->num_pairs -= loop_erase_counter;
        llist = llist->next;
    }
    return 0;
}

// This method frees all memory occupied by the hash table.
// It returns an error code, 0 for success and -1 otherwise.
int deallocate(hashtable* ht) {
    if (ht == NULL){
        return -1;
    }
    // first we free each of the linked lists except for their heads which are a part of the array of lls 
    //  so the head below is really the second element of the linked list 
    for (int i = 0; i < ht->size; i ++) {
        ll_node* tmp;
        ll_node* head = ht->ht_array[i].next;
        while (head != NULL) {
            tmp = head;
            head = head->next;
            free(tmp);
        }
    }    

    free(ht->ht_array);
    free(ht);
    return 0;
}
