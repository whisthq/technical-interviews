## Overview

In this coding challenge, you will be debugging some networking C code. You don't need to understand what the networking code does or how it works in order to solve these problems. You will likely be quite unfamiliar with this code; the goal here is to see how you navigate code that you haven't seen before using API calls that you might not know, but still find bugs and make comments about how to improve the code. Any of the `.c` or `.h` files are up-for-grabs.

## Getting Started

Git clone this repository.

If you are running a Unix distribution (MacOS or Linux), you can compile the code by typing ```make```. If you are running Windows, we recommend you install Windows Subsystem for Linux (WSL) to compile the code. Note that you do not need to compile the code in order to complete this assignment, and you won't be able to see the code working as you don't have the servers and clients that are supposed to connect to it.

## Technical Details

You have 90 minutes to complete this assignment. The code in this folder has 6 known bugs in it. We define a bug as an undesired behavior that occurs when running the program and using it in production. Unreachable code for example is a style consideration, but not a bug, since you can't detect it using exclusively the executable - feel free to comment on any style considerations. Start by opening up the code, and your [Google Doc](google.com), and splitscreen the two. As you learn about how the codebase works, learn new things, and hopefully find bugs, write down your thoughts timestamped in the notepad. Just a sentence or two every few minutes, and definitely write about bugs as you find them (and potential fixes, if you can), or potential problems you see in the codebase. You're free to Google as much as you want. The Google Doc should essentially be a braindump of what you're thinking at any point in time.

## How You Will Be Assessed

You will be assessed on the quality and accuracy of your comments, and on the engineering style you demonstrate through them. Accuracy is determined in terms of logical accuracy, as opposed to factual accuracy. If you deduce something quite reasonable and logical, then you get points regardless of whether or not it's factually true (All that matters is - Could it be true?). It's unlikely to do any harm if you write a comment that doesn't appear accurate, so write down as much as you think.

## Once You're Finished

Please DO NOT push to master; instead, branch your code changes and notes into a new branch via ```git branch [BRANCH NAME]``` and ```git checkout [BRANCH NAME]```, and submit your branch via ```git push origin [BRANCH NAME]```.

You can push bugs that you find, but you don't have to. You can leave all of your notes in the google doc if you so wish. If you have extra time, feel free to branch off and actually push your changes.

## Solutions

The correct list of the (known) bugs are:

1) Line 89 should be "char target_ip[recv_size];", so that Line 91 doesn't buffer overflow.

2) Lines 101, 118, 190, 205, and 206, all use "-1" as the de-facto invalid ip/port number. But the "struct pair" defined in include/linkedlist.h uses unsigned for the IP, that won't work.

3) On Line 209, &tmp is pushed into the linked list. But, that would mean that all elements of the linked list point to the same local variable, they'll be writing and reading from the same overlapping struct pair and thus overwrite each other. It should be malloc'ed before being inserted into the linked list (/free'd as well for bonus points).

4) On Line 124, it should be "else if", not "if". A note that Line 124 and Line 106 seem to be different even though both sections to do the same thing, should be sufficient.

5) On Lines 103, and 120, "n--;" should accompany the gll_remove. This is noticed by looking at some calls to gll_remove and gll_push_end, and seeing that "n" is adjusted so that we can keep track of the size of the linked list. The same should be done there. An even better way to update the code, for bonus points, would be to replace "n" with "pairs_list->size", and potentially handle changing the size within linkedlist.c
