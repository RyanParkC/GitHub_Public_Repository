# ALL @app.route functions in Controllers folder
# users.py
from flask import render_template, redirect, request, session, flash
from users_app import app
from users_app.models.user import User

# Display routes ----------------------------------------------
# home page
@app.route("/")
def index():
    return render_template("index.html")

# users page
@app.route("/users")
def users():
    return render_template('users.html',users=User.get_all())

# NEW user CREATE page
@app.route("/users/new")
def user_new():
    return render_template("user_create.html")

# user id = # INFO page
@app.route("/users/<int:user_id>")
def user_info(user_id):
    data = {
        "id": user_id
    }
    user = User.get_info(data)
    return render_template("user_info.html", user = user)

# user id = # EDIT page
@app.route("/users/<int:user_id>/edit")
def user_edit(user_id):
    return render_template("user_edit.html", user_id = user_id)

# Action routes -----------------------------------------------
# CREATE user and SAVE form
@app.route('/create/user',methods=['POST'])
def create_user():
	data = {
        "fname" : request.form['fname'],
        "lname" : request.form['lname'],
        "email" : request.form['email'],
	}
	User.save(data)
	return redirect('/users')

# UPDATE user data
@app.route("/users/update", methods = ["POST"])
def user_update():
    data = {
        "id": request.form["id"],
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "email": request.form["email"]
    }
    edit_user = User.update(data)
    return redirect(f"/users/{data['id']}")

# DELETE user data for id = #
@app.route('/users/<int:user_id>/destroy')
def user_destroy(user_id):
    data = {
        "id": user_id
    }
    destroy_user = User.destroy(data)
    return redirect('/users')