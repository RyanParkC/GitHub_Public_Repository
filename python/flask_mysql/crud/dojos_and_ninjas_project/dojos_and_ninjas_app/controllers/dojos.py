# ALL @app.route functions in Controllers folder
# dojos.py
from flask import render_template, redirect, request, session, flash
from dojos_and_ninjas_app import app
from dojos_and_ninjas_app.models.dojo import Dojo

# Display routes
@app.route('/dojos')
def dojos():
    dojos = Dojo.get_all()
    return render_template('dojos.html', dojos = dojos)

@app.route('/dojos/<int:dojo_id>')
def dojo_info(dojo_id):
    data = {
        "id": dojo_id
    }
    dojo = Dojo.get_dojo_with_ninjas(data)
    return render_template("dojo_info.html", dojo = dojo)

# Action routes
@app.route('/dojos/create', methods=["POST"])
def dojo_():
    data = {
        "fname": request.form["dojo_name"]
    }
    dojo = Dojo.save(data)
    return redirect('/dojos')