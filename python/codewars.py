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

n = 1600
if (n%4 == 0 and n%100 != 0) or n%400 == 0:
    print('YES')
else:
    print('NO')


#Task: Drink about
def people_with_age_drink(age):
    if age < 14:
        return 'drink toddy'
    elif 13 < age < 18:
        return 'drink coke'
    elif 17 < age < 21:
        return 'drink beer'
    else:
        return 'drink whisky'
    

print(people_with_age_drink(13))

#Task: Quadratic equation
import math
def quadraticEducation (a, b, c):
    d = b**2 - 4*a*c
    print(d)
    if d > 0:
        return((-b - math.sqrt(d))/(2*a), (-b + math.sqrt(d))/(2*a))
    elif d == 0:
        return(-b/2*a)
    elif d < 0:
        return('Нет корней')


print(quadraticEducation(-5.64671390542564, 7.90460919676605, -2.10960556210672))
print(quadraticEducation(-7.10198466858238, 1.68832342688049, 9.61165416968306))

#Task: Subsequence of numbers
def subsequence (m, n):
    for i in range(m, n-1, -1):
        if i%2 !=0:
            print(i)


subsequence(77,62)


#Task: Sequence of number
def sequence (m, n):
    for i in range(m,n+1):
        if i%17 == 0:
            print(i)
        elif i%10 == 9:
            print(i)
        elif i%3 == 0 and i%5==0:
            print(i)


sequence(1, 20)


#Task: multiplication table
def multiplicationTable (n):
    for i in range (1, 11):
        print(n, 'x', i, '=', n*i)


multiplicationTable(5)