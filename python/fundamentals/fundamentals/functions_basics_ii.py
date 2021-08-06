#Functions Basics II Practice

#1. Countdown - Create a fxn that accepts a number(#) as an input. 
# Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element)
# e.g. countdown(5) should return [5,4,3,2,1,0]

#normal format for 5,4,3,2,1,0
for x in range (5,-1,-1):
    print(x)

#with function name
def countdown(x): #fxn name: countdown() -- parameters: x
    numbers = [] #variable numbers = blank array []
    for x in range(x,-1,-1): #for variable x in range -- includes x, excludes -1 (so to 0), increments by -1
        numbers.append(x) #array numbers adds by x 
    return numbers #returns value of variable numbers for next function call
print(countdown(5)) 
#argument x = 5
#for 5 in range (5, -1, -1)
#numbers.append(5) adds 5 to numbers array
#then increments x by -1 until reaches 0 so --> 5,4,3,2,1,0
#then returns variable numbers --> [5,4,3,2,1,0]

#more practice
def countdown(x):
    for x in range (x,-1,-1):
        if x > 0:
            print(x)
        else:
            print("Happy New Year!!")
countdown(5)

#2. Print and Return - 
#Create a function that will receive a list with two numbers. 
#Print the first value and return the second.
    #Example: print_and_return([1,2]) should print 1 and return 2

def print_and_return(list):
    print(list[0]) #prints index 0 value
    return list[1] #returns index 1 value
print(print_and_return([21,127]))


#3. First Plus Length - 
#Create a function that accepts a list and returns the 
#sum of the first value in the list plus the list's length.
    #Example: first_plus_length([1,2,3,4,5]) should return 6 (first value: 1 + length: 5)

def first_plus_length(list):
    print(list[0])
    return (list[0] + len(list))
print(first_plus_length([77,35,21]))

#4. Values Greater than Second - 
#Write a function that accepts a list and creates a new list 
#containing only the values from the original list that are 
#greater than its 2nd value. Print how many values this is and 
#then return the new list. If the list has less than 2 elements, 
#have the function return False
    #Example: values_greater_than_second([5,2,3,2,1,4]) should print 3 and return [5,3,4]
    #Example: values_greater_than_second([3]) should return False

def values_greater_than_second(list):
    if len(list)<2:
        return False
    new_list = [] # greaterThan = list[1]
    for val in list:
        if val>list[1]:
            new_list.append(val)
    print(len(new_list))    
    return new_list
print(values_greater_than_second([77,15,21,35,9,14,2,123]))
print(values_greater_than_second([77,15,21,35,9,14,2,123]))
print(values_greater_than_second([1]))
print(values_greater_than_second([]))

#5. This Length, That Value - 
#Write a function that accepts two integers as 
#parameters: size and value. The function should create and 
#return a list whose length is equal to the given size, and 
#whose values are all the given value.
    #Example: length_and_value(4,7) should return [7,7,7,7]
    #Example: length_and_value(6,2) should return [2,2,2,2,2,2]

def this_length_that_value(size,value):
    new_list = []
    for i in range(size):
        new_list.append(value)
    return new_list
print(this_length_that_value(2,7))