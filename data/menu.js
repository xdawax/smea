/*
 * The food avalible for purchase
 */

var food = [
    {
        "name": "Hamburgare",
        "kcal": 1337,
        "gluten": true,
        "lactose": true,
        "imageSrc": "hamburger.png"
    }
]


var burger = new Menu('Hamburger', 1337, true, false, 'hamburger.png');
var hotDog = new Menu('Hot Dog', 500, true, false, 'hotdog.jpg');
var nachos = new Menu('Nachos', 2000, true, true, 'nachos.png');
var sallad = new Menu('Sallad', 200, false, false, 'sallad.jpg');
var chickenWings = new Menu('Chicken Wings', 750, false, false, 'chicken_wings.jpg');


/*
 * The drinks avalible for purchase
 */

/*
var softDrinks = new Menu('Läsk', 100, false, false, 'softdrinks.jpg');
var beer = new Menu('Öl', 500, false, false, 'öl.jpeg');
var coffee = new Menu('Kaffe', 50, false, false, 'kaffe.jpeg');

var food = [burger, hotDog, nachos, sallad, chickenWings];
var drinks = [softDrinks, beer, coffee];
*/
