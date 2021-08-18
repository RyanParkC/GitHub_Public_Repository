from flask import Flask, render_template, redirect, request
# import the class from user.py
from user import User
app = Flask(__name__)
app.secret_key = "my_secret_key"


@app.route('/')
def homepage():
    return render_template("create.html")

# All Users Page
@app.route('/users')
def show():
    users = User.get_all()
    return render_template("read_all.html", all_users = users)

# Create user page
@app.route('/users/new', methods=['POST'])
def create_user():
    data = {
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "email": request.form["email"]
    }
    User.save(data) # save new user data
    return redirect('/users') # redirects to /users


if __name__ == "__main__":
    app.run(debug=True)