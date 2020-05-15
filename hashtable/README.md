## Overview

In this coding challenge, you will be implementing a resizeable hashtable in C. Please fully read this document in its entirety before starting the challenge. The later milestones will depend on the code you write in the first milestone and certain design decisions may make your life harder later, make sure to think about the future, in the present.

## Getting Started

Git clone this repository, and ```cd``` into the hashtable folder. 

If you are running a Unix distribution (MacOS or Linux), you can compile the code by typing ```make```. If you are running Windows, we recommend you install Windows Subsystem for Linux (WSL) to compile the code. You are free to modify the code to make it compile on Windows if you would like to, but that may require some time to create your own makefile/use Visual Studio and adapt the `#include`.

## Technical Details

You have 120 minutes to complete this assignment. This challenge has three milestones. The first is to implement a basic hash table. It is basic in the sense that it does not need to adaptively resize to the number of elements in the hashtable. The second is to extend this implementation to support resizing using a simple method. Please commit at minimum at the end of each milestone with a clear commit message such as "Milestone #X Complete". You are encouraged to commit more often, but do not have to. Write your solutions as if it would be the final code that would occur in a production setting. Proper organization, proper comments and explanations, etc. 

To keep things a little simpler, both the keys and the values of the hashtable are standard C99 `int`. 

### Files
##### hash_table.h

This header file defines the api that you are going to implement. You will probably need to modify this a small amount.

##### hash_table.c

This is where you will implement the API defined in `hash_table.h`. Most of your work will probably be done in this file. We have provided empty functions in this file for you to start with. You are welcome to write additional functions as you need them. 

##### main.c

This file is where you can write your own tests.

##### test.c

This file runs a series of tests to verify that your implementation works correctly. 

##### benchmark.c

This file benchmarks your implementation. You should not make significant changes to this file, but you may want to vary the value of `num_tests` to control the amount of time and memory that benchmarking takes up. 

##### Makefile

This is a GNU Makefile. You should not need to edit this. To compile everything you can run `make` in your command line. If you decide to tackle this challenge on Windows, you will need to make your own Makefile. We suggest following the same format this one, and compiling with `nmake` (assuming you have Visual Studio Desktop Development SDK).

### Milestone 1

In this milestone you will implement a static hashtable. It is static in the sense that you know ahead of time the expected number of elements to be inserted in the hashtable and can therefore allocate an appropriately sized hashtable for good performance. For reference, the optimal size of a hashtable is 30% larger than the number of keys that intend to be placed in that hashtable.

### Milestone 2

In this milestone you will modify your code from milestone 1 so that the hashtable is dynamically resized as it fills up. The hash table should be made larger as more elements are inserted. You do not need to decrease the size of the hashtable if elements are removed. You are allowed to use external resources to figure out a good policy for when to resize. Please provide links to any resources you use. The resizing should be automatic; the user should not need to call a function to resize the hashtable. Your solution must run in O(1) time amortized, and that is the only requirement for the algorithm itself. 

### Milestone 3

Will be discussed after the coding portion.

## How You Will Be Assessed

For milestone 1 we are looking for clean readable code that passes the tests. We want to see your ability to write proficiently in C. For milestone 2 we also want to see clean code. If you are feeling rushed we would rather you spend more time clearly communicating your design than trying to get your code to work.  


## Once You're Finished

Please DO NOT push to master; instead, branch your code changes and notes into a new branch via ```git branch [BRANCH NAME]``` and ```git checkout [BRANCH NAME]```, and submit your branch via ```git push origin [BRANCH NAME]```.

Have fun--we look forward to seeing your work!
