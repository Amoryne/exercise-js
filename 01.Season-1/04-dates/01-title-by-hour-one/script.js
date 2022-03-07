
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {




document.getElementById('target').innerHTML = 
new Date().getHours() >= 18 ? 'Good evening' : 'Hello';
 

})();
