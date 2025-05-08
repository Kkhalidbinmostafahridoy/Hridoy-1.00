{
    // 
    // oop inheritance

    class Person{
        name:string;
        age:number;
        address:string;

        constructor(name:string,age:number,address:string){
            this.name=name;
            this.age=age;
            this.address=address;
        }
            getSleep(numOfHour:number){
                console.log(`${this.name} will sleep for ${numOfHour}`)
            }
    }

    class Student extends Person{

        constructor(name:string,age:number,address:string){
            super(name,age,address);
        }
    }

    const student1= new Student('hridoy',23,'dhaka')
    student1.


    class Teacher extends Person{
        designation:string;

        constructor(name:string,age:number,address:string,designation:string){
            super(name,age,address);
            this.designation=designation;
        }
            getSleep(numOfHour:number){
                console.log(`${this.name} will sleep for ${numOfHour}`)
            }

            takeClass(numOfClass:number){
                console.log(`${this.name} will take class  ${numOfClass}`)
            }
    }

    const teacher1= new Teacher('hridoy',23,'dhaka','asistance professor')
    teacher1.

    // 
}