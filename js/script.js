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

    this.containsGluten = function() {
        return this.gluten;
    }

    this.containsLactose = function () {
        return this.lactose;
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
var softDrinks = new Menu('Läsk', 100, false, false, 'softdrinks.jpg');
var beer = new Menu('Öl', 500, false, false, 'öl.jpeg');
var coffee = new Menu('Kaffe', 50, false, false, 'kaffe.jpeg');

var food = [burger, hotDog, nachos, sallad, chickenWings];
var drinks = [softDrinks, beer, coffee];


var dish;
var burger_table = ''; // stängs aldrig
var burger_table_head = '<thead>'; // stängs aldrig

for (dish in food) {
    burger_table_head += createTableHead(food[dish]);
    burger_table += createTable(food[dish]);
}

document.getElementById('burger_table').innerHTML = burger_table;
document.getElementById('burger_head').innerHTML = burger_table_head;

var drink;
var drink_table = ''; // stängs aldrig
var drink_table_head = '<thead>'; // stängs aldrig

for (drink in drinks) {
    drink_table_head += createTableHead(drinks[drink]);
    drink_table += createTable(drinks[drink]);
}

document.getElementById('drink_table').innerHTML = drink_table;
document.getElementById('drink_head').innerHTML = drink_table_head;

function createTableHead(data) {
    return "<th>" + data.getName() + "</th>";
}

function createTable(data) {

    var tbl = "<td>" + data.loadImage() + "</td>";

    if (data.containsGluten()) {
        tbl += "<ol><li>Innehåller:</li></ol>";
    }
    if (data.containsLactose()) {
        tbl += "<ol><li>Innehåller:</li></ol>";
    }
            
    return tbl;
}

function docLoaded(fn) {
	if (document.readyState !== 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

function indexPageLoaded() {
	displayItems();
}




