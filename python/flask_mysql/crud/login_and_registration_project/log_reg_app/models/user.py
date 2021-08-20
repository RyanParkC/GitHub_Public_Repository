# Import class 'connectToMySQL' from file 'mysqlconnection' from folder 'config' from folder 'log_reg_app'
from log_reg_app.config.mysqlconnection import connectToMySQL
# Import class 'app' from folder 'log_reg_app'
# Models contain all the methods - model the methods

from log_reg_app import app
# Import class 'flash' from folder 'flask' in order to use flash alert
from flask import flash
# Import class 'Bcrypt' from folder 'flask_bcrypt' which was installed
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
# Import 're' in order to use REGEX (REGular EXpression) in Python
import re

# variable DATABASE linked to database
DATABASE = 'log_reg_db'
# choose what characters/format email address is allowed to be put in
EMAIL_REGEX = re.compile(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b')

# 'User' class data - setting up class 'User' 
class User:
    def __init__(self, data): #__init__ is a constructor = "Given input 'data', I will construct an object"
        # self = represents the instance of a class. By using keyword "self" we can access the attributes and methods of the class. 
        # self just says I'm gonna do this to myself
        # It binds the attributes with the given arguments.
        # We use "self" because Python decided to make it so the instance to which the method belongs is passed automatically, but not received automatically.
        # the first parameter of methods is the instance the method is called on
        # Self is always pointing to the Current Object
        # self attaches to each column of 'User' so that when class 'User' is called upon, each column will update according to what data is listed in them in the database
        self.id = data['id'] # setting 'self.id' to = the 'id' of object 'data'
        self.first_name = data['first_name'] # setting 'self.first_name' to =  the 'first_name' of object 'data'
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

# Classmethods to query database via creating factory methods that return class objects for diff use cases
# SELECT all users
    @classmethod
    # classmethod always takes 'cls' as first parameter
    def get_all(cls, data): 
        # SELECT all rows/columns from table 'log_reg'
        query = 'SELECT * FROM log_reg;'
        print('Getting all users...')
        # variable 'users_from_db' = connected 'database' query
        users_from_db = connectToMySQL(DATABASE).query_db(query)
        # make a new empty list called 'all_users'
        all_users = []
        # for variable 'u' in database query 'users_from_db'
        for u in users_from_db:
            # to list 'all_users' add 'append' class parameter 'u' = 'self' so runs it through class 'User'
            all_users.append(cls(u))
        # returns value 'all_users' to be stored
        return all_users

# INSERT new user into table 'log_reg' and saves return value into database
    @classmethod
    def save(cls, data):
        query = "INSERT INTO log_reg (first_name, last_name, email, password, created_at, updated_at) VALUES(%(fname)s, %(lname)s, %(email)s,%(pw)s, NOW(), NOW());"
        return connectToMySQL(DATABASE).query_db(query, data)

# SELECT users from table 'log_reg' where email = ''
# basically, getting ONE user from database by input email
    @classmethod
    def get_by_email(cls, data):
        print(data)
        query = 'SELECT * FROM log_reg WHERE email = %(email)s'
        # new variable 'user_by_email' = connects to database and runs query
        user_by_email = connectToMySQL(DATABASE).query_db(query, data)
        # if length of user list (you get by email) is > 0,
        if len(user_by_email) > 0: 
            # then return class 'User' with argument 'user_by_email' to construct first user object of index = 0
            return cls(user_by_email[0])
        # otherwise, return false
        return False

# SELECT users where id = #
# same as above 'get_by_email'
    @classmethod
    def get_by_id(cls, data):
        print(data)
        query = 'SELECT * FROM log_reg WHERE id = %(id)s'
        user = connectToMySQL(DATABASE).query_db(query, data)
        print(user)
        return cls(user[0])

# Classmethods vs. Staticmethods -
# Classmethod - class (cls) is bound to the method as the first parameter - e.g. (cls,data)
# CAN access/modify the class state
# helps avoid creating TypeErrors when calling on the function
# Factory method - uses an object to create other objects from a method call

#Staticmethod - only use when you want to place a method inside a class that is logically related to the class, 
# but does not necessarily interact with any specific instance
# CANNOT access/modify the class state. Knows nothing about the class state
# Utility method - defines a set of methods that perform common, often re-used functions

# Staticmethod to Validate registration
    @staticmethod
    def validate_registration(data):
        SpecialSym = ['!','@', '#','$','%','^','&','*']
        # use this new variable 'is_valid' to return ALL error messages together (concurrently)
        is_valid = True
        # this condition checks if there is an existing user with this email - UNIQUE EMAIL CHECK
        if User.get_by_email(data):
            # flash = flashes an alert with the follow message FROM 'email'
            flash('Email address is registered already, please choose a different email.', 'email')
            is_valid = False
        # checks if email format is wrong
        if not EMAIL_REGEX.match(data['email']):
            flash('Invalid Email')
            is_valid = False
        if len(data['fname']) < 2:
            flash('First name must be greater than 2 characters long, letters only.', 'first_name')
            is_valid = False
        if len(data['lname']) < 2:
            flash('Last name must be greater than 2 characters long, letters only.', 'last_name')
            is_valid = False
        if len(data['pw']) < 8:
            flash('Password length should be at least 8 characters long', 'password')
            is_valid = False
        if not any(char.isdigit() for char in data['pw']):
            flash('Password should have at least one numeral', 'password')
            is_valid = False
        if not any(char.isupper() for char in data['pw']):
            flash('Password should have at least one uppercase letter', 'password')
            is_valid = False
        if not any(char.islower() for char in data['pw']):
            flash('Password should have at least one lowercase letter', 'password')
            is_valid = False
        if not any(char in SpecialSym for char in data['pw']):
            flash('Password should have at least one of the symbols !@#$%^&*', 'password')
            is_valid = False
        if data['pw'] != data['pw_check']:
            flash("'Passwords don't match!", 'password')
            is_valid = False
        return is_valid

# Staticmethod to Validate registration
    @staticmethod
    # function 'validate_login' for input 'data'
    def validate_login(data):
        # var 'user' = class 'User' getting user data via email
        user = User.get_by_email(data)
        # if we cannot get any user from database by email, then flash the following
        if not user:
            print('Email didn\'t exist')
            flash('Invalid Email/Password.', 'error')
            # here, we don't need to use a new var 'is_valid' because not many conditions to check
            return False
        # else if we use password check and data does not match stored password, then flash the following
        elif not bcrypt.check_password_hash(user.password, data['pw']):
            print('Password did not match stored password')
            flash('Invalid Email/Password.', 'error')
            return False
        # OTHERWISE, it is successful (true) so flash the following
        flash('Login Success!')
        return True