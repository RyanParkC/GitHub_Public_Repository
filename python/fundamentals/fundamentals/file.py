#single line comment

"""
    multiline
    comment
"""

num1 = 42 #variable declaration, integer
num2 = 2.3 #variable delcaration, float
boolean = True #variable declaration, boolean
string = 'Hello World' #variable declaration, string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #variable declaration, list (array)
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #variable declaration, dictionary (object)
fruit = ('blueberry', 'strawberry', 'banana') #variable declaration, tuple (ordered sequence)
print(type(fruit)) #prints a tuple value from variable fruit
print(pizza_toppings[1]) #prints item name at index 1 of pizza toppings array which is 'Sausage'
pizza_toppings.append('Mushrooms') #Appends (adds) 'Mushrooms' to the pizza_toppings list
print(person['name']) #prints dictionary value of 'name' which is 'John'
person['name'] = 'George' #replaces value for variable 'name' from 'John' to 'George'
person['eye_color'] = 'blue' #adds dictionary item 'eye_color' to dictionary list with value 'blue'
print(fruit[2]) #prints item name at index 2 of tuple list fruit which is 'banana'

if num1 > 45: 
    print("It's greater") 
else:
    print("It's lower")
"""
conditional (if, else), function
"""

if len(string) < 5: 
    print("It's a short word!")
elif len(string) > 15: 
    print("It's a long word!")
else:
    print("Just right!")
"""
conditional (if, else if, else), length check
"""

for x in range(5):
    print(x) #prints 0, 1, 2, 3, 4
for x in range(2,5):
    print(x) #2, 3, 4
for x in range(2,10,3):
    print(x) #2, 5, 8
x = 0
while(x < 5):
    print(x)
    x += 1 #increment added +1
"""
for loop, while loop 
"""

pizza_toppings.pop() #pops (removes) 'Mushrooms' from list
pizza_toppings.pop(1) #pops (removes) index 1 item 'Sausage' from list

print(person) #prints {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False, 'eye_color':'blue'}
person.pop('eye_color') #pops (removes) 'eye_color: blue' from person list
print(person) #prints {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue #loops back to start of for loop and continues with 'Sausage'
    print('After 1st if statement')
    if topping == 'Olives':
        break #breaks (stops) loop

"""
conditional, for loop, continue, break
"""

def print_hello_ten_times():
    for num in range(10): #num = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9; num = num + 1
        print('Hello') #prints hello

print_hello_ten_times() #prints hello ten times

"""
defined function, for loop
"""

def print_hello_x_times(x): #parameter x is inserted into defined function print_hello_x_times
    for num in range(x): #for loop initiated within range of given argument
        print('Hello') #prints hello

print_hello_x_times(4)

"""
defined function, for loop, parameter x
"""

def print_hello_x_or_ten_times(x = 10): #parameter x = 10
    for num in range(x): #for loop initiataed within range of 10
        print('Hello') #prints hello

print_hello_x_or_ten_times() #prints hello ten times
print_hello_x_or_ten_times(4) #prints hello forty times

"""
defined function, for loop, parameter x
"""


"""
Bonus section
"""

# print(num3)
# num3 = 72
"""
    Name Error: name <variable name> is not defined
"""
# fruit[0] = 'cranberry'
"""
    TypeError: 'tuple' object does not support item assignment
"""
# print(person['favorite_team'])
"""
    KeyError: 'favorite_team'
"""
# print(pizza_toppings[7])
"""
    IndexError: list index out of range
"""
#   print(boolean)
"""
    IndentationError: unexpected indent
"""
# fruit.append('raspberry')
"""
    AttributeError: 'tuple object has no attribute 'append'
"""
# fruit.pop(1)
"""
    AttributeError: 'tuple' object has no attribute 'pop'
    Tuples: change value, add value, delete value
"""