{
//ternary operator || optional chaining |nullish coalescing operator

const age:number=15;

if(age>=18){
    console.log('adult')
}else{
    console.log('sisu')
}

const isAdult = age >= 18 ?'adult':'not adult'
console.log({isAdult})


// nullish coalescing operators
// null and undefined upr vitti ore decission making er khetre

const isAuthenticated=""

const result1=isAuthenticated ?? 'guest'

const result2=isAuthenticated? isAuthenticated:'guest'

console.log({result1})
console.log({result2})


type User={
    name:string,
    address:{
        city:string,
        road:string,
        presentAdd:string,
        permanentAdd?:string,
    }
}
const user:User={
    name:'hridoy',
    address:{
        city:'dhaka',
        road:'aweasome',
        presentAdd:'dhakatwn'
    }
}

const permanentAdd=user?.address?.permanentAdd?? 'no permanentAdd';
console.log({permanentAdd})










// 
}