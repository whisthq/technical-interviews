# Handle WAV

## Context

In this coding challenge, you will be creating a Python API for storing, tracking, and manipulating `.wav` files. Your overall task is to design an API and backing database to support the following user stories, centered around a service providing a public library of sound files:

**Milestone 1**
- A user saves a `.wav` file to the database for later retrieval.
- A user sees what `.wav` files are available.
- A user downloads a `.wav` file.

**Milestone 2**
- A user has a bad/spotty Internet connection, and downloads the `.wav` file in parts.

This challenge is relatively open-ended, and tests both your ability to interface with unfamiliar APIs as well as your knowledge of events up and down the backend tech stack. In particular, what is expected at the end of the challenge is a set of API endpoints that run on localhost, which handle storing, retrieving, and searching through `.wav` files. You may find Python's wav library helpful Unit tests are optional, and integration tests are optional but recommended, if you have time. 

## Getting Started

Git clone this repository, and cd into the handle-wav folder. We recommend you use Flask as your web framework, although you are free to use any framework you are most comfortable with. A sample `.wav` file has been provided for testing.

## Technical Details

You have 90 minutes to work on this, and there are two potential milestones (the second is briefly outlined above and will be further explained after you finish the first). It is an open-ended problem, but here are some suggested routes and semantics to work with (not required, just suggested). 

Additionally, this is a system design/API design question as much as it is a code one -- talk to us while you're building! Note that some equivalent of `/post` and `/download` are required, as is some variant of `/list`.  

**POST requirements**

/post -- takes no parameters, accepts one file. Non-wav files or improperly formatted `.wav` files will return an error message.

**GET requirements**

/list -- lists all filenames with metadata fitting the specified args.

/info -- lists metadata about all filenames with metadata fitting specified args.

/download -- downloads *the first* file that fits the metadata query

## How You Will Be Assessed

The most important criteria we are looking for is a **production-grade** product that shows maturity in code design. If I were a software engineer looking at your code base for the first time, would I easily be able to read through it? Would I find it thoroughly tested and built a in scalable fashion? Of course, we don't expect perfection given your limited amount of time, but we are actively looking for signs of mature, thoughtful software engineering.

More specifically, you will be assessed on the following three categories:

1. **Quality of completion** Were all the features implemented, and were they implemented well/without bugs? Did you write tests?

2. **Code Design** How readable and organized is the code?

3. **Performance** What considerations were given to executing times and asymptotic runtimes?

## How To Submit

To submit, simply create your own branch and push to that branch. We expect you to complete this challenge within 8 hours, although we do understand that there can be unexepected delays in setting up so we will allow for some extra time if needed. After submitting, we may set up a brief phone conversation, where we will discuss your design considerations and show you the actual, internal version of the dashboard that we use.

Have fun - we look forward to seeing your work!
