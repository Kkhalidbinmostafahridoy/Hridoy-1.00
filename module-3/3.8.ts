{
    // polymorphisom

    class Person{
        getSleep(){
            console.log(`i am sleeping for 8 hours per day`)
        }
    }

    class Student extends Person{
        getSleep(){
            console.log(`i am sleeping for 5 hours per day`)
        }
    }
    class Developer extends Person{
        getSleep(){
            console.log(`i am sleeping for 4 hours per day`)
        }
    }

    const getSleepHours=(param :Person)=>{
        param.getSleep()
    }

        const person1=new Person()
        const person2=new Student()
        const person3=new Developer()

        getSleepHours(person1);
        getSleepHours(person2);
        getSleepHours(person3)


        class Shape{
            getArea(radius:number):number{
                return 0;
            }
        }

        // pi*r*r
        class Circle extends Shape{
           radius:number;
           constructor(radius:number){
            super()
            this.radius=radius
           }

           getArea(): number {
               return Math.PI * this.radius* this.radius;
           }
        }

        // hight *weight
        class Rectangle extends Shape{
           height:number;
           weight:number;
           constructor(height:number,weight:number){
            super()
            this.height=height;
            this.weight=weight;
           }

           getArea(): number {
               return  this.height*this.weight;
           }
        }


        const getShapeArea=(param:Shape)=>{
            console.log(param.getArea())
        }

        const shape1=new Shape()
        const shape2=new Circle(10)
        const shape3=new Rectangle(10,20)

        getShapeArea(shape1)
        getShapeArea(shape2)
        getShapeArea(shape3)
        
    // 
    // 
}