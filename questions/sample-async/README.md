# Overview

In this coding challenge, you will be creating a Python library (and potentially API) for handling lists of blocking and polling tasks that could take a long amount of time to run, _without_ blocking the rest of the application. This is a simple version of how modern web systems do things like handling complicated computations on the backend while the frontend keeps running. For more information on this general concept, you might find looking into Promises, Asyncio, and Celery interesting -- though for this task, Python's inbuilt Threading module is definitely sufficient.

**Milestone 1**

- Handle launching and keeping track of any (reasonable, <100) number of tasks
- Be able to report the status of running and finished tasks

**Milestone 2 (Extra Credit)**

- Stand up a basic Flask API in front of your task manager

This challenge is relatively open-ended, and tests both system design and how you think about asynchronous execution.

## Getting Started

Git clone this repository, and `cd` into the `sample-async` folder. The `task_handler.py` contains some scaffolding you might want to get started with -- though feel free to build your own scaffolding if you prefer! We recommend that you use Flask as your web framework if you get to milestone 2, although you are free to use any framework you are most comfortable with. We also recommend that you use the Python inbuilt threading module for async execution, for simplicity.

In order to test your task manager, use `gen_task(val)` to create a fake task object, which has `run` and `get_output` methods. Note that these methods may be blocking and carry their own internal state.

For the purposes of this exercise, please treat the internals of the task classes as black boxes, and only access them by their public methods (`run` and `get_output`, as well as stuff like `IsInstance`) -- We know that for these tasks you could just output `2 * input` yourselves!

## Technical Details

You have 2 hours to work on this, and there are two potential milestones (the second is briefly outlined above and will be further explained after you finish the first). It is an open-ended problem, but here are some suggested first steps (not required, merely suggested):

- Look into the Python threading module! It's a great first step for async execution.
- Consider how to distinguish blocking and polling tasks, since you'll need to handle them differently.
- Think about how you can most effectively check into the status of your running tasks (how often should you be checking up on polling ones/blocking ones?). You may want `thread.is_alive`, if you're using threads.

## How You Will Be Assessed

The most important criteria we are looking for is a **production-grade** product that shows maturity in code design. If we were software engineers looking at your code for the first time, would we easily be able to read through it? Would we find it thoroughly tested and built in a scalable fashion? Of course, we don't expect perfection given the limited amount of time, but we are actively looking for signs of mature, thoughtful software engineering.

More specifically, you will be assessed on the following three categories:

1. **Quality of completion** Were all the features implemented, and were they implemented well/without bugs? Did you write tests?

2. **Code Design** How readable and organized is the code?

3. **Performance** What considerations were given to executing times and asymptotic runtimes?

## How To Submit

To submit, simply create your own branch and push to that branch. We expect you to complete this challenge within 2
hours, although we do understand that there can be unexepected delays in setting up so we will allow for some extra time
if needed. After submitting, we may set up a brief phone conversation to debrief on the challenge.

Have fun - we look forward to seeing your work!
