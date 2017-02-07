function Menu (name, kcal, gluten, lactose, image) {
    this.foodName = name;
    this.foodKcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
	this.image = document.createElement("img");
    this.image.src = 'https://foodimentaryguy.files.wordpress.com/2016/12/hamburger-0.jpg'
   
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
}

var burger = new Menu('burger', 1337, true, false);
var hotDog = new Menu('Hot Dog', 500, true, false);
var nachos = new Menu('Nachos', 2000, true, true);
var sallad = new Menu('Sallad', 200, false, false);
var chickenWings = new Menu('Chicken Wings', 750, false, false);

var food = [burger, hotDog, nachos, sallad, chickenWings];
var dish;
var table = '';

for (dish in food) {
/*
    console.log(food[dish].getImgURL());
    console.log(food[dish].getProductInfo());
*/
    table += createTable(food[dish]);

    /*
    document.getElementById('burgers').innerHTML += '<br>' + food[dish].getProductInfo() + '<br>';
    document.getElementById('burgers').appendChild(food[dish].getImage());
    */
    console.log(createTable(food[dish]));
}

console.log(table);
document.getElementById('burger_table').innerHTML = table;

function createTable(data) {
    return "<tr>" +
        "<td>" + data.getName() + "</td>" +
        "<td>" + data.getKcal() + "</td>" +
        "<td>" + "<img src=" + data.getImgURL() + " width=" + "100" + ">" + "</td>" +
        "</tr>";
}




