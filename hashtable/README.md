## Hashtable Overview
Please fully read this document before starting the challenge. The later milestones will depend on the code you write in the first milestone and certain design decisions may make your life harder later. 


This challenge has three milestones. The first is to implement a basic hash table. It is basic in the sense that it does not need to adaptively resize to the number of elements in the hashtable. The second is to extend this implementation to support resizing using a simple method. The third is to design and, time permitting, to implement a better dynamically sized hash table. Please commit at minimum at the end of each milestone with a clear commit message. You are encouraged to commit more often, but do not have to. 

To keep things a little simpler, both the keys and the values of the hashtable are ints. 

### Files
##### hash_table.h
This header file defines the api that you are going to implement. You will probably need to modify this a little bit 
##### hash_table.c
This is where you will implement the api defined in hash_table.h. Most of your work will probably be done in this file. We have provided empty functions in this file for you to start with. You are welcome to write additional functions as you need them. 
##### main.c
This file is where you can write your own tests.
##### test.c
This file runs a series of tests to verify that your implementation works correctly. 
##### benchmark.c
This file benchmarks your implementation. You should not make significant changes to this file, but you may want to vary the value of num_tests to control the amount of time and memory that benchmarking takes up. 
##### Makefile
This is a GNU Makefile. You should not need to edit this. To compile everything you can run make in your command line. 

### Milestone 1
In this milestone you will implement a static hashtable. It is static in the sense that you know ahead of time the expected number of elements to be inserted in the hashtable and can therefore allocate an appropriately sized hashtable for good performance. You may use external sources to figure out what an optimal size is. 

### Milestone 2
In this milestone you will modify your code from milestone 1 so that the hashtable is dynamically resized as it fills up. The hash table should be made larger as more elements are inserted. You do not need to decrease the size of the hashtable if elements are removed. You are allowed to use external resources to figure out a good policy for when to resize. Please provide links to any resources you use. The resizing should be automatic, the user should not need to call a function to resize the hashtable. Your solution for this milestone does not need to be optimal, a naive solution will suffice. 

### Milestone 3
In this milestone you will improve on your design from milestone 2. A naive solution from milestone 2 likely has a lot of extra data movement. Please sketch an improved design in a new markdown file, making sure to include your reasoning and any trade offs you have to make. We would like to see your thinking clearly communicated, but if you have time you are also welcome to implement your design. As a hint, think about the keys of your table. 
