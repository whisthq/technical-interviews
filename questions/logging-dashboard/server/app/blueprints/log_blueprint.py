from app import *
from app.helpers.log_helper import *
from app.constants.logs import *

log_bp = Blueprint("log_bp", __name__)


@log_bp.route("/logs", methods=["GET"])
@fractalPreProcess
def logs_get(**kwargs):
    starting_index = max(0, int(request.args.get("start")))
    ending_index = min(int(request.args.get("end")), len(logs))

    if starting_index >= ending_index or starting_index >= len(logs):
        starting_index = 0
        ending_index = len(logs)

    return jsonify({"logs": logs[starting_index:ending_index]}), 200
