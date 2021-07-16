let order = "I would like to eat "
let food = game.askForString("What would you like to eat?")
order = "" + order + food
order = "" + order + ". I would also like to drink "
let drink = game.askForString("What would you like to drink?")
order = "" + order + drink
order = "" + order + ". I would also like dessert"
let dessert = game.askForString("What dessert would you like?")
order = "" + order + dessert
game.splash(order)
