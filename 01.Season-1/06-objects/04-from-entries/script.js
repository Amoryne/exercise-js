// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
 
  
run.addEventListener('click', function (){
let newkey=Object.entries(keys);
let newvalue=Object.entries(values);
console.log(newkey,newvalue );
});

})();
