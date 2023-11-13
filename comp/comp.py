from flask import Blueprint, jsonify

comp_bp = Blueprint("comp", __name__)

@comp_bp.route("/sum_of_digits/<int:number>", methods=["GET"])
def sum_of_digits(number):
    digit_sum = sum(int(digit) for digit in str(number))
    return jsonify({"result": digit_sum})

@comp_bp.route("/is_palindrome/<int:number>", methods=["GET"])
def is_palindrome(number):
    str_number = str(number)
    is_palindrome = str_number == str_number[::-1]
    return jsonify({"result": is_palindrome})
