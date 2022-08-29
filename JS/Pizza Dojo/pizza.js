function pizzaOven(crusttype,saucetype,cheese,toppings) {
    var pizza ={};
    var pizza ={};
    pizza.crusttype=crusttype;
    pizza.saucetype=saucetype;
    pizza.cheese=cheese;
    pizza.toppings=toppings;
    return pizza;
};
var s1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(JSON.stringify(s1));

function pizzaOven(crusttype,saucetype,cheese,toppings) {
    var pizza ={};
    pizza.crusttype=crusttype;
    pizza.saucetype=saucetype;
    pizza.cheese=cheese;
    pizza.toppings=toppings;
    return pizza;
};
var s2 = pizzaOven("hand tossed", "marinara", ["mozzarella","feta"] ,["mushrooms", "olives", "onions"]);
console.log(JSON.stringify(s2));

function pizzaOven(crusttype,saucetype,cheese,toppings) {
    var pizza ={};
    pizza.crusttype=crusttype;
    pizza.saucetype=saucetype;
    pizza.cheese=cheese;
    pizza.toppings=toppings;
    return pizza;
};
var s3 = pizzaOven("italian crust", "marinara", ["mozzarella","emmental"], "pineapple");
console.log(JSON.stringify(s3));

function pizzaOven(crusttype,saucetype,cheese,toppings) {
    var pizza ={};
    pizza.crusttype=crusttype;
    pizza.saucetype=saucetype;
    pizza.cheese=cheese;
    pizza.toppings=toppings;
    return pizza;
};
var s4 = pizzaOven("thick crust", "ranch", ["mozzarella","emmental"], ["chicken","jalapeno","onions"]);
console.log(JSON.stringify(s4));

