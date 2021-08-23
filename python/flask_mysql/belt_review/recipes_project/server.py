# imports class 'app' from folder 'log_reg_app'
from recipes_app import app
# imports class 'users' from folder 'controllers' (which contains URL routes) from folder 'log_reg_app'
from recipes_app.controllers import users_controller, recipes_controller

if __name__=='__main__':
    app.run(debug=True)