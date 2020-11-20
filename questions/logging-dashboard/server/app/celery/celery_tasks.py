from app import *


@celery_instance.task(bind=True)
def exampleCeleryFunction(self, arg1):
    """
    Note: Not required! Celery is pretty buggy when run on localhost.
    
    To call this function, simply import this file and then do
    
    task = exampleCeleryFunction.apply_async([self, arg1])
    
    To query the execution status of this function, first extract the task ID by doing
    
    task_id = task.id
    
    And then passing the task ID into the following GET request:
    
    [THIS SERVER URL]/status/<task_id>
    """

    return "Hello world!"
