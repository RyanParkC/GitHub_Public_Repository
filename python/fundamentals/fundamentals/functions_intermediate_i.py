#Functions Intermediate I


#1. Updating Values in Dictionaries and Lists
#1a. Change the value 10 in x to 15. Once done, x should be [[5,2,3],[15,8,9]]
#1b. Change the last_name of the first student from 'Jordan' to 'Bryant'
#1c. In the sports_directory, change 'Messi' to 'Andres'
#1d. Change the value 20 in z to 30

x = [ [5,2,3], [15,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Bryant'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Andres', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 30} ]

# extra practice
print("students")
print(students)
print("sports_directory")
print(sports_directory)



#2. Iterate Through a List of Dictionaries
#2a. Create a function iterateDictionary(some_list) that, given a list of dictionaries, the function loops through each 
#    dictionary in the list and prints each key and the associated value. For example, given the following list:
#Nested dictionary
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def iterateDictionary(some_list): #fxn name: iteratDictionary, parameter: some_list
    for i in range (0, len(some_list), 1): #variable i in range (incl index 0, excl index 4, incr +1) -- index [0,1,2,3]
        print("first_name - " + some_list[i]["first_name"] + ", " + "last_name - " + some_list[i]["last_name"])
        #calling keys to get values

iterateDictionary(students) #argument "students" is inserted --> students = some_list, thus indexing some_list calls on students list

# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
first_name - Michael, last_name - Jordan
first_name - John, last_name - Rosales
first_name - Mark, last_name - Guillen
first_name - KB, last_name - Tonel



#3. Get Values From a List of Dictionaries
# Create a fxn iterateDictionary2(key_name, some_list) that, given a list of dictionaries
# and a key name, the fxn prints the value stored in that key for each dictionary.
students = [
        {'first_name' : 'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def iterateDictionary2(key_name, some_list): #fxn name. parameters key_name, some_list
    for i in range (0, len(some_list), 1): #integer i in range incl index 0, excl index 4, incr +1
        print(some_list[i][key_name]) 
        #from the dictionary list students (called by some_list)
        #we call the key "key_name" category by index value i

iterateDictionary2('first_name',students) #Michael, John, Mark, KB
#some_list = students
#key_name = first_name

iterateDictionary2('last_name',students) #Jordan, Rosales, Guillen, Tonel


#4. Iterate Through a Dictionary with List Values
# Create a function printInfo(some_dict) that a given dictionary whose values
# are all lists, prints the name of each key along with the size of its list,
# and then prints the associated values within each key's list.
# For example:
# dojo = {
#    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
#    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
# }
# printInfo(dojo)
# # output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon

dict = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(dict):
    for key in dict:  
        print(str(len(dict[key])), key.upper())
        for i in range (0, len(dict[key]), 1):
            print(dict[key][i])