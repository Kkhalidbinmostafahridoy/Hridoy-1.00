{
// type Alias 
    type Student={
        name:string;
        age:number;
        gender:string;
        contact?:string;
        address:string;
    }



const student1:Student={
    name:'hridoy',
    age:23,
    gender:'male',
    contact:'73647432',
    address:'dhaka',
}


const strudent2:Student={
    name:'mimo',
    age:24,
    gender:'female',
    address:'gulsan',
}
const strudent3:Student={
    name:'mimo',
    age:24,
    gender:'female',
    address:'gulsan',
}


type UserName=string;
type isAdmin=boolean;

const userName :UserName='hridoy'

const areYouMarried:isAdmin=true


type Add=(num1:number,num2:number)=>number;

const add:Add=(num1,num2)=>num1+num2;
















// 
}