// 07-classes/04-getter-setter/script.js - 7.4: getter & setter

//

// Create a class named Person. 
// It will have two properties, 
// firstname and lastname, 
// as well as a getter name, 
// which will return "[firstname] [lastname]", 
// and a setter name, 
// which will divide the full name on the basis of a space: the first element will be the firstname, 
// the second the lastname.

// When the button is clicked, we create an instance of the Person class and display the value of the name inside the console, then assigns a new value to it and displays the state of the instance inside the console at the end of the process.

(() => {
    class Person {
        constructor(firstname,lastname,age){
            this.firstname = firstname;
            this.lastname = lastname;
            this.age=age;
        }
        get getName(){
            return this.firstname + " " + this.lastname;
        }
        set setName(newName){
            let words = newName.split (' ');
            this.firstname = words[0];
            this.lastname = words[1];
            this.age=words[2];
            console.log(this);
        }
    }
    run.addEventListener('click' , function(){
        let me = new Person('Amoryne', 'Jolimont')
        console.log(me);
        console.log(me.getName);
        me.setName = 'Maki ntoch troubadour';
    })
})();
