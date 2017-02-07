var image_width = 150;

function Menu (name, kcal, gluten, lactose, image_src) {
    this.foodName = name;
    this.foodKcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.image_src = image_src
    this.image = document.createElement("img");
    this.image.src = 'img/' + image_src;
   
   this.getProductInfo = function() {
        return this.foodName + ' contains ' + this.foodKcal + ' calories.';
    };
    
    this.printProductInfo = function() {
    	console.log(this.getProductInfo());
    }
    
    this.getImage = function() {
    	return this.image;
    }

    this.getImgURL = function() {
        return this.image.src;
    }

    this.getName = function() {
        return this.foodName;
    }

    this.getKcal = function() {
        return this.foodKcal;
    }

    this.loadImage = function() {
        return "<img src=" + this.getImgURL() + " width=" + image_width + ">";
    }
}

/*
 * The food avalible for purchase
*/
var burger = new Menu('Hamburger', 1337, true, false, 'hamburger.png');
var hotDog = new Menu('Hot Dog', 500, true, false, 'hotdog.jpg');
var nachos = new Menu('Nachos', 2000, true, true, 'nachos.png');
var sallad = new Menu('Sallad', 200, false, false, 'sallad.jpg');
var chickenWings = new Menu('Chicken Wings', 750, false, false, 'chicken_wings.jpg');

/*
 * The drinks avalible for purchase
 */
var sofDrinks = new Menu('Läsk', 100, false, false, 'softdrinks.jpg');
var beer = new Menu('Öl', 500, false, false, 'öl.jpeg');
var coffee = new Menu('Kaffe', 50, false, false, 'kaffe.jpeg');

var food = [burger, hotDog, nachos, sallad, chickenWings];
var drinks = [softDrinks, beer, coffee]


var dish;
var table = '';
var table_head = '<thead>';

for (dish in food) {

    console.log(food[dish].getImgURL());
    //console.log(food[dish].getProductInfo());
    table_head += createTableHead(food[dish]);
    table += createTable(food[dish]);


    /*
    document.getElementById('burgers').innerHTML += '<br>' + food[dish].getProductInfo() + '<br>';
    document.getElementById('burgers').appendChild(food[dish].getImage());
    */
    console.log(createTable(food[dish]));
}

document.getElementById('burger_table').innerHTML = table;
document.getElementById('burger_head').innerHTML = table_head;

function createTableHead(data) {
    return "<th>" + data.getName() + "</th>";
}

function createTable(data) {
    return "<td>" + data.loadImage() + "</td>";
}




