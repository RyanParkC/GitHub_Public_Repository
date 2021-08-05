#Predict the output

#1
def number_of_food_groups(): #function name: number_of_food_groups
    return 5 #return value: 5 -- output when function (number_of_food_groups) is called
print(number_of_food_groups()) #print number_of_food_groups() --> 5
#prints --> 5


#2
def number_of_military_branches(): #fxn name: number_of_military_branches()
    return 5 #return value: 5 -- output when function is called
print(number_of_days_in_a_week_silicon_or_triangle_sides() + number_of_military_branches())
#print: number_of_days_in_a_week_silicon_or_triangle_sides() --> nothing printed bc not defined
#print: number_of_military_branches() --> 5


#3
def number_of_books_on_hold(): #fxn name
    return 5 #return value: 5 -- output when fxn is called
    return 10 #function does not proceed to this point
print(number_of_books_on_hold()) #prints return value --> 5
#prints --> 5


#4
def number_of_fingers(): #fxn name
    return 5 #return value: 5 -- printed when fxn is called
    print(10) #would print --> 10 -- straight up, but would not be stored into fxn output.
    #fxn stops at return 5 in this case so this print call does not happen.
print(number_of_fingers()) #prints return value of fxn called --> 5
#prints --> 5 


#5
def number_of_great_lakes(): #fxn name
    print(5) #prints --> 5 -- no return value so nothing is printed when fxn is called.
x = number_of_great_lakes() #fxn name is stored into variable x
print(x) #prints x stored value = number_of_great_lakes() --> no return value stored --> none
#prints --> 5
#prints --> none


#6
def add(b,c): #fxn name: add -- parameters: b,c
    print(b+c) #prints b + c -- when fxn add() is called from OUTSIDE fxn with inputted argument values for b,c
    #however, no return value is stored so if fxn is called OUTSIDE of fxn, then returns no value for OUTSIDE prints
print(add(1,2) + add(2,3)) #fxn is called from outside fxn, but fxn has no return value
#thus nothing is printed.
#however, WITHIN the fxn, the following happens:
    # add(1,2) prints (1+2) --> 3
    # add(2,3) prints (2+3) --> 5
#OUTSIDE fxn, when fxn is called --> nothing happens
#Actually, an error occurs (as below):
# TypeError: unsupported operand type(s) for +: 'NoneType' and 'NoneType'


#7
def concatenate(b,c): #fxn name: concatenate -- parameters b,c
    return str(b)+str(c) #return value when fxn is called from outside fxn
print(concatenate(2,5)) #argument 2,5 inputted into parameters --> str(2) + str(5) --> 25
#prints --> 25


#8
def number_of_oceans_or_fingers_or_continents(): #fxn name
    b = 100 #variable b = 100
    print(b) #prints variable b stored value 100 when fxn number_of_oceans... is called from OUTSIDE fxn
    if b < 10: #if statement condition --> false
        return 5 #false
    else: #true
        return 10 #true. prints --> 10 -- if fxn is called from outside
    return 7 #ignored. fxn does not reach this point
print(number_of_oceans_or_fingers_or_continents()) #prints return value of fxn --> 10
#prints --> 10


#9
def number_of_days_in_a_week_silicon_or_triangle_sides(b,c): #fxn name -- parameters b,c
    if b<c: #if statement condition -- if true, proceed to return
        return 7 #if true, print this return value when fxn is called
        #if false, proceed to else statement
    else: #if true, proceed to return
        return 14 #if true, print this return value when fxn is called
    return 3 #ignored. fxn does not reach this point
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3)) 
#argument (b,c) -- (2,3)
#if statement b<c -- 2<3 --> true
#return 7 is printed --> 7
print(number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
#argument (b,c) -- (5,3)
#if statement b<c -- 5<3 --> false. proceed to else statement
#else statement --> no conditions presented --> true
#return 14 is printed --> 14
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3) + number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
#both fxns have return values
#prints(7+14) --> 21


#10
def addition(b,c): #fxn name: addition -- parameters b,c
    return b+c #return value b+c -- printed when fxn is called
    return 10 #ignored. fxn does not reach this
print(addition(3,5)) #argument (3,5) inputted into addition(3,5) -- returns b+c (3+5) --> returns 8
#prints return value (b+c) --> 8


#11
b = 500 #variable b = 500
print(b) #prints variable b stored value --> 500
def foobar(): #fxn name: foobar()
    b = 300 #variable b (for inside fxn only) = 300
    print(b) #prints stored value b --> 300 when fxn foobar() is called from OUTSIDE fxn
print(b) #prints variable b --> 500 -- ignores fxn foobar()
foobar() #fxn foobar() is called so prints --> print(b) from within fxn --> 300
print(b) #prints variable b --> 500 -- ignores fxn foobar()
#prints --> 500, 500, 300, 500


#12
b = 500 #variable b = 500
print(b) #prints variable b stored value --> 500
def foobar(): #fxn name: foobar()
    b = 300 #variable b (for inside fxn only) = 300
    print(b) #prints stored value b --> 300 when fxn foobar() is called from OUTSIDE fxn
    return b #fxn does not reach this point. normally, would return value b (300) to be output when fxn is called
print(b) #prints b --> 500
foobar() #fxn foobar() is called so prints --> print(b) from within fxn --> 300
print(b) #prints b --> 500
#prints --> 500, 500, 300, 500


#13
b = 500 #variable b = 500
print(b) #prints variable b stored value --> 500
def foobar(): #fxn name: foobar()
    b = 300 #variable b (for inside fxn only) = 300
    print(b) #prints b (for inside fxn only) when fxn foobar() is called from OUTSIDE fxn
    return b 
print(b) #prints variable b (outside fxn) --> 500
b=foobar() #variable b (outside fxn) is updated to = foobar() = 300 (from print(b) within fxn)
print(b) #prints updated b value (outside fxn) --> 300


#14
def foo(): #fxn name: foo()
    print(1) #prints --> 1 when fxn foo() is called from OUTSIDE fxn
    bar() #prints 3 from fxn bar() called
    print(2) #prints --> 2
def bar(): #fxn name: bar()
    print(3) #prints --> 3 when fxn bar() is called from OUTSIDE fxn
foo()
#prints 1, 3, 2 when fxn foo() is called -- because only print statements in a row. if interrupted with a return, then stops with return


#15
def foo(): #fxn name: foo()
    print(1) #prints --> 1 when fxn foo() is called from outside fxn
    x = bar() #variable x = bar() within fxn
    print(x) #prints x = bar() --> 3
    return 10 #returns value 10 as output when fxn foo() is called from outside fxn
def bar(): #fxn name: bar()
    print(3) #prints 3 -- when fxn bar() is called from outside fxn
    return 5 #returns value 5 as output when fxn bar() is called from outside fxn
y = foo() #variable y = foo()
print(y) #prints variable y = foo() = 1, 3, 5, 10

#1st run-down:
"""
y = foo()
print(y) = print(foo())
def foo()
    print(1) --> 1
    x = bar() -- variable x given value to store
    print(x) = print(bar()) calls fxn bar()
        def bar()
            print(3) --> 3
            return value 5 also output since fxn bar() was called from outside --> 5
    return value 10 also output since foo() was called from outside --> 10
Print summary --> 1, 3, 5, 10
"""