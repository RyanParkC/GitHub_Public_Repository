# Controllers contain all @app.route(s) - Controls the URL routes

# Import data from other files
from recipes_app import app
# Import class 'Recipe' and 'User' from file 'recipe' and 'user' from folder 'models'
from recipes_app.models.recipe import Recipe
from recipes_app.models.user import User
from flask import render_template, request, redirect, session, flash


@app.route('/recipes/new')
def recipes_new():
    if 'user_id' not in session:
        return redirect('/')
    return render_template('recipes_new.html')

@app.route('/recipes/create', methods=['POST'])
def recipes_create():
    if 'user_id' not in session:
        return redirect('/')
    recipe = {
        'rec_name': request.form['recipe_name'], #right side is in html
        'rec_desc': request.form['description'],
        'rec_inst': request.form['instructions'],
        'rec_date': request.form['date_made_on'],
        'rec_dur': request.form['duration'],
        'user_id': session['user_id']
    }
    if not Recipe.validate_recipe(recipe):
        return redirect('/recipes/new')
    else:
        Recipe.save(recipe)
        return redirect('/users/dashboard')

@app.route('/recipes/<int:recipe_id>')
def recipes_view(recipe_id):
    if 'user_id' not in session:
        return redirect('/')
    recipe = {
        'recipe_id': recipe_id
    }
    recipe_from_db = Recipe.get_by_recipe_id(recipe)
    return render_template('recipes_view.html', recipe=recipe_from_db)

@app.route('/recipes/edit/<int:recipe_id>')
def recipes_edit(recipe_id):
    if 'user_id' not in session:
        return redirect('/')
    recipe = {
        'recipe_id': recipe_id
    }
    recipe_from_db = Recipe.get_by_recipe_id(recipe)
    return redirect('recipes_edit_id.html', recipe=recipe_from_db)

@app.route('/recipes/update/<int:recipe_id>')
def recipes_update(recipe_id):
    if 'user_id' not in session:
        return redirect('/')
    recipe = {
        'recipe_id': recipe_id,
        'rec_name': request.form['recipe_name'],
        'rec_desc': request.form['description'],
        'rec_inst': request.form['instructions'],
        'rec_date': request.form['date_made_on'],
        'rec_dur': request.form['duration'],
    }
    if not Recipe.validate_recipe(recipe):
        return redirect('/recipes/edit/<int:recipe_id>')
    Recipe.edit_recipe(recipe)
    return redirect('/users/dashboard')

@app.route('/recipes/delete/<int:recipe_id>')
def recipes_delete(recipe_id):
    if 'user_id' not in session:
        return redirect('/')
    recipe = {
        'recipe_id': recipe_id
    }
    Recipe.delete_recipe(recipe)
    return redirect('/users/dashboard')
