# Solutions

### General Strategies

Here's a sample architecture for what a solution to this problem looks like:

Have a baseline object which maintains an internal list of tasks/mapping from IDs to tasks, and a separate mapping from
IDs to results.

When a task is added, spin up a thread to run/handle it. Then test if that thread is blocking or polling by checking if
the run method is still alive after a few milliseconds. If it's blocking, leave it alone. If it's polling, spin up a
second thread to poll its output method with exponential backoff. When the output is ready, save the output to the
second mapping.