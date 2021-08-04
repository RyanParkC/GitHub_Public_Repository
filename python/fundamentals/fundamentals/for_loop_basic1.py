#1. Basics - Print all integers from 0 to 150

# While Loop 0-150
count = 0
while count <= 150:
    print(count)
    count += 1

#For Loop 0-150
for count in range(0,151):
    print(count)

#2. Multiples of 5 - Print all the multiples of 5 from 5 to 1,000

# For Loop with 3 arguments
for x in range(5,1005,5):
    print(x)

# While Loop
count = 5
while count <= 1000:
    print(count)
    count += 5

#3. Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print 'Coding' instead. If divisible by 10, print 'Coding Dojo'
for i in range(1,101): #integer(i) in range including 1, excluding 101
    if i % 10 == 0: #if i divided by 10 gives remainder 0
        print("Coding Dojo")
    elif i % 5 == 0: #if i divided by 5 gives remainder 0
        print("Coding")
    else:
        print(i) #print integer

#4. Whoa. That Sucker's Huge - Add ODD integers from 0 to 500,000, and print the final sum.
n = 500000 #final range number
sum = 0 #sum of numbers
for i in range(1,n+1,2): #integer (i) in range 1 (odd) to 500000 increasing by +2 -- no need to include 0 
    sum += i #sum = sum + i -- current sum + integer(i)
print(sum) #prints 62500000000 as final sum of all ODD integers within specified range
    
#another way to write it
sum = 0 
for i in range (1,500001):
    if i % 2 != 0: #if i divided by 2 is NOT equal to 0, then condition is TRUE -- so true for ODD numbers
        sum += i #sum = sum + i -- i = ODD numbers only within specified range
print(sum) #prints 62500000000 as final sum of all ODD integers within specified range

#5. Countdown by Fours - Print positive numbers starting at 2018, counting down by 4s
for x in range (2018,-1,-4): #-1 from lower range in case 0 may be included in the countdown
    print(x) #prints all positive numbers from 2018 down to 0, counting down by 4s

#another way to write it -- slightly longer, but more clear
n = 0 #final number target
for x in range (2018,n-1,-4):
    print(x)

#6. Flexible Counter - Set 3 variables: lowNum, highNum, mult. Starting at lowNum and going through highNum,
#print only the integers that are multiples of mult.
lowNum = 5
highNum = 1000
mult = 5
for x in range (5,highNum+1,mult): #x in range 0 to 1000 inclusive by increments of mult (5)
    if x % mult == 0: #if remainder is 0 after dividing x by mult (5) condition is TRUE
        print(x) #prints numbers that satisfy condition as TRUE

#another way to write it
lowNum = 5
highNum = 1000
mult = 5
for x in range (5,highNum+1):
    if x % mult == 0:
        print(x)

#or another way
highNum = 1000
mult = 5
lowNum = mult
for x in range (lowNum,highNum+1,mult):
    print(x)

#different harder example
lowNum = 0
highNum = 1000
mult = 7
for x in range (0,highNum+1,mult):
    if x == 0:
        continue
    elif x % mult == 0:
        print(x)

#different even harder example
lowNum = 0
highNum = 2000
mult = 27
for x in range (lowNum, highNum+1, mult):
    if x % mult == 0:
        print(x)
