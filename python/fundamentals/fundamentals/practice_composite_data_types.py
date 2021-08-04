#Composite Data Types Practice

#!----[Lists]-----#
ninjas = ['Naruto', 'Sasuke', 'Kakashi']
my_list = ['I', 'see', 'a', ['list', 'in', 'a', 'list'], 2021]
empty_list = []

# Combining Lists
fruits = ['apples', 'bananas', 'cherries', 'peaches', 'strawberries']
vegetables = ['spinach', 'lettuce', 'carrots']
fruits_and_vegetables = fruits + vegetables
print(fruits_and_vegetables)
salad = 3 * vegetables #prints vegetables list 3 times in a row
print(salad)

# Accessing List Values
drawer = ['notes', 'stapler', 'pen', 'paper', 'gum'] #index 0,1,2,3,4
print(drawer[0]) #prints notes
print(drawer[2]) #prints pen
print(drawer[4]) #prints gum

# Appending (adding to) Lists
x = [0,1,2,3,4,5]
x.append(6) #can only append (add) ONE value at a time. CANNOT add multiple in this way e.g. (6,7) will not work!
x.append(7) #will also add 7 to the list after 6
print(x) #prints [0,1,2,3,4,5,6,7]

# Returning copy of list constrained to specified indices
x = [99, 40, 20, 5, -38]
print(x[:]) #prints same list
print(x[1:]) #prints from index 1 (40) forward --> [40, 20, 5, -38]
print(x[:4]) #prints from index 4 (-38) backward EXCLUDING index 4 value --> [99, 40, 20, 5]
print(x[2:4]) #prints from index 2 (20) forward up until index 3 (excludes index 4) --> [20, 5]

# List Built-in Functions
# len(sequence) -- to check length of list (# of items)
my_list = [1, 2, 3, 'Ninja', 'Dojo']
print(len(my_list)) #prints output --> 5 (total items in list)

# To add ONE value to end of List
# .append (add) values to list -- adds value to END of list
my_list = [1,2,3,4,5]
my_list.append(6) #can only append (add) one value at a time to the end of the list using this append method!
my_list.append(7)
print(my_list)

#To add MULTIPLE values (another list) to end of list
# list.extend(list2)
my_list = [1,2,3,4,5]
my_list2 = [6,7,8,9,10]
my_list3 = [11,12,13,14,15]
my_list.extend(my_list2)
my_list.extend(my_list3) #to further extend the list you can add to the original list
print(my_list) #prints all 3 lists combined in one list --> [0,1,2,3,4,5,6,7,8,9,10]

#To REMOVE a value from a list
# list.pop(index)
my_list = [1,2,3,4,5]
my_list.pop(0) #this will pop (remove) index 0 (1) from the list
print(my_list)


#!----(Tuples)-------#
#Immutable (cannot alter/change) -- but can still add/remove (slice) items!
my_tuple_mixed_data = ('chicken', 'airplane', 27, 2021) 
print(my_tuple_mixed_data[1]) #prints airplane

my_tuple_numbers = (27, 21, 30, 99)
print(my_tuple_numbers[3]) #prints 99

my_tuple_data = ('chicken', 'airplane', 'rocket')

my_tuple_letters = "a", "b", "c"

# ADDING to tuples
tuple_a = ('a', 'bear', 'walked', 'in', 'during')
tuple_a = tuple_a + (2021,)
print(tuple_a) #prints a bear walked in during 2021

# REMOVING (slicing) from tuples
tuple_a = ('a', 'bear', 'walked', 'in', 'during')
tuple_a = tuple_a[1:4] + ("casually",)
print(tuple_a)

# Built-in Tuple functions
x = (1,5,3,54,"teddy","bear","Ted")
print(len(x)) #checks length of tuple --> prints 7

# Tuples as return values
def get_circle_area(r):
    #Return (circumference, area) of a circle of radius r
    c = 2 * math.pi * r
    a = math.pi * r * r
    return (c,a)


#!----{Dictionaries}----#
# Use [keys] to track position and call the "values"
# Creating Dictionaries -- Method #1
weekend = {"Sat": "Saturday", "Sun": "Sunday"} #create dictionary straight up
print(weekend["Sat"]) #call [key] "Sat" to get "value" "Saturday"

# Creating Dictionaries -- Method #2
states = {}
states["WA"] = "Washington State"
states["OR"] = "Oregon"
states["CA"] = "California"
states["NY"] = "New York"
states["NJ"] = "New Jersey"
print(states["WA"]) #prints Washington State

# REMOVING (pop) values from Dictionaries
# Method #1 -- removes key and returns value
value_removed = states.pop("NY") #removes key "NY" and returns its value

# Method #2 -- deletes key and does NOT return anything
del states["NJ"] #deletes key "NJ" and does NOT return anything