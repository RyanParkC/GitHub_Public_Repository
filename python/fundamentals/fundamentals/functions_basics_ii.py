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


