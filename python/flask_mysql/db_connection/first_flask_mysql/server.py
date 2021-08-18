from flask import Flask, render_template
# import the class from friend.py
from friend import Friend
app = Flask(__name__)

# Home Page (index.html) - localhost:5000
@app.route("/")
def index():
    # call the get all classmethod to get all friends
    friends = Friend.get_all() # list 'friends' = class 'Friend' call classmethod function 'get_all'
    print(friends) # logging (friends) to check if successfully running
    return render_template("index.html", all_friends = friends)

@app.route('/create_friend', methods=["POST"])
def create_friend():
    # First we make a data dictionary from our request.form coming from our template.
    # The keys in data need to line up exactly with the variables in our query string.copy
    data = {
        "fname": request.form["fname"], #request.form makes a key:value pair for ["fname"] -- key = fname, value = user_input
        "lname" : request.form["lname"],
        "occ" : request.form["occ"]
    }
    # We pass the data dictionary into the save method from the Friend class.
    Friend.save(data) # call Friend.save(data) function from friend.py
    # Don't forget to redirect after saving to the database.
    return redirect('/')
            
if __name__ == "__main__":
    app.run(debug=True)
