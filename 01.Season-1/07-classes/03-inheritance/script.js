// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    //creer class animal
    class Animal {
        //name
        constructor(name){
            this.name = name;
        }
        //methode hello, appel methode static plus le nom
        sayHello(){
            return (this.constructor.greeting + "I'm"+this.name); 
        }
    }  //methode static sur la façon de dire bonjour pour chaque animal
    class Dog extends Animal{
        static greeting = 'Wouaf';
    }
    class Cat extends Animal{
        static greeting = "miaou";
    }
    run.addEventListener('click', function(){
//creer nouvel animal
        let maki = new Dog ( "Maki");
        console.log(maki.sayHello());
        let filoute = new Cat("Filoute");
        console.log(filoute.sayHello());
    })



})();
