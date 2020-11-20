CC=gcc -std=c99
CFLAGS = -ggdb3 -W -Wall -Wextra -O0 -lm
LDFLAGS =
LIBS =

default: main test benchmark

%.o: %.c %.h
	$(CC) -c -o $@ $< $(CFLAGS)

main: hash_table.o main.o 
	$(CC) $(CFLAGS) -o $@ $^ $(LDFLAGS) $(LIBS)

test: hash_table.o test.o 
	$(CC) $(CFLAGS) -o $@ $^ $(LDFLAGS) $(LIBS)

benchmark: hash_table.o benchmark.o 
	$(CC) $(CFLAGS) -o $@ $^ $(LDFLAGS) $(LIBS)

clean:
	rm -f main test benchmark *.o
