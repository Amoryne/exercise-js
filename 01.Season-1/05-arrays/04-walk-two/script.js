// 05-arrays/04-walk-two/script.js - 5.4: walk through the list (2)


(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

run.addEventListener('click', function () {

fruits.forEach(function(item, index, array) {
  console.log(index,item);
});

});
})();
