# Solutions

### General Strategies

Here's a sample architecture for what a solution to this problem looks like:

Have a baseline object which maintains an internal list of tasks/mapping from IDs to tasks, and a separate mapping from
IDs to results.

When a task is added, spin up a thread to run/handle it. Then test if that thread is blocking or polling by checking
isInstance. If it's blocking, just run the function in the thread. If it's polling, run the task, and poll its output in
thread. When the output is ready, save the output to the second mapping.