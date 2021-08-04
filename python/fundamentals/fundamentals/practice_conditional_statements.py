# Conditional Statements Practice

#!---- if, elif, else----#
x = 27
if x > 50: #false
    print("bigger than 50") #false so continues to else statement
else:
    print ("smaller than 50") #true so prints this
#prints "smaller than 50" since x = 27 is not greater than 50

x = 77
if x > 10: #true
    print("bigger than 10") #true so will print this and won't proceed to elif statement
elif x > 50:
    print("bigger than 50")
elif x > 70:
    print("bigger than 70")
else:
    print("smaller than 10")
#prints "bigger than 10" from 1st if statement because true

x = 77
if x > 100: #false
    print("bigger than 100") #false so proceeds to elif statement
elif x > 70: #true
    print("bigger than 70") #true so prints this and won't proceed to else statement
else:
    print("smaller than 70")
#prints "bigger than 70"

x = 25
if x < 20: #false
    print("smaller than 20") #false so nothing is printed
#prints NOTHING because statement is false

#!-----Loops------#

# For Loops with Range (up to 3 arguments)
# Range with 1 argument -- Starts from 0, EXCLUDES 1st index value (4)
for x in range(4): #ranges from 0 (default) to 4 (end value excluded)
    print(x) #prints 0,1,2,3

# Range with 2 arguments -- INCLUDES 1st index value, EXCLUDES 2nd index value
for x in range(5,8): #ranges from 5 to 8 from [5,6,7,8]
    print(x) #prints 5,6,7

# Range with 3 arguments -- INCLUDES 1st value, EXCLUDES 2nd, Interates (increments by) 3rd
for x in range (5,10,2): #ranges from 5 (inclusive value 5) to 10 (exclusive value 10) and increases by increments of 2
    print(x) #prints 5,7,9 -- includes 5, excludes 10, increments by +2

for x in range (5,10,3): #includes 5, excludes 10, increments by +3
    print(x) #prints 5,8 -- increments by +3

for x in range (5,1,-3): #includes 5, excludes 1, increments by -3
    print(x) #prints 5,2


# For Loops through Strings -- accesses each value of a string individually
for x in "Hello":
    print(x) #prints H, e, l, l, o

# For Loops through Lists
my_list = ["abc", 123, "xyz"]
for i in range(0, len(my_list)): #range (0,3) -- length of list = 3 -- include index 0 (abc), exclude index 3
    print(i, my_list[i]) #prints 0 abc, 1 123, 2 xyz -- printing 'i' sets 0,1,2 alongside list 'abc, 123, xyz'
    # i = temporary variable used to store an integer (i) value (e.g. above i = 0,1,2)

for v in my_list: #v = variable
    print(v) #prints abc, 123, xyz -- prints all variables from my_list

# For Loops through Tuples
dog = ("My", "dog", "is", 12)
for data in dog:
    print(data) #prints My dog is 12

# For Loops through Dictionaries
my_dict = {"name":"Noelle", "language":"Python"}
for k in my_dict: #k = keys
    print(k) #prints name language (keys)

my_dict = {"name":"Noelle", "language":"Python"}
for k in my_dict: #k = keys
    print(my_dict[k]) #prints key values --- must always mention tuple name then [k] to list all key values

# Another way to access keys/values from Dictionaries
capitals = {"WA":"Olympia", "CA":"Sacramento", "ID":"Boise"}
for key in capitals.keys(): #Method #2 -- calling on keys
    print(key) #prints WA, CA, ID
for k in capitals: #Method #1 -- calling on keys
    print(k) #prints, WA, CA, ID

for val in capitals.values(): #Method #2 -- calling on values
    print(val) #prints Olympia, Sacramento, Boise
for k in capitals: #Method #1 -- calling on values
    print(capitals[k]) #prints Olympia, Sacramento, Boise

for key, val in capitals.items():
    print(key,"=",val) #prints WA = Olympia, CA = Sacramento, ID = Boise
for key, val in capitals.items():
    print(key,":",val) #prints WA : Olympia, CA : Sacramento, ID : Boise


# While Loops -- keeps running as long as condition is true

for count in range(0,3): #ranges from 0 (inclusive) to 3 (exclusive) -- so 0,1,2
    print("looping =", count) #prints looping = 0, looping = 1, looping = 2

#above can be rewritten as while loop below
count = 0 #count starts at 0
while count <= 2: #instead of defining a range(a,b), put condition that count <= 2
    print("looping -", count) #prints looping - 0, looping - 1, looping - 2
    count += 1 #increasing count by increment of +1 (count = count + 1)
#or again
count = 0 #count starts at 0
while count < 3:
    print("looping -->", count) #prints looping --> 0, looping --> 1, looping --> 2
    count += 1 #increment of +1

# ELSE statement in a Loop
y = 3
while y > 0: #true while y = 3,2,1
    print(y) #prints 3,2,1
    y = y - 1 #increments by -1
else:
    print("Final else statement") #printed when condition y > 0 is false

y = 5
while y > 3: #true while y = 5,4
    print ("Wow so many") #prints when y = 5 and y = 4, so printed twice in a row
    y = y - 1
else:
    print ("Wow so little") #printed when condition y > 3 is false (at y = 3)


# Breaking a Loop
for val in "string": #val = values
    if val == "i": #condtion set as if val == letter "i" in "string"
        break #breaks(stops) loop function
    print(val) #prints s, t, r --- stops (breaks) at condition val == "i"

for val in "abcdefghi":
    if val == "e":
        break #breaks(stops) at condition val == "e"
    print(val) #prints a,b,c,d

y = 3
while y > 0:
    print(y)
    y = y - 1
    if y == 0:
        break #prints 3,2,1 then breaks (stops) when condition y == 0 is true
else:
    print("Final else statement") #does NOT print since condition is never met

# Continuing a Loop
for val in "string":
    if val == "i": #excludes condition value
        continue #contiinues after condition is met and condition value is excluded
    print(val) #prints s,t,r,n,g -- excludes i
