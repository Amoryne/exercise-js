// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

run.addEventListener('click', function (){


fruits.delete('apple');
fruits.delete('cherry');
fruits.add('Banana');
fruits.add('Kiwi');

fruits.forEach(function(value){
    console.log(value);
});




});
})();
