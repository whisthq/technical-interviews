# HANDLE-WAV Challenge:

Overview


In this coding challenge, you will be providing an API for storing, tracking down, and manipulating .wav files.  THis challenge is relatively open-ended,
and tests both your ability to interface with unfamiliar APIs as well as your knowledge of events up and down the tech stack.

In particular, what is expected at the end of the challenge is a set of API endpoints, that run on localhost, which handle storing, retrieving, and searching through wav files.  You may find python's wav library helpful.

Unit tests are optional, integration tests are optional but recommended. 


Getting Started


Git clone this repository, and cd into the handle-wav folder.  We recommend you use flask as your web framework.

Technical Details


You have 90 minutes to work on this, and there are two potential milestones (the second will be explained after you finish the first). It is a very open ended problem, but here are some suggested routes and semantics to work with (not required, just suggested). 

Additionally, this is a system design/API design question as much as it is a code one -- talk to us while you're building!

Not that some equivalent of /post and /download are required, as is some variant of /list.  

POST reqs:
/post -- takes no parameters, accepts 1 file.  Nonwav files or improperly formatted wav files will return an error message.


GET reqs:  
/list -- lists all filenames with metadata fitting the specified args.

/info -- lists metadata about all filenames with metadata fitting specified args.

/download -- downloads *the first* file that fits the metadata query

Once You're Finished
Please DO NOT push to master; instead, branch your code changes and notes into a new branch via git branch [BRANCH NAME] and git checkout [BRANCH NAME], and submit your branch via git push origin [BRANCH NAME].

Have fun--we look forward to seeing your work!



