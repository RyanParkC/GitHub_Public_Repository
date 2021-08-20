# imports class 'app' from folder 'log_reg_app'
from log_reg_app import app
# imports class 'users' from folder 'controllers' (which contains URL routes) from folder 'log_reg_app'
from log_reg_app.controllers import users

if __name__=='__main__':
    app.run(debug=True)