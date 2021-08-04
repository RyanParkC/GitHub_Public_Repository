# 1. TASK: print "Hello World"
name = "Hello World"
print(name) #prints "Hello World"

# 2. print "Hello Noelle!" with the name in a variable
name = "Noelle"
print("Hello", name, "!")	# with a comma
print("Hello " + name + "!")	# with a +

# 2a. print "Hello {{your name]]!" using a comma in the print function.
# 2b. print "Hello {{your name]]!" using a + in the print function.
name = "Ryan"
print("Hello", name, "!") #prints "Hello Ryan !"
print("Hello " + name + "!") #prints "Hello Ryan!"

# 3. print "Hello 42!" with the number in a variable
number = 42
print("Hello", number, "!")	# with a comma
# print("Hello " + number + "!")	# with a +	-- this one should give us an error!

# NINJA BONUS -- Figure out how to resolve the error from above (#3) without changing the + sign to a comma
print("Hello " + str(number) + "!")	# with a +	-- this one should give us an error! FIXED by changing data type to string (str)

# 3a. print "Hello {{your favorite number}}!" using a comma in the print function.
# 3b. print "Hello {{your favorite number}}!" using a + in the print function.
number = 27
print("Hello", number, "!") #prints "Hello 27 !"
print("Hello " + str(number) + "!") #prints "Hello 27!"

# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "sushi"
fave_food2 = "pizza"
print("I love to eat {} and {}.".format(fave_food1, fave_food2)) # with .format()
print(f"I love to eat {fave_food1} and {fave_food2}.") # with an f string

# 4a. print "I love to eat {{food_one}} and {{food_two}}." with the format method
# 4b. print "I love to eat {{food_one}} and {{food_two}}." with f-strings
food_one = "hot dogs"
food_two = "chicken bake"
print("I love to eat {} and {}.".format(food_one, food_two)) #prints "I love to eat hot dogs and chicken bake" using format method
print("I love to eat {food_one} and {food_two}.") #prints "I love to eat hot dogs and chicken bake" using f-strings

# NINJA BONUS -- Spend a few minutes playing around with other string methods to see what's out there!

# % formatting -- %s (string), %d (number), % (placeholder)
ab = "I love %s" % "Costco" # I love Costco
cd = "hot dogs and %s" % "chicken bake" # hot dogs and chicken bake
ef = "even in %d" % 2021 # even in 2021
print(ab, cd, ef) #prints "I love Costco hot dogs and chicken bake even in 2021"

# % formatting with math
ab = "I can %s" % "count"
cd = 5 + 5
ef = int(40 / 2)
gh = int(15*2)
print(ab, cd, ef, gh)