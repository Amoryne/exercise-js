// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

   run.addEventListener('click', function (){
let last=fruits.pop();
let first = fruits.shift();

let newfirst=fruits.unshift('Banana');
let newlast=fruits.push('Kiwi')

alert(fruits);
});

})();
