import time
from random import randrange, random


class FakeTask:
    def run(self):
        pass

    def get_output(self):
        pass


class FakeTaskBlocking(FakeTask):
    def __init__(self, input):
        self.input = input
        self.output = None
        self.time_wait = randrange(1, 10, 1)

    def run(self):
        time.sleep(self.time_wait)
        self.output = 2 * self.input
        return self.output

    def get_output(self):
        return self.output


class FakeTaskPolling(FakeTask):
    def __init__(self, input):
        self.input = input
        self.output = None
        self.time_start = None
        self.time_wait = randrange(1, 10, 1)

    def run(self):
        self.time_start = time.time()

    def get_output(self):
        if self.time_start is None:
            return None
        if time.time() - self.time_start > self.time_wait:
            self.output = 2 * self.input
        return self.output


def gen_task(input):
    if random() > 0.5:
        return FakeTaskBlocking(input)
    return FakeTaskPolling(input)
