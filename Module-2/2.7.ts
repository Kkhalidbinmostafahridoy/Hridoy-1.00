{
    // 
// generic contraints with keyof operators

type Vehicle={
    bike:string;
    car:string;
    ship:string;
}

type Owner='bike' | 'car' |'ship'//manually

type Owner2=keyof Vehicle


const getPropertyValue=<X,Y extends keyof X>(obj:X,key:Y)=>{
    return obj[key]
}


const User={
    name:'mr.hridoy',
    age:34,
    address:'dhaka'
}

const car={
    model:'rolse royel'
    year:200
}
const result1=getPropertyValue(car,'model')





    // 
}