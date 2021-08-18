# import the function that will return an instance of a connection
from mysqlconnection import connectToMySQL
# model the class after the friend table from our database
class Friend:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.occupation = data['occupation']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
# Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM friends;" # SELECTING ALL columns and rows from table 'friends'
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('first_flask').query_db(query) # 'first_flask' = db/schema name)
        # Create an empty list to append (add) our instances of friends
        friends = []
        # Iterate over the db results and create instances of friends with cls.
        for friend in results: # for class 'friend' in database 'results'
            friends.append( cls(friend) ) # add to list 'friends' using class 'friend' format
        return friends # return value 'friends' to variable 'friends'
        # ... other class methods
    # class method to save our friend to the database -- links to /create_friend from server.py
    # INSERT INTO creates a row in the database
    @classmethod
    def save(cls, data): # %(key_name)s - as placeholder for data dictionary
        query = "INSERT INTO friends ( first_name , last_name , occupation , created_at, updated_at ) VALUES ( %(fname)s , %(lname)s , %(occ)s , NOW() , NOW() );"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('first_flask').query_db( query, data ) #return values to be saved into the database


# Note: We will need to call on the 
# connectToMySQL # function EVERY time we want to execute a query 
# because our connection closes as soon as the query finishes executing.