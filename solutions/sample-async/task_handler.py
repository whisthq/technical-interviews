from faketasks import gen_task, FakeTask, FakeTaskPolling, FakeTaskBlocking
from threading import Thread
from time import sleep, time


def is_task_polling(task: FakeTask):
    if isinstance(task, FakeTaskPolling):
        return True
    if isinstance(task, FakeTaskBlocking):
        return False
    raise Exception("task type unknown")


def blocking_handler(task: FakeTask, task_id, result_dict):
    task.run()
    result_dict[task_id] = task.get_output()


def polling_handler(task: FakeTask, task_id, result_dict):
    task.run()
    result = task.get_output()
    while result is None:
        sleep(1)
        result = task.get_output()
    result_dict[task_id] = task.get_output()


class TaskHandler():
    """
    our task handling object
    """

    def __init__(self):
        self.result_dict = dict()
        self.thread_dict = dict()
        self.id = 0

    def register_task(self, task: FakeTask):
        """
        adds a task to the object, returning an id that can be used to track task status
        """
        task_id = self.id
        self.id += 1
        if is_task_polling(task):
            task_func = lambda: polling_handler(task, task_id, self.result_dict)
        else:
            task_func = lambda: blocking_handler(task, task_id, self.result_dict)
        task_thread = Thread(target=task_func)
        self.result_dict[task_id] = None
        self.thread_dict[task_id] = task_thread
        task_thread.start()
        return task_id

    def get_task_status(self, task_id: int) -> bool:
        """
        given a task ID, returns whether that task is still running
        """
        return self.thread_dict[task_id].is_alive()

    def get_task_result(self, task_id: int) -> int:
        """
        given a task ID, return the result of that task if it exists
        """
        return self.result_dict[task_id]


if __name__ == "__main__":
    """
    Some sample tests
    """
    ntask = gen_task(2)
    task_handler = TaskHandler()
    id = task_handler.register_task(ntask)
    for _ in range(10):
        """
        Ensures that registration isn't blocking
        """
        print(time())
        ntask = gen_task(2)
        task_handler.register_task(ntask)
        print(time())
    # Ensures that get_task_status works
    while task_handler.get_task_status(id):
        sleep(1)
    print(task_handler.get_task_status(id))
    print(task_handler.get_task_result(id))
    print(task_handler.thread_dict, task_handler.result_dict)
