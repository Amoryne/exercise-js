// 07-classes/01-instances/script.js - 7.1: instances


(() => {    run.addEventListener('click', function (){ 
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        } 
        thecat() {
        return this.name + " " + this.age;
    }

}
let mycat = new Cat("Skitty","9 year");
let yourcat=new Cat("pixel","7year")
console.log(mycat.thecat()+ " Et " +yourcat.thecat());

});
})();
