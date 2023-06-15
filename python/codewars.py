# Task: Even or Odd
def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"


print(even_or_odd(5))



# Task: Super Duper Easy
def problem(a):
    if(type(a) == str):
        return 'Error'
    else:
        return a * 50 + 6
    

print(problem(1))
print(problem('Hello'))
