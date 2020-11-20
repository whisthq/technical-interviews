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

----------------

## Solutions

### General Strategies

Generally to improve the runtime of the program there are two main ways. One is to parallelize the program. Another is to create some sort of data structure that allows the lookup of the min for a certain range. I'll describe both ways in greater detail below.

### Algorithmic improvements

There is an `O(log(n))` solution to finding the min range after building a tree to represent the min of a range in `O(n)` time. Given that there are 10k queries, `O(n)` time once is completely justifiable and should take no time relative to the whole solution. To create a tree that allows you to get the min in `log(n)` time, you start with each integer in the array as a leaf, and build the binary tree upwards always taking the min of each child node. In the end, every node in the tree will represent the minimum of a range of the array. The root node is the minimum of the full array, and the children of the root node will represent the minimum of roughly half of the array. It will likely be extremely difficult to calculate which nodes to use to represent any query range unless it is padded to the nearest power of 2. With a binary tree such as described, any range can be calculated by taking the minimum of `log(n)` nodes in the tree. The implementation of this solution is in practice extremely complex and difficult. I don't imagine that many will be able to do so in the allotted time.

Rather doing a full binary tree, you can get the 80/20 of the implementation by precalculating the minimum for ranges in a structured way. For example, precalculating the minimum of ranges of 10, 100, 1000, 10000, 100000 likewise takes `O(n)` time, but makes it way easier to think in a structured way about calculating any range. For example, for the range of 29-12415, you'd simply take the min, of 29, 30-100(7 10s), 100-1000 (9 100s), 1000-12000 (12 1000s), 12000-12400 (4 100s), 12400-12410 (1 10s), 12410-12415 (5 1s). In 39 calculations, rather than 12,386 calculations, you find the min for the range. This is worse than the binary tree in theory, but will likely perform almost as well. I think that this sort of algorithmic solution is implementable and very reasonable for the allotted time.

One very small thing to look for is the usage of the `MIN` macro vs `if-set` statements. From the reference implementation switching `MIN` to an `if-set` statement has a ~20% speedup.

From testing I found that the 10s solution has ~99.5% speedup.  

### Parallelization

This problem can be pretty trivially parallelized. Simply spliting up the queries and having each processor compute some number of query requests.

From testing I found that simple parallelization has a somewhat linear speedup up to 8ish threads, ~90% speedup. The algorithmic optimization has a much bigger overall impact. Using both optimizations is ~99.8% speedup.

### Evaluation

In my opinion, the best solution to this problem is to not do the full binary tree and instead do the 80/20 implementation of ranges and do parallelization. I believe that the best candidates will figure out the optimal algorithm with the binary tree, but decide not to do it because of implementation difficulties within the time constraint. If they end up doing it and getting a working implementation then that's great.  Doing the 80/20 is pretty easily doable in the given time though. Justification in the choices made and an explaination of the optimal solution would be great as well. Understanding the problem and possible solutions and considering the tradeoffs with a time pressure is important.
