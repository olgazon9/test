from flask import Blueprint, jsonify

simp_bp = Blueprint("simp", __name__)

@simp_bp.route("/add/<int:num1>/<int:num2>", methods=["GET"])
def add_numbers(num1, num2):
    result = num1 + num2
    return jsonify({"result": result})

@simp_bp.route("/subtract/<int:num1>/<int:num2>", methods=["GET"])
def subtract_numbers(num1, num2):
    result = num1 - num2
    return jsonify({"result": result})
