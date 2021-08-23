# Controllers contain all @app.route(s) - Controls the URL routes

# Import data from other files
from recipes_app import app
# Import class 'User' from file 'user' from folder 'models'
from recipes_app.models.user import User, bcrypt
from recipes_app.models.recipe import Recipe
# Import class 'bcrypt' from file 'user' from folder 'models'
# from recipes_app.models.recipe import Recipe
from flask import render_template, request, redirect, session, flash


# MAIN page with Register/Login
@app.route('/')
def index():
    return render_template("index.html") # linked HTML page to display at given URL

# REGISTER user
@app.route('/users/register', methods = ['POST'])
def users_register():
    pw_hash = bcrypt.generate_password_hash(request.form['password']).decode('utf-8')
    user_input = {
        'fname': request.form['first_name'], #right side is retrieved from html file
        'lname': request.form['last_name'], #left side is storing into each property of object 'data'
        'email': request.form['email'],
        'pw': request.form['password'],
        'pw_hash': pw_hash,
        'confirm_password': request.form['confirm_password']
    }
    # if user input NOT valid, then redirect to main (register) page
    if not User.validate_registration(user_input): 
        return redirect('/')
    else:
        # SAVE method for user_input
        user_id = User.save(user_input)
        session['user_id'] = user_id
        return redirect('/users/dashboard')

# LOGIN user
@app.route('/users/login', methods = ['POST', 'GET'])
def users_login():
    # if 'user_id' in session:
    login_info = {
        'email' : request.form['email'],
        'password' : request.form['password']
    }
    if not User.validate_login(login_info):
        return redirect('/') 
    else:
        user = User.get_by_email(login_info)
        session['user_id'] = user.id
        return redirect('/users/dashboard')

@app.route('/users/dashboard')
def user_dashboard():
    if 'user_id' not in session:
        return redirect('/')
    data = {
        'id': session['user_id']
    }
    user = User.get_by_id(data)
    all_recipes = Recipe.get_by_user_id(data)
    return render_template("dashboard.html", user=user, all_recipes=all_recipes)