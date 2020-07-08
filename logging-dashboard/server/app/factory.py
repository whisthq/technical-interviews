from .imports import *
from .celery_utils import init_celery

PKG_NAME = os.path.dirname(os.path.realpath(__file__)).split("/")[-1]


def create_app(app_name=PKG_NAME, **kwargs):
    template_dir = os.path.dirname(os.path.realpath(__file__))
    template_dir = os.path.join(template_dir, "templates")
    app = Flask(app_name, template_folder=template_dir)
    jwtManager = JWTManager(app)
    if kwargs.get("celery"):
        init_celery(kwargs.get("celery"), app)

    return (app, jwtManager)


def init_app(app):
    from .blueprints.log_blueprint import log_bp
    from .blueprints.celery_status_blueprint import celery_status_bp

    app.register_blueprint(log_bp)
    app.register_blueprint(celery_status_bp)

    return app
