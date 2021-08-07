from flask import Flask
app = Flask(__name__)

@app.route('/')             #upon page load /
def hello_world():          #fxn hello_world, no parameters, will load upon page load
    return "Hello World!"   #return value will output when app url is entered


@app.route("/dojo")     #upon page url with /dojo
def dojo_route():       #fxn dojo_route, no parameters, will load upon url load with /dojo
    return "Dojo"       #return value will output when app url is entered


@app.route("/say/<string:name>")        #upon page url with /say/<string:name>
def say_hi(name):                       #fxn say_hi, parameter = name
    if type(name) == type("string"):    #if statement: (class) type, parameter = name, equal to (class) type, parameter = "string"
        # print(type(name))             #print statement check to see if fxn working --> true
        return "Hi " + name + "!"       #return value will output when app url is entered


@app.route("/repeat/<int:num>/<string:string>") #upon page url with /repeat/<int:num>/<string:string>
def num_string_route(num, string):              #fxn num_string_route, parameter = num, str
    return (string + " ") * int(num)             #return value will output when app url is entered


@app.errorhandler(404)                          #upon error happening with unknown page url entered
def not_found(error):                           #fxn not_found, parameter = error
    return "Sorry! No response. Try again."     #return value will output when app url is entered


if __name__ == "__main__":                      #keep this at the bottom of the code
    app.run(debug=True)