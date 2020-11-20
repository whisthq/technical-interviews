# Solutions

The correct list of the (known) bugs are:

1) Line 89 should be "char target_ip[recv_size];", so that Line 91 doesn't buffer overflow.

2) Lines 101, 118, 190, 205, and 206, all use "-1" as the de-facto invalid ip/port number. But the "struct pair" defined in include/linkedlist.h uses unsigned for the IP, that won't work.

3) On Line 209, &tmp is pushed into the linked list. But, that would mean that all elements of the linked list point to the same local variable, they'll be writing and reading from the same overlapping struct pair and thus overwrite each other. It should be malloc'ed before being inserted into the linked list (/free'd as well for bonus points).

4) On Line 124, it should be "else if", not "if". A note that Line 124 and Line 106 seem to be different even though both sections to do the same thing, should be sufficient.

5) On Lines 103, and 120, "n--;" should accompany the gll_remove. This is noticed by looking at some calls to gll_remove and gll_push_end, and seeing that "n" is adjusted so that we can keep track of the size of the linked list. The same should be done there. An even better way to update the code, for bonus points, would be to replace "n" with "pairs_list->size", and potentially handle changing the size within linkedlist.c
