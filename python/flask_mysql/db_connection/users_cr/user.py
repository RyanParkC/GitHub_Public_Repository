# Import the function that will return an instance of a connection
from mysqlconnection import connectToMySQL

# Model the class after the friend table from our database
class User:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
    # We use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;" #query to select ALL columns from users table
        results = connectToMySQL("user_db").query_db(query) 
        #query_db returns list of dict where each dict reps a row in the table
        users = [] #users array/list
        for result in results:
            users.append(cls(result))
        return users

    @classmethod
    def get_by_id(cls, data):
        result = []
        query = "SELECT id FROM users WHERE first_name = %(fname)s AND last_name = %(lname)s"
        result = connectToMySQL("user_db").query_db(query,data)
        return result[0]['id']

    @classmethod
    def save(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES (%(fname)s, %(lname)s, %(email)s, NOW(), NOW());"
        return connectToMySQL("user_db").query_db(query, data)
        
    @classmethod
    def show(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        return connectToMySQL("user_db").query_db(query, data)
        
    @classmethod
    def update(cls, data):
        query = "UPDATE users SET first_name = %(fname)s, last_name = %(lname)s, email = %(email)s, updated_at = NOW() WHERE id= %(id)s;"
        return connectToMySQL("user_db").query_db(query, data)

    @classmethod
    def destroy(cls, data):
        query = "DELETE FROM users WHERE id = %(id)s"
        return connectToMySQL("user_db").query_db(query, data)
    def __repr__(self):
        return f"id: {self.id}, first_name: {self.first_name}, last_name: {self.last_name}, email: {self.email}, created_at {self.created_at}, updated_at: {self.updated_at}\n"