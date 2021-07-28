const foods = [
    {no: 1, name: 'Bread', quantitiy: 10},
    {no: 2, name: 'Egg', quantitiy: 20},
    {no: 3, name: 'Milk', quantitiy: 50},
    {no: 4, name: 'Carrot', quantitiy: 20}

];

const res = foods.filter(food => food.quantitiy <= 20);

console.log(res);