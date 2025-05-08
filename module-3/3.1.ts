{
    //oop-class:--->
    
    class Animal{
        name:string;
        species:string;
        sound:string;

        constructor(name:string,species:string,sound:string){
            this.name=name;
            this.species=species;
            this.sound=sound;
        }

        makeSound(){
            console.log(`the ${this.name} says ${this.sound}`)
        }
    }

    const dog=new Animal('German shepard bhai','dog','khau kheu');
    const cat=new Animal('brazilian ','cat','mew');
    cat.makeSound()
    dog.makeSound()


    // 
}

{
    class Mans{
        name:string;
        age:number;
        occupation:string;

        constructor(name:string,age:number,occupation:String){
            this.name='hridoy';
            this.age=23;
            this.occupation='bekar';
        }
        makeSound(){
            console.log(` hi! this is ${this.name} I am ${this.age} I am a ${this.occupation}` )
        }

    }
    const human=new Mans('hridoy',23,'bekar')
    human.makeSound()
}


{
    class Car{

        constructor(public design:string,public price:number,public brand:string){
        }
        makeACar(){
            console.log(`this is design by ${this.design} It's price is ${this.price} Brand name ${this.brand}`)
        }
    }
    const Boroloks=new Car('Hridoy',300000000,'AFM')
        Boroloks.makeACar()
        
}