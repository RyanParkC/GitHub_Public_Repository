// pizza.getIngredients();

function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {
        "crustType": crustType,
        "sauceType": sauceType,
        "cheese": cheese,
        "toppings": toppings,
        "getIngredients": function() {
            console.log(`Crust: ${crustType}`);
            console.log(`Sauce: ${sauceType}`);
            console.log(`Cheese: ${cheese}`);
            console.log(`Toppings: ${toppings}`);
        }
    };
    return pizza;
}

// Setup for Random selection

let crusts = ['deep dish', 'pan', 'hand tossed', 'stuffed'];
let sauces = ['traditional', 'marinara', 'alfredo', 'ranch', 'buffalo'];
let cheeses = ['mozzarella', 'parmesan', 'feta', 'four cheese'];
let toppings = ['chicken', 'italian sausage', 'canadian bacon', 'ham', 'pepperoni', 'pineapple', 'onions', 'mushrooms', 'jalapenos', 'bell peppers', 'olives'];


// Testing for Random item selection from category Crusts

function randomIndex(arr){
    let randomIndice = arr[Math.floor((Math.random() * arr.length))];
    return randomIndice;
    
}
console.log(randomIndex(crusts));


// For Random Pizza

let randomPizza = pizzaOven(randomIndex(crusts),randomIndex(sauces),randomIndex(cheeses), randomIndex(toppings));
console.log(randomPizza);

randomPizza.getIngredients();