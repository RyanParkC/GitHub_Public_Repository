from dojos_and_ninjas_app.config.mysqlconnection import connectToMySQL
from dojos_and_ninjas_app.models import ninja

# List database
DATABASE = "dojo_and_ninjas"

# Model the class after the Dojo table from our database
class Dojo:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.ninjas = []

# Use classmethods to query our database
# Left target table dojos joined by right joining table ninjas via keys
@classmethod
def get_dojo_with_ninjas(cls, data):
    query = "SELECT * FROM dojos LEFT JOIN ninjas on ninjas.dojo_id = dojos.id WHERE dojos.id = %(id)s"
    results = connectToMySQL("dojo_ninjas").query_db(query,data)
    dojo = cls(results[0])
    for result in results:
        print(result)
        this_ninja = {
            "id": result["ninjas.id"],
            "first_name": result["first_name"],
            "last_name": result["last_name"],
            "age": result["age"],
            "created_at": result["ninjas.created_at"],
            "updated_at": result["ninjas.updated_at"],
            "dojo_id": result["dojo_id"],
        }
        dojo.ninjas.append(ninja.Ninja(this_ninja))
        return dojo

# SELECTing all rows/columns from table dojos
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL(DATABASE).query_db(query)
        dojos = []
        for result in results:
            dojos.append(cls(result))
        return dojos

# SELECTing by id
    @classmethod
    def get_by_id(cls, data):
        result = []
        query = "SELECT id FROM dojos WHERE title = %(fname)s AND last_name = %(lname)s"
        result = connectToMySQL(DATABASE).query_db(query,data)
        return result[0]['id']

# INSERTing and saving new dojo data into database
    @classmethod
    def save(cls, data):
        query = "INSERT INTO dojos (name, created_at, updated_at) VALUES (%(fname)s, NOW(), NOW());"
        return connectToMySQL(DATABASE).query_db(query, data)

# SELECTing all rows/columns from table dojos with id = #
    @classmethod
    def get_info(cls, data):
        query = "SELECT * FROM dojos WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

# UPDATing table dojos key:value pairs
    @classmethod
    def update(cls, data):
        query = "UPDATE dojos SET first_name = %(fname)s, last_name = %(lname)s, email = %(email)s, updated_at = NOW() WHERE id= %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

# DELETing data from table dojos with id = #
    @classmethod
    def destroy(cls, data):
        query = "DELETE FROM dojos WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query, data)

# __repr__ returns object in string format
    def __repr__(self):
        return f"id: {self.id}, first_name: {self.first_name}, last_name: {self.last_name}, email: {self.email}, created_at {self.created_at}, updated_at: {self.updated_at}\n"