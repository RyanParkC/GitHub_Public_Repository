from dojos_and_ninjas_app.config.mysqlconnection import connectToMySQL

# List database
DATABASE = "dojo_ninjas"

# Model the class after the friend table from our database
class Ninja:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.age = data["age"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.dojo_id = data["dojo_id"]

# Use class methods to query our database
# SELECTing all rows/columns from table ninjas and listing in array ninjas
@classmethod
def get_all(cls):
    query = "SELECT * FROM ninjas;"
    results = connectToMySQL(DATABASE).query_db(query)
    ninjas = []
    for result in results:
        ninjas.append(cls(result))
    return ninjas

# SELECTing by id
@classmethod
def get_by_id(cls, data):
    result = []
    query = "SELECT id FROM ninjas WHERE first_name = %(fname)s AND last_name = %(lname)s"
    result = connectToMySQL(DATABASE).query_db(query,data)
    return result[0]['id']

# INSERTing and SAVING new ninja data
@classmethod
def save(cls, data):
    query = "INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojo_id) VALUES (%(fname)s, %(lname)s, %(age)s, NOW(), NOW(), %(dojo_id)s);"
    return connectToMySQL(DATABASE).query_db(query, data)

#SELECTing all rows/columns from table ninjas with id = #
@classmethod
def get_info(cls, data):
    query = "SELECT * FROM ninjas WHERE id = %(id)s;"
    return connectToMySQL(DATABASE).query_db(query, data)

#UPDATing table ninjas key:value pairs
@classmethod
def update(cls, data):
    query = "UPDATE ninjas SET first_name = %(fname)s, last_name = %(lname)s, email = %(email)s, updated_at = NOW() WHERE id= %(id)s;"
    return connectToMySQL(DATABASE).query_db(query, data)

#DELETing data from table ninjas with id = #
@classmethod
def destroy(cls, data):
    query = "DELETE FROM ninjas WHERE id = %(id)s"
    return connectToMySQL(DATABASE).query_db(query, data)

# __repr__ returns object in string format
def __repr__(self):
    return f"id: {self.id}, first_name: {self.first_name}, last_name: {self.last_name}, email: {self.email}, created_at {self.created_at}, updated_at: {self.updated_at}\n"