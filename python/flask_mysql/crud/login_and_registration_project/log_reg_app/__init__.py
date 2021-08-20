# __init__.py lets Python interpreter know that a directory contains code for a Python module
from flask import Flask
app = Flask(__name__)
app.secret_key = 'my_secret_key'