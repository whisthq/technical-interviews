# Solutions

The correct list of the (known) bugs are:

`main.c`:

1) Line 81 should be `char target_ip[recv_size];`, so that line 84 doesn't buffer overflow. For bonus points, make line 83 use `strncpy` instead of `strcpy`.

2) Lines 94, 111, 183, 198, and 199, all use `-1` as the de-facto invalid ip/port number. But the `struct pair` defined in include/linkedlist.h uses unsigned for the IP, that won't work. Note that the port is already signed, but that it should remain signed if we continue to use `-1` to mark invalid.

3) On Line 202, `&tmp` is pushed into the linked list. But, that would mean that all elements of the linked list point to the same local variable, they'll be writing and reading from the same overlapping struct pair and thus overwrite each other. It should be malloc'ed before being inserted into the linked list (`free`'d as well for bonus points).

4) On Line 117, it should be "else if", not "if". A note that Line 117 and Line 111 seem to be different even though both sections to do the same thing, should be sufficient.

5) On Lines 96, and 113, `n--;` should accompany the gll_remove. This is noticed by looking at some calls to `gll_remove` and `gll_push_end`, and seeing that `n` is adjusted so that we can keep track of the size of the linked list. The same should be done there. An even better way to update the code, for bonus points, would be to replace `n` with `pairs_list->size`, where size changing is already handled within the linked list functions.

`linkedlist.c`:

1) Line 36 should be `pos >= list->size` because the linked list is 0-indexed.