{
    // abstraction:1-interface, 2-abstract


    // idea
    interface Vehicle1{
        startEngine():void;
        stopEngine():void;
        move():void;
    }
    // real implementation
    class Car1 implements Vehicle1{
        startEngine(): void {
            console.log(`i am starting the car engine`);
        }
        stopEngine(): void {
            console.log(`i am stoping the car engine`)
        }
        move(): void {
            console.log(`i am moving the car`)
        }
        test(){
            console.log(`i am just testing`)
        }
    }

    const toyotaCar=new Car1()
    toyotaCar.startEngine()
    toyotaCar.stopEngine()
    toyotaCar.test()

    // 
    // kivabe abstract class toiri kore;

    abstract class Car2{
        startEngine(): void {
            console.log(`i am starting the car engine`);
        }
        stopEngine(): void {
            console.log(`i am stoping the car engine`)
        }
        move(): void {
            console.log(`i am moving the car`)
        }
        test(){
            console.log(`i am just testing`)
        }
    }

    class ToyotaCar extends Car2{
        startEngine(): void {
            console.log(`this is car is start`)
        }
        stopEngine(): void {
            console.log(`this is car is stop in`)
        }
        move(): void {
            console.log(`this is card is moving in the hotel`)
        }
        test(): void {
            console.log(`this is car to tested`)
        }
    }

    const hundaCar=new Car2()
    hundaCar.startEngine()
}