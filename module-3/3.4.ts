{
    //instanceof guard

    class Animal{
        name:string;
        species:string;

        constructor(name:string,species:string){
            this.name=name;
            this.species=species;
        }

        makeSound(){
            console.log('I am making sound');
        }
    }

    class Dog extends Animal{
        constructor(name:string,species:string){
            super(name,species);
        }
        makeBark(){
            console.log(`You are Barking`)
        }
    }
    class Cat extends Animal{
        constructor(name:string,species:string){
            super(name,species);
        }
        makeMeaw(){
            console.log('i am Meawing')
        }
    }

    //smart way te handle krar jnno function use krte pri
    
    const isDog=(animal:Animal)=>{
        return animal instanceof Dog;
    }
    const isCat=(animal:Animal)=>{
        return animal instanceof Cat;
    }



    const getAnimal=(animal: Animal)=>{
        if(isDog(animal)){
            animal.makeBark();
        }else if(isCat(animal)){
            animal.makeMeaw()
        } else{
            animal.makeSound()
        }
    }
    const dog=new Dog('dog vai','dog')
    const cat=new Cat('cat vai','cat')
    getAnimal(dog)
    getAnimal(cat)
    }

    

    // 
