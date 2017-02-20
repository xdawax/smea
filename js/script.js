var imageWidth = 150;
var avalibleSoftDrinks = ['Coca Cola', 'Fanta', 'Sprite'];

function Menu (name, kcal, gluten, lactose, imageSrc)
{
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

function setImages(data)
{
    var img = data.getImage();
    img.setAttribute('src', data.getImgURL);
}
/*
  var img = crete the image
  img.setAttribute('src', 'the value to set img');
*/
function displayItems()
{

    /*
     * The food avalible for purchase
     */
    var burger = new Menu('Hamburger', 1337, true, true, 'hamburger.png');
    var hotDog = new Menu('HotDog', 500, true, false, 'hotdog.jpg');
    var nachos = new Menu('Nachos', 2000, false, true, 'nachos.png');
    var sallad = new Menu('Sallad', 200, false, false, 'sallad.jpg');
    var chickenWings = new Menu('ChickenWings', 750, false, false, 'chicken_wings.jpg');

    /*
     * The drinks avalible for purchase
     */
    var softDrinks = new Menu('Läsk', 100, false, false, 'softdrinks.jpg');
    var beer = new Menu('Öl', 500, false, false, 'öl.jpeg');
    var coffee = new Menu('Kaffe', 50, false, false, 'kaffe.jpeg');

    var food = [burger, hotDog, nachos, sallad, chickenWings];
    var drinks = [softDrinks, beer, coffee];

    var foodHead = document.getElementById('food_head');
    var foodTable = document.getElementById('food_table')

    var drinkHead = document.getElementById('drink_head');
    var drinkTable = document.getElementById('drink_table');

    createTableHead(food, foodHead);
    createTable(food, foodTable);

    createTableHead(drinks, drinkHead);
    createTable(drinks, drinkTable);

}

function createTableHead(menu, table)
{

    
    for (item in menu) {
        var tableHead = document.createElement('th');
        var name = document.createTextNode(menu[item].getName());

        tableHead.appendChild(name);
        table.appendChild(tableHead);
    }

    
}

function createTable(menu, table)
{

    // var burgerTable = document.getElementById('food_table');

    for (item in menu) {

        var tableRow = document.createElement('td');
        var name = document.createTextNode(menu[item].getName());
        var img = document.createElement('IMG');

        img.setAttribute('src', menu[item].getImgURL());
        img.setAttribute('class', 'menuTable');

        tableRow.appendChild(img);
        displayAlergies(menu[item], tableRow);

        table.appendChild(tableRow);
        console.log(name);
        console.log(tableRow);

        

    }
}

function displayAlergies(food, table)
{
    if (!(food.containsGluten() || food.containsLactose())) {
        return;
    }
    else {
        var unorderedList = document.createElement('ul');

        if (food.containsGluten()) {
            var gluten = document.createTextNode('Gluten');
            var listElement = document.createElement('li');

            listElement.appendChild(gluten);
            unorderedList.appendChild(listElement);
        }

        if (food.containsLactose()) {
            var lactose = document.createTextNode('Lactose');
            var listElement = document.createElement('li');

            listElement.appendChild(lactose);
            unorderedList.appendChild(listElement);
        }
        

        table.appendChild(unorderedList);
    }
}

function docLoaded(fn)
{
	if (document.readyState !== 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

function indexPageLoaded()
{
	displayItems();
}



