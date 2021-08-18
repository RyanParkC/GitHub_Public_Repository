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
        query = "SELECT * FROM users_db;" #query to select ALL columns from users table
        results = connectToMySQL("user_db").query_db(query) 
        #query_db returns list of dict where each dict reps a row in the table
        users = [] #users array/list
        for result in results:
            users.append(cls(result))
        return users

    @classmethod
    def save(cls, data):
        query = "INSERT INTO users_db (first_name, last_name, email, created_at, updated_at) VALUES (%(fname)s, %(lname)s, %(email)s, NOW(), NOW());"
        return connectToMySQL("user_db").query_db(query, data)
        