# Solutions

### Q1 

Implementation dependent sizes. 

### Q2 

Struct size with padding. 

### Q3

This will result in signed overflow. On Hamish's Linux computer with gcc this returns 0, but the compiler provides zero guarantees on what will happen. 

### Q4

This is returning a pointer to a stack variable; will almost certainly segfault if anyone tries to dereference the returned pointer. 

### Q5 

Basic pointer arithmetic, but we go too far and access unallocated memory. Might segfault, might not. 

### Q6 

Ternerary operator, but we are comparing address values, which is undefined behaviour unless they belong to the same array. 

### Q7

Static variable is 'remembered' across calls. First call will return 10, second 20, etc. 
