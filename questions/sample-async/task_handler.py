from faketasks import gen_task, FakeTask, FakeTaskPolling, FakeTaskBlocking
from threading import Thread
from time import sleep, time


def is_task_polling(task: FakeTask):
    pass


def blocking_handler(task: FakeTask, task_id, result_dict):
    pass


def polling_handler(task: FakeTask, task_id, result_dict):
    pass


class TaskHandler():
    """
    our task handling object
    """

    def __init__(self):
        pass

    def register_task(self, task: FakeTask):
        """
        adds a task to the object, returning an id that can be used to track task status
        """
        return 0

    def get_task_status(self, task_id: int) -> bool:
        """
        given a task ID, returns whether that task is still running
        """
        return True

    def get_task_result(self, task_id: int) -> int:
        """
        given a task ID, return the result of that task if it exists
        """
        return 0


if __name__ == "__main__":
    """
    Some sample code to test your solution
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
