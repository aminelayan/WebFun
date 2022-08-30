function pizzaOven(crusttype,saucetype,cheese,toppings) {
    var pizza ={};
    pizza.crusttype=crusttype;
    pizza.saucetype=saucetype;
    pizza.cheese=cheese;
    pizza.toppings=toppings;
    return pizza;
};
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(JSON.stringify(p1));

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella","feta"] ,["mushrooms", "olives", "onions"]);
console.log(JSON.stringify(p2));

var p3 = pizzaOven("italian crust", "marinara", ["mozzarella","emmental"], "pineapple");
console.log(JSON.stringify(p3));

var p4 = pizzaOven("thick crust", "ranch", ["mozzarella","emmental"], ["chicken","jalapeno","onions"]);
console.log(JSON.stringify(p4));

