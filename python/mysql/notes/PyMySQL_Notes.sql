-- For every new project
new_project_folder $ 
    pipenv install PyMySQL flask

-- Forward vs Reverse Engineering
Forward Engineering --> Script
Reverse Engineering --> ERD 

-- first_flask_mysql/server.py
    @app.route('/')
    def index():
        friends = Friend.get_all()
        print(friends)
        return render_template("index.html", all_friends = friends)

-- first_flask_mysql/templates/index.html
    <h1>All My Friends</h1>
    {% for one_friend in all_friends %}
        <p>First Name: {{one_friend.first_name}}</p>
        <p>Last Name: {{one_friend.last_name}}</p>
        <p>Occupation: {{one_friend.occupation}}</p>
        <hr>
    {% endfor %}

-- Queries with Variable Data
-- Prepared Statements > String interpolation when query includes variables
query = "UPDATE friends SET first_name=%(fn)s WHERE id=%(id_num)s;"
data = {
    "fn": # possibly a value from a form,
    "id num": # possibly a value from the url,
}
mysql.query_db(query, data)

-- the instance of the MySQLConnection class
connection to the db - mysql 
-- the string that will eventually be executed on our MySQL server
query string - "INSERT INTO ..."
-- the values that will be interpolated into tßhe query string
data dictionary
-- he keys of the data dictionary used 
-- in the query string with %-interpolation
data dictionary keys - fn, id_num
    (i.e. %(key_name)s)

-- Use this pattern any time user input is concerned -------------------------------
query = "SELECT * FROM users WHERE email = %(email)s;"    
-- # the placeholder variable is called email
-- # it must match the key name in the data dictionary
data = { 
-- # this 'email' Key in data must be named to match the placeholder 
-- in the query.
    'email' : request.form['email'] 
}
result = mysql.query_db(query, data)

-- From Quiz
-- 1. What does the mysqlconnection.py file do?
 b. Contains a class from which we can build an object that represents a pre-built database
 c. Helps us create a database connection and run queries
-- 2. The query_db() method may return:
 A list of dictionaries where each dictionary represents a row in the table

-- 3. The query_db() method returns _______________ when we run an insert query.
 The row id

-- 4. Why sanitize user input data?
 d. To prevent against SQL injection

-- 5. What does the query_db() method return when we run an update or delete query?
Nothing

-- 6. What does the query_db() method return if our query does not execute correctly?
False
