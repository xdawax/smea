var imageWidth = 150;
var avalibleSoftDrinks = ['Coca Cola', 'Fanta', 'Sprite'];

function Menu (name, kcal, gluten, lactose, imageSrc) {
    this.foodName = name;
    this.foodKcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.imageSrc = imageSrc
    this.image = document.createElement("img");
    this.image.src = 'img/' + imageSrc;
    
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
        return "<img src=" + this.getImgURL() + " width=" + imageWidth + ">";
    }

    this.containsGluten = function() {
        return this.gluten;
    }

    this.containsLactose = function () {
        return this.lactose;
    }
}

function setImages(data) {
    var img = data.getImage();
    img.setAttribute('src', data.getImgURL);
}
/*
var img = crete the image
img.setAttribute('src', 'the value to set img');
*/
function displayItems() {

    /*
     * The food avalible for purchase
     */
    var burger = new Menu('Hamburger', 1337, true, true, 'hamburger.png');
    var hotDog = new Menu('Hot Dog', 500, true, false, 'hotdog.jpg');
    var nachos = new Menu('Nachos', 2000, false, true, 'nachos.png');
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
    var burgerTable = ''; 
    var burgerTableHead = ''; 

    for (dish in food) {
        burgerTableHead += createTableHead(food[dish]);
        burgerTable += createTable(food[dish]);
        //todo: setImages(food[dish]);
    }

    document.getElementById('burger_table').innerHTML = burgerTable;
    document.getElementById('burger_head').innerHTML = burgerTableHead;

    var drink;
    var drinkTable = ''; 
    var drinkTableHead = ''; 

    for (drink in drinks) {
        drinkTableHead += createTableHead(drinks[drink]);
        drinkTable += createTable(drinks[drink]);
       // todo: setImages(drinks[drink]);
    }

    document.getElementById('drink_table').innerHTML = drinkTable;
    document.getElementById('drink_head').innerHTML = drinkTableHead;

    var orderButton = document.getElementById('order_button');
    orderButton.addEventListener("click", function(){
        confirmOrder(food, drinks);
    });

}

function createSoftDrinkDropDown() {
    var dDown = "<br><select id=\"select_soft_drink\" name=\"ssd\">";

    for (flavour in avalibleSoftDrinks) {
        dDown += "<option>" + avalibleSoftDrinks[flavour] + "</option>";
    }

    dDown += "</select>";
    
    return dDown;
}

function createCoffeeAccessory() {

    var cList = "<br><input type=\"checkbox\" name=\"extra\" id=\"sugar\"> Socker</input><br>";
    cList += "<input type=\"checkbox\" name=\"extra\" id=\"milk\"> Mjölk </input>";
     
    return cList;
}

function getOrderedFood(food) {

    var orderedFood = "\nMat: \n";
    var isOrdered;
    
    for (dish in food) {
        orderedFood += food[dish].getName() + "\n";
    }

    
    return orderedFood;
}

function getOrderedDrinks(drinks) {
    var orderedDrinks = "\nDricka: \n";
    var isOrdered;

    for (flavour in drinks) {
        orderedDrinks += drinks[flavour].getName() + "\n";
    }

    return orderedDrinks;
}
        
function confirmOrder(food, drinks) {
    var orderButton = document.getElementById('order_button');

    if (orderButton.style.color === "red") {
        orderButton.style.color = "blue";
    }
    else {
        orderButton.style.color = "red";
    }

    var drink = document.getElementById('select_soft_drink');
    console.log(drink.value);

    var order = "";

    order += getOrderedFood(food);

    order += getOrderedDrinks(drinks);
    
    order += "Läsk:\n" + drink.value;

    order += "\n\Kaffe:\n";
    order += getCoffeeStatus();
    
    var send = confirm(order);

    if (send == true) {
        alert("Bestälning skickad!");
    } else {
        alert("Beställning avbruten!");
    } 
}

function getCoffeeStatus() {

    var accessories = '';

    var sugar = document.getElementById("sugar").checked;
    var milk = document.getElementById("milk").checked;

    if (sugar) {
        accessories += "Socker\n";
    }
    if (milk) {
        accessories += "Mjölk\n";
    }
    if (!sugar && !milk) {
        accessories += "Vanligt svart\n";
    }
    
    return accessories;
}

function createTableHead(data) {
    return "<th>" + data.getName() + "</th>";
}

function createTable(data) {

    var tbl = "<td>" + data.loadImage();

    tbl += "<br><input type=\"checkbox\" name=\"select\" id=" + data.getName() + "_box" + "\"></input><br>";

    if (data.containsGluten() || data.containsLactose()) {
        tbl += "<ul>Innehåller:";
    }

    if (data.containsGluten()) {
        tbl += "<li>Gluten</li>";
    }
    if (data.containsLactose()) {
        tbl += "<li>Laktos</li>";
    }
    // to close the ul
    if (data.containsGluten() || data.containsLactose()) {
        tbl += "</ul>";
    }

        if (data.getName() === 'Läsk') {
        tbl += createSoftDrinkDropDown();
    }
    else if (data.getName() === 'Kaffe') {
        tbl += createCoffeeAccessory();
    }
    tbl += "</td>";


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




