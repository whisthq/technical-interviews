from .imports import *
from .factory import *


def make_celery(app_name=__name__):
    broker = os.getenv("REDIS_URL")
    backend = os.getenv("REDIS_URL")
    return Celery(app_name, broker=broker, backend=backend)


def fractalPreProcess(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        received_from = (
            request.headers.getlist("X-Forwarded-For")[0]
            if request.headers.getlist("X-Forwarded-For")
            else request.remote_addr
        )

        try:
            body = json.loads(request.data) if request.method == "POST" else None
        except Exception as e:
            print(str(e))
            body = None

        kwargs["body"] = body
        kwargs["received_from"] = received_from

        return f(*args, **kwargs)

    return wrapper


celery_instance = make_celery()

app, jwtManager = create_app(celery=celery_instance)
app = init_app(app)

app.config["ROOT_DIRECTORY"] = os.path.dirname(os.path.abspath(__file__))

CORS(app)
