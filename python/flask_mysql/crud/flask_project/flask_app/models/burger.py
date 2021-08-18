from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import topping
# burger.py
class Burger:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.bun = data['bun']
        self.meat = data['meat']
        self.calories = data['calories']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
		# We now create a list so that later we can add in all the topping objects that relate a burger.
        self.toppings = []

class Topping:
	def __init__( self , data ):
		self.id = data['id']
		self.topping_name = data['topping_name']
		# we need to place the FK for the burger in the class. 
		self.burger_id = data['burger_id']
		self.created_at = data['created_at']
		self.updated_at = data['updated_at']

	@classmethod
	def save( cls , data ):
		query = "INSERT INTO toppings ( topping_name , burger_id , created_at , updated_at ) VALUES (%(topping_name)s,%(burger_id)s,NOW(),NOW());"
		return connectToMySQL('burgers').query_db(query,data)


# burger.py...
# gets all the burgers and returns them in a list of burger objects .
@classmethod
def get_all(cls):
	query = "SELECT * FROM burgers"
	burgers_from_db = connectToMySQL('burgers').query_db(query)
	burgers = []
	for b in burgers_from_db:
		burgers.append(cls(b))
	return burgers

# burger.py...
# gets all the burgers and returns them in a list of burger objects .
@classmethod
def save(cls,data):
	query = "Insert INTO burgers (name,bun,meat,calories,created_at,updated_at) VALUES(%(name)s,%(bun)s,%(meat)s,%(calories)s,NOW(),NOW());"
	burger_id = connectToMySQL('burgers').query_db(query,data)
	return burger_id

@classmethod
def get_burger_with_toppings( cls , data ):
    query = "SELECT * FROM burgers LEFT JOIN toppings ON toppings.burger_id = burgers.id WHERE burgers.id = %(id)s;"
	results = connectToMySQL('burgers').query_db( query , data )
    # results will be a list of topping objects with the burger attached to each row. 
    burger = cls( results[0] )
    for row_from_db in results:
		# Now we parse the topping data to make instances of toppings and add them into our list.
        topping_data = {
            "id" : row_from_db["toppings.id"],
            "topping_name" : row_from_db["topping_name"],
            "created_at" : row_from_db["toppings.created_at"],
            "updated_at" : row_from_db["toppings.updated_at"]
        }
        burger.toppings.append( topping.Topping( topping_data ) )
	return burger
