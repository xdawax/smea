var imageWidth = 150;


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
    select.setAttribute('name', 'orderBox');
    select.setAttribute('value', 'dricka lite lite bara');

    for (flavour in avalibleSoftDrinks) {

        var name = document.createTextNode(avalibleSoftDrinks[flavour]);
        var option = document.createElement('option');

        option.appendChild(name);
        select.appendChild(option);
    }

  
    softDrinks.appendChild(document.createElement('br'));
    softDrinks.appendChild(select);
}

function createCoffeeExtras()
{
    var coffee = document.getElementById('Kaffe');
    var input = document.createElement('input');

    var milk = document.createTextNode('Med mjölk');
    
    input.setAttribute('type', 'checkBox');
    input.setAttribute('id', 'extraMilk');
    input.setAttribute('class', 'coffeeExtra');
    input.setAttribute('text', 'med Mjölk');
    
    coffee.appendChild(document.createElement('br'));
    coffee.appendChild(input);
    coffee.appendChild(milk);

    if (document.getElementById('Kaffe').checked) {
        input.setAttribute('name', 'orderBox');
    }
}


function createFoodTableHead(table)
{
    
    for (i in food) {
        var tableHead = document.createElement('th');
        var name = document.createTextNode(food[i].name);

        tableHead.appendChild(name);
        table.appendChild(tableHead);
    }

}

function createDrinkTableHead(table)
{

    var length = drink.length;
    
    for (flavour in drink) {
        var tableHead = document.createElement('th');
        var name = document.createTextNode(drink[flavour].name);

        tableHead.appendChild(name);
        table.appendChild(tableHead);
    }

}

function createFoodTable(table)
{

    for (dish in food) {

        var checkBoxId = food[dish].name + 'Box';
        var checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('id', checkBoxId);
        checkBox.setAttribute('value', food[dish].name);
        checkBox.setAttribute('name', 'orderBox');
       
        var tableRow = document.createElement('td');
        var name = document.createTextNode(food[dish].name);
        var img = document.createElement('IMG');

        img.setAttribute('src', food[dish].imageSrc);
        img.setAttribute('class', 'foodTable');
        tableRow.setAttribute('id', checkBoxId);
        
        tableRow.appendChild(img);
        tableRow.appendChild(checkBox);
        displayAlergies(food[dish], tableRow);

        table.appendChild(tableRow);
    }
}

function createDrinkTable(table)
{

    for (flavour in drink) {

        var checkBoxId = drink[flavour].name + 'Box';
        var checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('id', checkBoxId);
        checkBox.setAttribute('value', drink[flavour].name);

        checkBox.setAttribute('name', 'orderBox');
        
        var tableRow = document.createElement('td');
        var name = document.createTextNode(drink[flavour].name);
        var img = document.createElement('IMG');

        img.setAttribute('src', drink[flavour].imageSrc);
        img.setAttribute('class', 'drinkTable');
        tableRow.setAttribute('id', drink[flavour].name);

        tableRow.appendChild(img);
        tableRow.appendChild(checkBox);
        
        table.appendChild(tableRow);
    }
}

function displayAlergies(food, table)
{
    console.log('displaying algergies');
    if (!(food.gluten || food.lactose)) {
        return;
    }
    else {

        console.log('inside else');
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



