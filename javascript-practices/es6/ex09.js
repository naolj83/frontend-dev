const foods = [
    {no: 1, name: 'Bread', quantitiy: 10},
    {no: 2, name: 'Egg', quantitiy: 20},
    {no: 3, name: 'Milk', quantitiy: 50}
];

// forEach는 실행만 시켜줌
const arr1 = [];
foods.forEach(function(food, index) {
    arr1[index] = { no: food.no, n: food.name, q: food.quantitiy}
});

console.log(arr1);

// map은 내부에 배열 가지고 있음(Data Flow)
const arr2 = fodds.map((food) => ({ no: food.no, n: food.name, q: food.quantitiy }));

console.log(arr2);

// =>
// const arr2 = fodds.map(function(food) {
//     return { no: food.no, n: food.name, q: food.quantitiy};
// });
