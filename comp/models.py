class CompModel:
    def __init__(self):
        pass

    def sum_of_digits(self, number):
        return sum(int(digit) for digit in str(number))

    def is_palindrome(self, number):
        str_number = str(number)
        return str_number == str_number[::-1]