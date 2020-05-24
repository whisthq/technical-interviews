# specify compiler
CC = gcc

# specify bin name
BIN_NAME = main

# objects to build
OBJS = main.o

# Extra build flags
CXXFLAGS = -pthread

# warnings
WARNINGS = \
  -Wall \
  -Wextra \
  -Wshadow \
  -Wpointer-arith \
  -Wcast-align \
  -Wwrite-strings \
  -Wmissing-declarations \
  -Wredundant-decls \
  -Winline \
  -Wno-long-long \
  -Wuninitialized \
  -Wno-conversion

# C warnings
CWARNINGS := $(WARNINGS) \
  -Wnested-externs \
  -Wstrict-prototypes

# C flags
CFLAGS := -g -fPIC -std=c99 $(CWARNINGS)

# make all objects
all: clean $(OBJS)
	$(CC) $(CXXFLAGS) -o $(BIN_NAME) $(OBJS)

main: main.o
	$(CC) $(CXXFLAGS) -o main main.c $(OBJS)

# clean directory
clean:
	-rm -f main.o *.d

# clear
.PHONY: all clean

