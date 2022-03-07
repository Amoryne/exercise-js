
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

for (x=1; x<=100; x++){

    if(x%3 ){
        console.log("Fizz")
    }
if (x%5 ){
    console.log("buzz")
}
if((x%3 !=0 ) && (x%5 !=0)){
    console.log( "fizzbuzz")
}
if((x != x%3) || (x != x%5)) {
    console.log(x)
}
}




})();
