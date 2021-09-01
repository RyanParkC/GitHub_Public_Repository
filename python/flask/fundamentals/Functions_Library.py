#Basics

#!----------Functions-------------------------#

def function_name(parameter1,parameter2,etc):

#Calling a function straight up
def say_hi(name):
    print("Hi, " + name)
say_hi('Michael')
say_hi('Anna')
say_hi('Eli')

#Returning a function
def say_hi(name):
    return "Hi" + name
greeting = say_hi("Michael") #argument input "Michael"
print(greeting) #Hi Michael

def add(a,b): #fxn name: add, parameters: a,b
    x = a + b #process
    return x #return value x
new_val = add(3,5) #calling function add with arguments 3,5
print(new_val) #8

def add(a,b):
    x = a + b
    return x
sum1 = add(4,6)
sum2 = add(1,4)
sum3 = sum1 + sum2
print(sum1) #10
print(sum2) #5
print(sum3) #15

#Setting Default Parameter Values
def be_cheerful(name='', repeat=2):
    print(f"good morning {name}\n" * repeat)
be_cheerful() #good morning (repeated on 2 lines)
be_cheerful("tim") #good morning tim (repeated on 2 lines)
be_cheerful(name="john") #good morning john (repeated on 2 lines)
be_cheerful(repeat=6) #good morning (repeated 6x)
be_cheerful(name="michael",repeat=5) #good morning michael (x5)
be_cheerful(repeat=3, name="kb") #good morning kb (x3)

def function_name(parameter1,parameter2,etc):

#following codes should all be indented once to the right

#option 1 - Conditional statements
x = 100
if x > 10: #true
    print("bigger than 10") #prints this only. does not proceed to elif statement
elif x > 50:
    print("bigger than 50")
else:
    print("smaller than 10")

#option 2a - Loops with  Range
for x in range(0,10,2): #incl 0, excl 10, incr +2
    print(x) #0,2,4,6,8
    
for x in range(5,1,-3): #incl 5, excl 1, incr -3
    print(x) #5,-2

#option 2b - For Loops through Strings
for x in "Hello": #var x in string "Hello"
    print(x) #h, e, l, l, o
    
#option 2c - For Loops through Lists
my_list = ["abc", 123, "xyz"]
for i in range(0, len(my_list)):
    print(i, my_list[i])
        #0 abc
        #1 123
        #2 xyz
for v in my_list:
    print(v) #abc, 123, xyz

#option 2d - For Loops through Tuples
dog = ("Sheepdog", "Shiba", "Samoyed", 15, "a")
for data in dog:
    print(data) #Sheepdog, Shiba, Samoyed, 15, a
    print(dog[1]) #Shiba

#option 2e - For Loops through Dictionaries
my_dict = {"name": "Noelle", "language": "Python"}
for k in my_dict:
    print(k) #name, language -- k = key
    print(my_dict[k]) #Noelle, Python -- values -- basically indexing k (key)

capitals = {"WA":"Olympia","CA":"Sacramento","ID":"Boise"}
for key in capitals.keys():
    print(key) #WA, CA, ID
for val in capitals.values():
    print(val) #Olympia, Sacramento, Boise
for key,val in capitals.items():
    print(key, "=", val) #WA = Olympia, CA = Sacramento, ID = Boise

#option 3 - While Loops
for count in range (0,5):
    print("looping =", count) #looping = 0,1,2,3,4
#can be rewritten as
count = 0
while count <= 5:
    print("looping -", count) #looping = 0,1,2,3,4
    count += 1
#can add ELSE statement in a While Loop
y = 3
while y > 0: #true for y = 3,2,1
    print(y) #prints --> 3,2,1
    y = y - 1 #incr by -1
else:
    print("Final else statement") #when y = 0, print this statement

#option 4a - Loop Control - Breaking a Loop (For or While Loops)
for val in "string":
    if val == "i":
        break #exits loop, resumes at first post-loop statement
    print(val) #s, t, r

#option 4b - Loop Control - Continuing a Loop (For or While Loop)
for val in "string":
    if val == "i":
        continue #skips specific iteration(s), but continues looping to the end
    print(val) #s, t, r, n, g


#!-----------Composite Data Types-------------------------------#

#Tuples ()- immutable list - mixed data allowed
dog = ("Bruce", "cocker spaniel", 19)
print(dog[0]) #Bruce
    #TypeError - cannot modify item straight up
    dog[0] = "Wayne" #TypeError 
    #Adding to Tuples
    dog = dog + ("domestic",) #adds "domestic" to tuple
    #Slicing(replacing) Tuples
    dog = dog[:3] + ("man's best friend",) + dog[4:] #from index 3 backward, index 4 forward, so in-between index 3 & 4
    print(dog) #('Bruce', 'cocker spaniel', 19, "man's best friend", "domestic")


