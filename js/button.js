new Vue({
    el: '#orderButton',

    data: {
        title: 'New Button'
    },

    methods: {
        submitOrder: function () {
            sendOrder();
        }
    }
})

function sendOrder()
{
    console.log('something');
    
    var addMilk = document.getElementById('extraMilk').checked;
    var addSugar = document.getElementById('extraSugar').checked;
    var sodaFlavour = document.getElementById('drinkSelector').value;

    for (dish in food) {
        var boxName = food[dish].name + 'Box';
        var box = document.getElementById(boxName);

        isOrdered = document.getElementById(food[dish].name + 'Box').checked;
        
        if (isOrdered) {
            console.log(food[dish].name);
        }
    }

    for (flavour in drink) {
        var boxName = drink[flavour].name + 'Box';
        var box = document.getElementById(boxName);

        isOrdered = document.getElementById(drink[flavour].name + 'Box').checked;
        
        if (isOrdered) {
            if (drink[flavour].name === 'Läsk') {
                console.log(sodaFlavour);
            }
            

            else {
                console.log(drink[flavour].name);
                
                if (drink[flavour].name === 'Kaffe') {
                    console.log('----------------');
                    if (addMilk) {
                        console.log('Mjölk');
                    }
                    if (addSugar) {
                        console.log('Socker');
                    }
                    console.log('----------------');
                }
            }
        }
    }

    alert("order sent");

}
