# users_app instead of flask_app
from users_app.config.mysqlconnection import connectToMySQL
# modeling user table from database
class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

# classmethods to query database

# SELECTS all the users
@classmethod
def get_all(cls):
	query = "SELECT * FROM users;"
	users_from_db = connectToMySQL('user_db').query_db(query)
	users = []
	for x in users_from_db:
		users.append(cls(x))
	return users

# SELECTS users by first or last_name
@classmethod
def get_by_id(cls, data):
	result = []
	query = "SELECT id FROM users WHERE first_name = %(fname)s AND last_name = %(lname)s"
	result = connectToMySQL("user_db").query_db(query,data)
	return result[0]['id']

# SELECTS users by id = #
@classmethod
def get_info(cls, data):
	query = "SELECT * FROM users WHERE id = %(id)s;"
	return connectToMySQL("user_db").query_db(query, data)

# INSERTS input data into database and saves it
@classmethod
def save(cls,data):
	query = "Insert INTO users (first_name,last_name,emailcreated_at,updated_at) VALUES(%(fname)s,%(lname)s,%(email)s,NOW(),NOW());"
	return connectToMySQL("user_db").query_db(query, data)
	
# UPDATES users info where id = #
@classmethod
def update(cls, data):
	query = "UPDATE users SET first_name = %(fname)s, last_name = %(lname)s, email = %(email)s, updated_at = NOW() WHERE id = %(id)s;"
	return connectToMySQL("user_db").query_db(query, data)

# DELETES from users where id = #
@classmethod
def destroy(cls, data):
	query = "DELETE FROM users WHERE id = %(id)s"
	return connectToMySQL("user_db").query_db(query, data)
def __repr__(self):
	return f"id: {self.id}, first_name: {self.first_name}, last_name: {self.last_name}, email: {self.email}, created_at {self.created_at}, updated_at: {self.updated_at}\n"