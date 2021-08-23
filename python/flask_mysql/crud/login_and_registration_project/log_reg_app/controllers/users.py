# Controllers contain all @app.route(s) - Controls the URL routes

# Import data from other files
from log_reg_app import app
# Import class 'User' from file 'user' from folder 'models'
from log_reg_app.models.user import User
# Import class 'bcrypt' from file 'user' from folder 'models'
from log_reg_app.models.user import bcrypt
from flask import render_template, request, redirect, session, flash


# Display route
@app.route('/') # URL
def index(): # any function name
    return render_template("index.html") # linked HTML page to display at given

# User Success Menu Page
@app.route('/users/success') # URL route = /users/success
def user_success(): #function (def) = user_success
    # Session (in python flask) is the time between the client logs in and logs out of the server (user's session)
    # The data that is required to be saved in the session is stored in a temporary directory on the server
    if 'user_id' not in session: # so if new variable 'user_id' is NOT stored in session, 
        return redirect('/') #redirect to URL '/'
    # 2nd parameter variable "data" from class "User" as (cls, data)
    data = {
        #settings variable 'data' to = 'id' category from class 'User' = session of 'user_id'
        'id': session['user_id'] # so now new variable 'user_id' is linked to 'id' category from class 'User'
    }
    # new variable 'user' = class 'User' method 'get_by_id' input argument 'data' (where data = 'id' of User)
    user = User.get_by_id(data) # so variable 'user' will store all user info of user id = #
    return render_template('success.html', user = user) # linking variable 'user' in this function to variable 'user' in success.html document

# Action Routes
# Register User
# POST method = used to send (submit/post) data through a form to the server for creating/updating data in the SERVER
@app.route('/users/register', methods=['POST'])
def user_register():
    # here we set variable 'data' (from class parameter) to hold the following object/instance
    # here we are trying to grab all the data from the website
    data = {
        # here we are requesting form data from the WEBSITE (NOT SERVER)
        # getting user layout data from website for registration layout
        # we can then input data to follow this layout and submit (post) it to the server
        # here we also set abbreviated variable names to store data
        'fname': request.form['first_name'],
        'lname': request.form['last_name'],
        'email': request.form['email'],
        'pw': request.form['password'],
        'pw_check': request.form['confirm_pw']
    }
    # if validation returns is_valid = False, redirect and show messages
    if not User.validate_registration(data): 
        # redirect to the route where the user form is rendered
        return redirect('/')
    else:#
        # password hash = turns inputted password into a scrambled representation of itself 
        # by adding a key from a set algorithm
        # here, new variable 'pw_hash' set to use 'bcrypt' to encode and then generate 
        # a password hash using the user-inputted password
        # we add the "decode" method here so that the hashed pw in database won't be encoded 
        # twice when we try to compare and validate the pw
        # bcrypt will create another pw hash on the db_pw when we call on it to validate pw
        # so if we don't decode on one side then the passwords won't match
        pw_hash = bcrypt.generate_password_hash(request.form['password']).decode('utf-8')
        print(pw_hash)
        # parameter 'data' from class 'User'
        # setting the 'pw' of object 'data' to equal 'pw_hash'
        data['pw'] = pw_hash 
        # setting new variable 'user_id' = auto-generated database id (sequence) from 'save' method
        user_id = User.save(data)
        # setting the 'user_id' of object 'session' to equal 'user_id'
        # basically, saving the auto-generated database id to session (temporary storage for user info)
        session['user_id'] = user_id
        return redirect('/users/success')

# Login User
# POST - to submit (post) data to be processed to the server
# GET - to request (get) data from the server
# here we need to post/get data to/from the server
@app.route('/users/login', methods = ["POST", "GET"])
def user_login():
    if 'user_id' in session: # if 'user_id' is already stored in user session data on server,
        return redirect('/users/success') # then redirect to users success page
    elif request.method == "POST":
        data = {
            # to login, we request form (layout) data from the WEBSITE
            # we can then input data to follow this form (layout) and then submit (post) it to the server to login
            'email': request.form['email'],
            'pw': request.form['password']
        }

        if not User.validate_login(data):
            return redirect('/users/login')
        else:
            user = User.get_by_email(data)
            session['user_id'] = user.id
            return redirect('/users/success')
    return render_template("login.html")

# Logout User
@app.route('/users/logout')
def user_logout():
    # clears user session data
    session.clear()
    # redirects to URL '/users/login' (Login page)
    return redirect('/users/login')