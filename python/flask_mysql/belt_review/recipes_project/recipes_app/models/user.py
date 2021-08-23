# Import class 'connectToMySQL' from file 'mysqlconnection' from folder 'config' from folder 'users_app'
from recipes_app.config.mysqlconnection import connectToMySQL
from recipes_app import app
from recipes_app.models import recipe
# Import class 'flash' from folder 'flask' in order to use flash alert
from flask import flash
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
# Import 're' in order to use REGEX (REGular EXpression) in Python
import re

DATABASE = 'recipes_db'
EMAIL_REGEX = re.compile(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b')

# DB model
class User:
    def __init__(self, user_info):
        self.id = user_info['id']
        self.first_name = user_info['first_name']
        self.last_name = user_info['last_name']
        self.email = user_info['email']
        self.password = user_info['password']
        self.created_at = user_info['created_at']
        self.updated_at = user_info['updated_at']

    # Get USER by EMAIL
    @classmethod
    def get_by_email(cls, data):
        query = 'SELECT * FROM users WHERE email = %(email)s;'
        user_by_email = connectToMySQL(DATABASE).query_db(query, data)
        if len(user_by_email) > 0:
            return cls(user_by_email[0]) # with index = 0, we assume there is only 1 user
        # but if no user found, then
        return False

    @classmethod
    def get_by_id(cls, data):
        query = 'SELECT * FROM users WHERE id = %(id)s;'
        user_by_id = connectToMySQL(DATABASE).query_db(query, data)
        if len(user_by_id) > 0:
            return cls(user_by_id[0])
        return False

    # SAVE user to DB
    @classmethod
    def save(cls, user_info):
        query = 'INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (%(fname)s, %(lname)s, %(email)s, %(pw_hash)s, NOW(), NOW());'
        return connectToMySQL(DATABASE).query_db(query, user_info)

    # VALIDATE registration of user
    @staticmethod
    def validate_registration(reg_info):
        is_valid = True
        if len(reg_info['fname']) < 2:
            flash('must be longer than 2 characters!', 'first_name') #2nd input links to html category
            is_valid = False
        if len(reg_info['lname']) < 2:
            flash('must be longer than 2 characters!', 'last_name')
            is_valid = False
        if not EMAIL_REGEX.match(reg_info['email']):
            flash('Invalid email format', 'email')
            is_valid = False
        if User.get_by_email(reg_info):
            # flash = flashes an alert with the follow message FROM 'email'
            flash('Email address is registered already, please choose a different email.', 'email')
            is_valid = False
        if not reg_info['pw'] == reg_info['confirm_password']:
            flash('Passwords do not match! Try again!', 'password')
            is_valid = False
        return is_valid

    @staticmethod
    def validate_login(login_info):
        user_from_db = User.get_by_email(login_info)
        if not user_from_db:
            flash('Email address not registered!', 'error')
            return False
        if not bcrypt.check_password_hash(user_from_db.password, login_info['password']):
            flash('Wrong password!', 'error')
            return False
        return True