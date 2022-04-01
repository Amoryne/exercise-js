// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {
// let owner=document.querySelector("main.content");
let texte=document.querySelectorAll('.target');
texte.forEach(function(el){
console.log(el)
el.innerHTML="owned";
})
console.log(texte);

})();