#Lists [] - mutable - usu for collections of related data
empty_list = []
ninjas = ['Naruto', 'Sasuke', 'Kakashi']
print(ninjas[2]) #Kakashi
    #Adding(append)
    ninjas.append('Boruto') #adds Michael to end of list
    print(ninjas) #Naruto, Sasuke, Kakashi, Boruto
    #Removing(pop)
    ninjas.pop()
    print(ninjas) #Naruto, Sasuke, Kakashi
    ninjas.pop(1)
    print(ninjas) #Naruto, Kakashi
    #Replacing via index
    ninjas[1] = 'Sakura'
    print(ninjas) #Naruto, Sakura
    ninjas[0] = 'Sasuke'
    print(ninjas) #Sasuke, Sakura

    #Selecting specfic groups
    x = [99,4,2,5,-3]
    print(x[:]) #same as above
    print(x[1:]) #from index 1 forward --> [4,2,5,-3]
    print(x[:4]) #from index 4 backward excluding index 4 --> [99,4,2,5]
    print(x[2:4]) #from index 2 forward til index 3 (index 4 excluded) --> [2,5]

    #combining Lists
    fruits = ['apples','bananas','oranges']
    vegetables = ['lettuce','cucumbers','carrots']
    fruits_and_vegetables = fruits + vegetables
    print(fruits_and_vegetables) #combines both lists
    salad = 3 * vegetables
    print(salad) #vegetables list x 3

#Dictionaries {} - key-value pairs - indexed by unique keys (k,key) to access values (v,val)
empty_dict = {}
new_person = {'name': 'John', 'age':38, 'weight':160.2, 'has_glasses': False}
    #Updating a key
    new_person['name'] = 'Jack' #updates key 'name' value to 'Jack'. IF key DNE, adds a key-value pair
    #Adding a new key-value pair
    new_person['hobbies'] = ['climbing','coding'] #adding new key-value pair
    print(new_person)
    #Removing a key-value pair
    new_person.pop('weight') #removes key-value pair for 'weight'
    print(new_person)
    #checking length
    print(len(new_person)) #4 -- # of key-value pairs
    print(len('climbing')) #8 string units

    #Creating Dictionaries - Method #1
    weekend = {"Sun": "Sunday", "Sat": "Saturday"}
        #Accessing values
        print(weekend["Sun"]) #Sunday
    #Creating Dictionaries - Method #2
    states = {}
    states["WA"] = "Washington"
    states["OR"] = "Oregon"
    states["CA"] = "California"
        #Accessing values
        print(states["WA"]) #Washington
        #Removing values - Method #1
        value_removed = states.pop("OR") #removes key "OR" and returns its value
        #Removing values - Method #2
        del states["OR"] #deletes key "OR" and not return anything
    #Nested (indented) Dictionaries
    context = {
        'questions': [
            {'id':1, 'content': 'Why is there this and not that?'},
            {'id':2, 'content': 'Why don\'t sheep shrink when it rains?'},
            {'id':3, 'content': "Why are we like this?"}
        ]
    }

#Extras --- Types -----#
print(type(24)) #int
print(type(3.9)) #float
print(type(3j)) #str
#change between data types by adding "int,str,float,etc" in front of (data)

print("Hello" + 42) #TypeError - CANNOT add str + num
print("Hello" + str(42)) #Hello 42

total = 35
user_val = "26"
total = total + user_val #TypeError - CANNOT add num + str
total = total + int(user_val) #61
total = str(total) + user_val #3526

#Strings
print("this is a string")
print('this is a string')

name = "Zen"
print("My name is", name)
print("My name is " + name)


#!----------String Interpolation------------------#

#F-strings - Literal String Interpolation
first_name = "Zen"
last_name = "Coder"
age = 27
print(f"My name is {first_name}{last_name} and I am {age} years old)

#string.format()
first_name = "Zen"
last_name = "Coder"
age = 27
print("My name is {}{} and I am {} years old.".format(first_name, last_name, age))
print("My name is {}{} and I am {} years old.".format(age, first_name, last_name))

# %-formatting
hw = "Hello %s" % "world" #subs in string (%s) with % "world"
py = "I love Python %d" % 3 #subs in digit (%d) with % 3
#Hello world I love Python 3

name = "Zen"
age = 27
print("My name is %s and I'm %d" % (name,age))
print("My name is %s and I'm %d" % ("Zen",27))
#My name is Zen and I'm 27
