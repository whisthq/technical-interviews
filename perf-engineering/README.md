## Overview

In this coding challenge, you will be performance engineering a simple search function to find the minimum element in a series of intervals within a static, unsorted array. Please fully read this document in its entirety before starting the challenge. 

The premise of the problem is very simple. You have a static array of `n` elements. In this question, `n` is set to be 1 million, but that should not matter much. You are going to be doing `q` querying, here `q` is set to 10,000. For each querying, you need to find the minimum value within a randomly generated interval. For instance, querying #1 could be between elements [29, 14123], while querying #2 could be between elements [24332, 100000].

You are provided the simple solution, which is to simply iterate over the array at every query. This will take `O(n)` time to iterate over the array each time. Your task is to improve upon that solution.

## Getting Started

Git clone this repository, and `cd` into the perf-engineering folder. 

NOTE: You do not need to compile this code to complete the assignment. If you want to anyway, then read the following:

If you are running a Unix distribution (MacOS or Linux), you can compile the code by typing `make main` or `make all`. If you are running Windows, we recommend you install Windows Subsystem for Linux (WSL) to compile the code. You are free to modify the code to make it compile on Windows if you would like to, but that may require some time to create your own makefile/use Visual Studio and adapt the `#include`.

## Technical Details

You have 120 minutes to work on this. It is a very open ended problem designed to test your knowledge about the inner workings of low level languages. You are free to try to implement any optimizations you can think of, but generally there are a few categories of optimizations: algorithm optimizations, parallelization, and other optimizations. We understand that sometimes attempted optimizations do not yield any results, so we would also like you to write a brief document describing what optimizations you have tried, would have tried given more time, or anything else you believe is important to how you thought about the problem or what you've tried. Different optimizations will take different amounts of time to implement, so be mindful on what you choose to attempt in terms of difficulty of implementation and estimated returns.

You will be scored by how much of an improvement you make over the baseline algorithm. Pure time is not taken into consideration (given different computers will run at different speeds) and percent improvement is probably the better factor to look at for improvment in speeds on your local machine.

### Files

##### main.c

This is the main file with the function `min_for_range()` and general testing/benchmarking in `main`. Feel free to add any data structures, global variables, etc., but please initialize them in the timed designated global variable time in `main`. Pretty much nothing is off limits in terms of implementation, but try to comment and detail the choices you make.

##### Makefile

This is a GNU Makefile. You should not need to edit this. To compile and run a test you can run `make main; ./main` in your command line. If you're using Windows, you can use WSL. Otherwise, don't worry about compiling it.  Feel free to modify the makefile with any compiler flags you may want in your implementation.

### Evaluation

As this is a very open-ended problem, we would love to see how you approach it and what you try. You will not be scored purely on how fast your code runs, but also what you try and how much information you include. You will be evaluated not only on how fast you can make the program run, but also what you write about and what you tried or would try given more time. Please add a description of what you did in `DETAILS.md`.

## Once You're Finished

Please DO NOT push to master; instead, branch your code changes and notes into a new branch via ```git branch [BRANCH NAME]``` and ```git checkout [BRANCH NAME]```, and submit your branch via ```git push origin [BRANCH NAME]```.

Have fun - we look forward to seeing your work!
