
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

 document.getElementById('target').innerHTML = 
new Date().getHours() >= 17 || new Date().getMinutes() >=30 ? 'Good evening' : 'Hello';

})();
