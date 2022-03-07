
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');

    let age=prompt("How old are you?");
    let gender=prompt("What is your gender?");
    let town=prompt("Where do you live?");
    
     while(confirm("Continue?")) {
    console.log("This is a test!");
}
console.log("Test complete.");
   
    
})();
