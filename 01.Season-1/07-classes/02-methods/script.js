//07-classes/02-methods/script.js - 7.2: methods


(() => {
       run.addEventListener('click', function (){ 
    class person{
        constructor(firstname, lastname, age) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
        } 
        sayHello() {
        return "Hello "+ this.firstname + " " + this.lastname;
    }
    sayBye(){
        return "Good bye " + this.firstname;
    }
    askAge(){
        return alert("your age is" + this.age)
    }

}
let geralt = new person("Geralt","Rivia");
let martine = new person("Martine", "Troubadour", "8year");


console.log(geralt.sayHello() +" "+ martine.sayBye());
console.log(martine.askAge());

});
})();
