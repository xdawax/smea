var imageWidth = 150;
var avalibleSoftDrinks = ['Coca Cola', 'Fanta', 'Sprite'];

/*
  TODO: move avalible soft drinks to json file and fix dd list

*/
function displayItems()
{

    var foodHead = document.getElementById('food_head');
    var foodTable = document.getElementById('food_table')

    var drinkHead = document.getElementById('drink_head');
    var drinkTable = document.getElementById('drink_table');

    createFoodTableHead(foodHead);
    createFoodTable(foodTable);

    createDrinkTableHead(drinkHead);
    createDrinkTable(drinkTable);

    createSoftDrinkDD();
    createCoffeeExtras();

}

function createSoftDrinkDD()
{

    var softDrinks = document.getElementById('Läsk');
    var select = document.createElement('select');
    select.setAttribute('id', 'drinkSelector');
    
    for (flavour in avalibleSoftDrinks) {

        var name = document.createTextNode(avalibleSoftDrinks[flavour]);
        var option = document.createElement('option');

        option.appendChild(name);
        select.appendChild(option);
        console.log(avalibleSoftDrinks[flavour]);
    }

    console.log(softDrinks);

    softDrinks.appendChild(document.createElement('br'));
    softDrinks.appendChild(select);
}

function createCoffeeExtras()
{
    var coffee = document.getElementById('Kaffe');
    var input = document.createElement('input');

    var milk = document.createTextNode('Milk');
    var sugar = document.createTextNode('Sugar');

    input.setAttribute('type', 'checkBox');
 
    input.setAttribute('class', 'coffeeExtra');

    input.appendChild(milk);
    
    coffee.appendChild(document.createElement('br'));
    coffee.appendChild(input);
    coffee.appendChild(document.createElement('br'));

    input = document.createElement('input');

    input.setAttribute('type', 'checkBox');
    input.setAttribute('value', 'sugar');
    input.setAttribute('class', 'coffeeExtra');

    input.appendChild(sugar);
    
    coffee.appendChild(input);

    console.log(milk);
    console.log(sugar);
    
}
    

function createFoodTableHead(table)
{

    var length = food.length;
    
    for (i = 0; i < length; i++) {
        var tableHead = document.createElement('th');
        var name = document.createTextNode(food[i].name);

        tableHead.appendChild(name);
        table.appendChild(tableHead);
    }

}

function createDrinkTableHead(table)
{

    var length = drink.length;
    
    for (i = 0; i < length; i++) {
        var tableHead = document.createElement('th');
        var name = document.createTextNode(drink[i].name);

        tableHead.appendChild(name);
        table.appendChild(tableHead);
    }

}

function createFoodTable(table)
{

    // var burgerTable = document.getElementById('food_table');

    var length = food.length;

    for (i = 0; i < length; i++) {

        var tableRow = document.createElement('td');
        var name = document.createTextNode(food[i].name);
        var img = document.createElement('IMG');

        img.setAttribute('src', food[i].imageSrc);
        img.setAttribute('class', 'foodTable');
        tableRow.setAttribute('id', food[i].name);

        tableRow.appendChild(img);
        displayAlergies(food[i], tableRow);

        table.appendChild(tableRow);
        console.log(name);
        console.log(tableRow);
    }
}

function createDrinkTable(table)
{

    var length = drink.length;

    for (i = 0; i < length; i++) {

        var tableRow = document.createElement('td');
        var name = document.createTextNode(drink[i].name);
        var img = document.createElement('IMG');

        img.setAttribute('src', drink[i].imageSrc);
        img.setAttribute('class', 'drinkTable');
        tableRow.setAttribute('id', drink[i].name);

        tableRow.appendChild(img);
       
        table.appendChild(tableRow);
        console.log(name);
        console.log(tableRow);
    }
}

function displayAlergies(food, table)
{
    if (!(food.gluten || food.lactose)) {
        return;
    }
    else {
        var unorderedList = document.createElement('ul');

        if (food.gluten) {
            var gluten = document.createTextNode('Gluten');
            var listElement = document.createElement('li');

            listElement.appendChild(gluten);
            unorderedList.appendChild(listElement);
        }

        if (food.lactose) {
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



