
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {
run.addEventListener('click', function (){
let year = document.getElementById("year").value;

// 


  function numberOfFridaythe13thsIn(jahr) {
    var count = 0;
    for (var month=0; month<12; month++) {
        var year = new Date(jahr,month,13);
        if(year.getDay() == 5){
          count++;
       }
    }
    return count;                            
}

alert(numberOfFridaythe13thsIn('year'));
});
})();










