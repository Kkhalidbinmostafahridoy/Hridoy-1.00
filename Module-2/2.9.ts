{
    // 

    // conditional type

    type a1=number
    type b1=undefined

    type x=a1 extends null?true :false; //conditional

    type y=a1 extends null?true :b1 extends undefined ? undefined:any;


    type sheikh ={
        bike:string;
        car:string;
        ship:string;
        plane:string;
    }

    // keyof

    // car ase kina bike ase kina ship ase kina track ase kina
    type checkVehicle<T>=T extends keyof sheikh? true:false;

    type hasPlane=checkVehicle<'plane'>
    // 
}