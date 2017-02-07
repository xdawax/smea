function Menu (name, kcal, gluten, lactose) {
    this.foodName = name;
    this.foodKcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;

    this.getProductInfo = function() {
        return 'Name: ' + this.foodName + ' contains ' + this.foodKcal + ' calories.';
    };
}

var burger = new Menu('burger', '1337', 'true', 'false');

console.log(burger.getProductInfo());
