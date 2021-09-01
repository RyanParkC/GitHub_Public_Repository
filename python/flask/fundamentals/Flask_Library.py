#To Use Flask
    #Find Project Folder using
        ls #list
        cd #change directory
        cd + path #path from Copy Path
    #Activate Flask in Terminal
        pipenv shell
    #Install Flask into Project Folder
        pipenv install flask
    #Activate Server
        python server.py
    #Open in browser
        localhost:5000
    #To Exit Server
        Ctrl + C
    #To Exit Shell tyoe
        exit


#!-----------Basic Layout------------------------------------------------------------------#

from flask import Flask
import flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"

@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

# import statements, maybe some other routes
@app.route('/success')
def success():
    return "success"
        # @app.route("/dojo")     #upon page url with /dojo
        # def dojo_route():       #fxn dojo_route, no parameters, will load upon url load with /dojo
        #     return "Dojo"       #return value will output when app url is entered

@app.route('/hello/<name>') # for a route '/hello/____' anything after '/hello/' gets passed as a variable 'name'
def hello(name):
    #print(name)            # to check if working properly
    return "Hello, " + name
        # @app.route("/say/<string:name>")        #upon page url with /say/<string:name>
        # def say_hi(name):                       #fxn say_hi, parameter = name
        #     if type(name) == type("string"):    #if statement: (class) type, parameter = name, equal to (class) type, parameter = "string"
        #         # print(type(name))             #print statement check to see if fxn working --> true
        #         return "Hi " + name + "!"       #return value will output when app url is entered

@app.route('/users/<username>/<id>') # for a route '/users/____/____', two parameters in the url get passed as username and id
def show_user_profile(username, id):
    #print(username)                 # to check if working properly
    #print(id)
    return "username: " + username + ", id: " + id
        # @app.route("/repeat/<int:num>/<string:string>") #upon page url with /repeat/<int:num>/<string:string>
        # def num_string_route(num, string):              #fxn num_string_route, parameter = num, str
        #     return (string + " ") * int(num)             #return value will output when app url is entered

#ERROR Message
@app.errorhandler(404)                          #upon error happening with unknown page url entered
def not_found(error):                           #fxn not_found, parameter = error
    return "Sorry! No response. Try again."     #return value will output when app url is entered


# app.run(debug=True) should be the very last statement! 
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.



#!-------------for HTML coding------------------------------------------#
#For HTML 
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")	# notice the 2 new named arguments!

if __name__=="__main__":
    app.run(debug=True)

# 2 special inputs for HTML data
    # {{ some variable }}
    # {% some expression %}
# Html input
# <h3>My Flask Template</h3>
# <p>Phrase: {{ phrase }}</p>
# <p>Times: {{ times }}</p>

# {% for x in range(0,times): %} -- for loop
#     <p>{{ phrase }}</p>
# {% endfor %}

# {% if phrase == "hello" %}
#   <p>The phrase says hello</p>
# {% endif %}


#!------Flask MySQL--------------------------------------------------------------------------------------------

#1. Copy Basic Folder Layout

#2. new_project_folder > 
pipenv install PyMySQL flask

#3. IF needed
pipenv shell
pipenv install flask

#3a. To run server:
pipenv shell
python server.py
#open
localhost:5000

