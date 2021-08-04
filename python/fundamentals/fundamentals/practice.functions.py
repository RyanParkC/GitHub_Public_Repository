# Functions Practice

#!----Syntax-----#
#def (.py) = function (.js)
def add(a,b): #function name: 'add', parameters: a and b
    x = a + b #process
    return x #return value: x -- this is what will be printed as output when fxn "add" is called

print(add(2,5))

#or set up like
def add(a,b): #parameters a, b
    x = a +b
    return x #return value x -- printed as output when fxn "add" is called

new_val = add(3,7)
print(new_val)

#!----Parameters and Arguments----#
def say_hi(name): #function name: "say_hi", parameter: "name"
    print("Hi, " + name)

#invoking the function 3 times, passing in one argument each time
say_hi('Michael') #Argument is what is inputted into the Parameter
say_hi('Anna') #prints "Hi, Anna"
say_hi('Eli')

#!----Returning Values----#
def say_hi(name):
    return "Hi " + name #output when fxn say_hi is called
#IF name = "Michael" -- return value = "Hi" + "Michael" = "Hi Michael"
greeting = say_hi("Michael") #returned value from say_hi function gets assigned to 'greeting' variable
print(greeting) #prints return value = "Hi Michael"
print(say_hi("Michael")) #same print result

# Addition Returns
def add(a,b): #function name: "add", parameters: a,b
    x = a + b #integer x
    return x #returns value integer x -- output when fxn "add" is called
sum1 = add(4,6) #arguments 4,6 inputted into parameters -- x = 4 + 6 = 10 -- x = 10
sum2 = add(1,4)
sum3 = sum1 + sum2

print(sum1) #prints return value x = 10 --> 10
print(sum2) #prints return value of x = 5 --> 5
print(sum3) #prints return value of x (from sum1) + x (from sum2) = 15 --> 15


#!----Default Parameters & Named Arguments----#
def be_cheerful(name ='', repeat = 2): #set defaults like so () when declaring parameters
    print(f"good morning {name}\n" * repeat) # \n -- indicates end of a line of text
be_cheerful() #prints: good morning (repeated on 2 lines)
be_cheerful("tim") #prints: good morning tim (repeated on 2 lines)
be_cheerful(name="john") #prints good morning john (repeated on 2 lines)
be_cheerful(repeat=6) #prints good morning (repeated on 6 lines)
be_cheerful(name="michael", repeat=5) #prints good morning michael (repeated on 5 lines)
# NOTE: argument order does NOT matter if we are explicit when sending in our arguments!
#explicit such as in our print(f"goodmorning {name}/n" * repeat) -- name first then * repeat order is made clear
be_cheerful(repeat=3, name="luke") #prints goodmorning luke (repeated on 3 lines)


#!----Debugging in Python----#
#use print statements to help identify where problem is
def multiply(num_list, num): #function name: "multiple", parameters: num_list, num
    for x in num_list:
        print(x) #output: 2, 4, 10, 16 (separate lines)
        x *= num #this means x = x * num
        print(x) #output: 10, 20, 50, 80 (separate lines)
        print(num_list) #output: [2,4,10,16]
    return num_list #output when fxn multiply() is called
a = [2,4,10,16]
b = multiply(a,5) #b = multiply([2,4,10,16], 5) --- num = 5
# for x in [2,4,10,16] -- x = x * 5
# num_list = a = [2,4,10,16]

print(b) #output: [2,4,10,16]

#we WANT print(b) to output: [10,20,50,80] so...
def multiply(num_list,num): #fxn name: multiply, parameters: num_list, num
    for x in range(len(num_list)): #range(length of num_list = 4) -- range(4)
        #range indexes: 0,1,2,3
        num_list[x] *= num #num_list[index#] = num_list[index#] * num
        #num_list[0] = 2, num = 5
        #num_list[0] * num --> 2 * 5 = 10
    return num_list

a = [2,4,10,16]
b = multiply(a,5) #num_list = a = [2,4,10,16], num = 5

print(b) # outputs: [10,20,50,80]