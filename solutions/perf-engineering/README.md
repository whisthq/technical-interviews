# Solutions

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
