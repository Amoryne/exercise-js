//07-classes/02-methods/script.js - 7.2: methods


(() => {
       run.addEventListener('click', function (){ 
    class person{
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        } 
        sayHello() {
        return this.firstname + " " + this.lastname;
    }

}
let geralt = new person("Geralt","Rivia");

console.log(geralt.sayHello());

});
})();
