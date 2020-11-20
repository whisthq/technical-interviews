# Solutions

### Milestone 1 - Implementation

This folder is a solution to our hashtable interview question. The hash table is implemented as an array of linked lists. One optimization I made was that each node of the linked list holds multiple values rather than 1. This is more cache efficient since the array in each node is contiguous in memory and therefore each cacheline we load while searching through the linked list holds multiple values to check rather than 1, so we do fewer random reads in memory. 

### Milestone 2 - Resizing 

In this solution the hashtable size is set to be 1.3 times the size of the expected number of values. Ideally we would pick the next prime. When the hashtable is at >0.8 capacity we resize the hash table by doubling the size. To do this we allocate a new array of linked lists and iterate over the old inserting values into the new one. This is the naive solution as we need to copy everything. 

### Milestone 3 Sketch - Dynamic Hashing

One approach is to use extendible hashing. With this technique we have a power of 2 number of bins. We have a mapping function which maps from hash values to to buckets, e.g an array of pointers. If we start by using the i last bits we have 2^i buckets and every hashed key ending in the same i bits points to the same bucket. When one of our buckets overflows we split it in two and begin using an additional bit by changing a pointer in the array to point to a new bucket. We then go key/value pair in the bucket and rehash it placing it either in the old bucket or the new bucket based on the additional bit. This approach incrementally expands the hash table one bucket at a time as required and therefore amortizes the cost over all insert operations. 

#### Example

![Dynamic hashing example](dynamic_hashing.png)

This figure is a simplified example. We start by only using the last two bits of the hash. Every hashed key with the same last two bits points to the same bucket. Bucket 1 overflows and we need to add a new bucket. To do so we split it and use an additional bit so 000 points to the same bucket and 100 now points to a new bucket. We then go through the items in the original bucket and hash them again putting them in either bucket 1 or into bucket 5 based on the last 5 bits. 
