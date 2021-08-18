from flask import Flask, render_template, redirect, request
# import the class from user.py
from user import User
app = Flask(__name__)
app.secret_key = "my_secret_key"

# Home Page
@app.route('/')
def index():
    return render_template("index.html")

# Create user page
@app.route('/create_user', methods=['POST'])
def users():
    data = {
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "email": request.form["email"]
    }
    User.save(data)
    user_id = User.get_by_id(data)
    print(user_id)
    return redirect(f'/users/{user_id}')

# All Users Page
@app.route('/users')
def show():
    users = User.get_all()
    return render_template("users.html", all_users = users)

# User Page for Id = #
@app.route('/users/<int:x>')
def show_user(x):
    data = {
        "id": x
    }
    user = User.show(data)
    return render_template("user.html", user = user)

# EDIT User Page for Id = # 
@app.route('/users/<int:x>/edit')
def edit(x):
    return render_template("edit.html", x = x)

# Update Form Page
@app.route('/update', methods = ['POST'])
def update():
    data = {
        "id": request.form['id'],
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "email": request.form["email"]
    }
    edit_user = User.update(data)
    return redirect(f"/users/{data['id']}")

# DESTROY DATA for User Page for Id = #
@app.route('/users/<int:x>/destroy')
def destroy(x):
    data = {
        "id": x
    }
    destroy_user = User.destroy(data)
    return redirect('/users')

if __name__ == "__main__":
    app.run(debug=True)