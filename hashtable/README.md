## Overview

In this coding challenge, you will be implementing a resizeable hashtable in C. Please fully read this document before starting the challenge. The later milestones will depend on the code you write in the first milestone and certain design decisions may make your life harder later. 

## Getting Started

Git clone this repository, and ```cd``` into the hashtable folder. 

If you are running a Unix distribution (MacOS or Linux), you can compile the code by typing ```make```. If you are running Windows, we recommend you install Windows Subsystem for Linux (WSL) to compile the code. You are free to modify the code to make it compile on Windows if you would like to, but that may require some time to create your own makefile/use Visual Studio and adapt the `#include`.

## Technical Details

You have 120 minutes to complete this assignment. This challenge has three milestones. The first is to implement a basic hash table. It is basic in the sense that it does not need to adaptively resize to the number of elements in the hashtable. The second is to extend this implementation to support resizing using a simple method. The third is to design and, time permitting, to implement a better dynamically sized hash table. Please commit at minimum at the end of each milestone with a clear commit message. You are encouraged to commit more often, but do not have to. 

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

In this milestone you will implement a static hashtable. It is static in the sense that you know ahead of time the expected number of elements to be inserted in the hashtable and can therefore allocate an appropriately sized hashtable for good performance. You may use external sources to figure out what an optimal size is. 

### Milestone 2
In this milestone you will modify your code from milestone 1 so that the hashtable is dynamically resized as it fills up. The hash table should be made larger as more elements are inserted. You do not need to decrease the size of the hashtable if elements are removed. You are allowed to use external resources to figure out a good policy for when to resize. Please provide links to any resources you use. The resizing should be automatic, the user should not need to call a function to resize the hashtable. Your solution for this milestone does not need to be optimal, a naive solution will suffice. 

### Milestone 3
In this milestone you will improve on your design from milestone 2. A naive solution from milestone 2 likely has a lot of extra data movement. Please sketch an improved design in a new markdown file, making sure to include your reasoning and any trade offs you have to make. We would like to see your thinking clearly communicated, but if you have time you are also welcome to implement your design. As a hint, think about the keys of your table. 






## How You Will Be Assessed




The timer is meant for us to understand context, you shouldn't be stressed by it, or feel that you need to find all the bugs within a specific timeframe.

You will be assessed on the quality and accuracy of your comments, and on the engineering style you demonstrate through them.








## Once You're Finished

Please DO NOT push to master; instead, branch your code changes and notes into a new branch via ```git branch [BRANCH NAME]``` and ```git checkout [BRANCH NAME]```, and submit your branch via ```git push origin [BRANCH NAME]```.

Have fun--we look forward to seeing your work!
