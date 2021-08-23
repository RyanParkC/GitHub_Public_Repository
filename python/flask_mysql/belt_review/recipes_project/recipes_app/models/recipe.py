# Import class 'connectToMySQL' from file 'mysqlconnection' from folder 'config' from folder 'recipes_app'
from recipes_app.config.mysqlconnection import connectToMySQL
from recipes_app.models import user
# Import class 'flash' from folder 'flask' in order to use flash alert
from flask import flash

DATABASE = 'recipes_db'

class Recipe:
    def __init__(self, recipe): # __init__ = constructor to create object
        self.id = recipe['id']
        self.name = recipe['name']
        self.description = recipe['description']
        self.under_30 = recipe['under_30']
        self.instructions = recipe['instructions']
        self.created_at = recipe['created_at']

        self.user_id = recipe['user_id']

    @classmethod
    def save(cls, recipe):
        query = "INSERT INTO recipes (name, description, under_30, instructions, created_at, updated_at, user_id) VALUES (%(rec_name)s, %(rec_desc)s, %(rec_dur)s, %(rec_inst)s, %(rec_date)s, %(rec_date)s, %(user_id)s);"
        return connectToMySQL(DATABASE).query_db(query, recipe)
    
    @classmethod
    def get_by_user_id(cls, recipe):
        query = "SELECT * FROM recipes WHERE user_id = %(id)s;"
        recipe_by_user_id = connectToMySQL(DATABASE).query_db(query, recipe)
        all_recipes = []
        if len(recipe_by_user_id) > 0:
            for recipe in recipe_by_user_id:
                all_recipes.append(cls(recipe))
        return all_recipes

    @classmethod
    def get_by_recipe_id(cls, recipe):
        query = "SELECT * FROM recipes WHERE id = %(recipe_id)s;"
        recipe_by_recipe_id = connectToMySQL(DATABASE).query_db(query, recipe)
        if len(recipe_by_recipe_id) > 0:
            return cls(recipe_by_recipe_id[0])

    @classmethod
    def edit_recipe(cls, recipe):
        query = "UPDATE recipes SET name = %(rec_name)s, description = %(rec_desc)s, instructions = %(rec_inst)s, created_at = %(rec_date)s, updated_at = %(rec_date)s, under_30 = %(rec_dur)s WHERE id = %(recipe_id)s;"
        return connectToMySQL(DATABASE).query_db(query, recipe)

    @classmethod
    def delete_recipe(cls,recipe):
        query = "DELETE FROM recipes WHERE id = %(recipe_id)s;"
        return connectToMySQL(DATABASE).query_db(query, recipe)

    @staticmethod
    def validate_recipe(recipe):
        is_valid = True
        if not recipe['rec_date']:
            flash('recipe date must be filled out', 'rec_date')
            is_valid = False
        if not recipe['rec_dur']:
            flash('must choose an option', 'rec_dur')
            is_valid = False
        if len(recipe['rec_name']) < 3:
            flash('recipe name must be at least 3 characters long!', 'rec_name')
            is_valid = False
        if len(recipe['rec_desc']) <3:
            flash('recipe description must be at least 3 characters long!', 'rec_desc')
            is_valid = False
        if len(recipe['rec_inst']) <3:
            flash('recipe instructions must be at least 3 characters long!', 'rec_inst')
            is_valid = False
        return is_valid