# col/col.py

from flask import Blueprint, jsonify, request

col_bp = Blueprint("col", __name__)

@col_bp.route("/myzip", methods=["GET"])
def myzip_api():
    # Example usage: /col/myzip?item1=a,b,c&item2=1,2,3
    item1 = request.args.get("item1", "").split(",")
    item2 = request.args.get("item2", "").split(",")

    # Implement your zip logic here
    zipped_result = list(zip(item1, item2))
    return jsonify({"result": zipped_result})
