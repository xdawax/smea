function getOrderedFood(food) {

    var orderedFood = "\nMat: \n";
    var isOrdered;
    
    for (dish in food) {
        var boxName = food[dish].getName() + "_box";
        isOrdered = document.getElementById(boxName).checked;

        if (isOrdered) {
            console.log(boxName);
            orderedFood += food[dish].getName() + "\n";
        }
    }

    if (orderedFood === "\nMat: \n") {
        orderedFood += "Ingen mat beställd!\n";
    }

    
    return orderedFood;
}

function getOrderedDrinks(drinks) {
    var orderedDrinks = "\nDricka: \n";
    var isOrdered;

    for (flavour in drinks) {
        var boxName = drinks[flavour].getName() + "_box";
        isOrdered = document.getElementById(boxName).checked;

        var drinkType = drinks[flavour].getName();
        
        if (isOrdered) {
            if (drinkType === "Läsk") {
                var drink = document.getElementById('select_soft_drink');
                orderedDrinks += drink.value + "\n";
            }
            else if (drinkType === "Kaffe") {
                orderedDrinks += drinkType+ ", " ;
                orderedDrinks += getCoffeeStatus() + "\n";
            }
            else {
                orderedDrinks += drinkType + "\n";
            }
        }
    }

    if (orderedDrinks === "\nDricka: \n") {
        orderedDrinks += "Ingen dricka beställd!\n";
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

    var order = "";

    order += getOrderedFood(food);
    order += getOrderedDrinks(drinks);
    
    
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
        accessories += "Socker ";
    }
    if (milk) {
        accessories += "Mjölk";
    }
    if (!sugar && !milk) {
        accessories += "Vanligt svart";
    }
    
    return accessories;
}
