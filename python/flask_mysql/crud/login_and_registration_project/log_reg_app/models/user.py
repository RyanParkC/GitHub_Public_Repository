from log_reg_app.config.mysqlconnection import connectToMySQL
from log_reg_app import app
from flask import flash
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
import re

DATABASE = 'log_reg_db'
EMAIL_REGEX = re.compile(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b')

# User class data
class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

# Classmethods to query database via creating factory methods that return class objects for diff use cases
# SELECT all users
    @classmethod
    def get_all(cls, data): # classmethod always takes 'cls' as first parameter
        query = 'SELECT * FROM log_reg;'
        print('Getting all users...')
        results = connectToMySQL(DATABASE).query_db(query)
        all_users = []
        for result in results:
            all_users.append(cls(result))
        return all_users

# INSERT new user into database and save
    @classmethod
    def save(cls, data):
        query = "INSERT INTO log_reg (first_name, last_name, email, password, created_at, updated_at) VALUES(%(fname)s, %(lname)s, %(email)s,%(pw)s, NOW(), NOW());"
        return connectToMySQL(DATABASE).query_db(query, data)

# SELECT users where email = ''
    @classmethod
    def get_by_email(cls, data):
        print(data)
        query = 'SELECT * FROM log_reg WHERE email = %(email)s'
        email = connectToMySQL(DATABASE).query_db(query, data)
        if len(email) > 0: 
            return cls(email[0])
        return False

# SELECT users where id = #
    @classmethod
    def get_by_id(cls, data):
        print(data)
        query = 'SELECT * FROM log_reg WHERE id = %(id)s'
        user = connectToMySQL(DATABASE).query_db(query, data)
        print(user)
        return cls(user[0])

# Staticmethod to Validate registration
    @staticmethod
    def validate_registration(data):
        SpecialSym = ['!','@', '#','$','%','^','&','*']
        is_valid = True
        if User.get_by_email(data):
            flash('Email address is registered already, please choose a different email.', 'email')
            is_valid = False
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
    def validate_login(data):
        flash('Login Success!')
        is_valid = True
        user = User.get_by_email(data)
        if not user:
            print('Email didn\'t exist')
            flash('Invalid Email/Password.', 'error')
            is_valid = False
        elif not bcrypt.check_password_hash(user.password, data['pw']):
            print('Password did not match stored password')
            flash('Invalid Email/Password.', 'error')
            is_valid = False
        return is_valid