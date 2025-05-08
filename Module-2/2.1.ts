{
// 

//  type assertion:

let anything:any;

anything="Next level development";

anything=333;

(anything as number).


const kgToGm=(value:string | number):string|number|undefined=>{
    if(typeof value==='string'){
        const convertedValue=parseFloat(value)*1000;
        return `the converted value is :${convertedValue}`;
    }
    if(typeof value==="number"){
        return value *1000
    }
}

const result1=kgToGm(1000) as number
const result2=kgToGm('1000') as string


type customError={
    massage:string
}

try{

}catch(error){
    console.log((error as customError).massage);
}

// 
{
    const hridoy=(value:number|string):string|number|undefined=>{
        if(typeof value==="string"){
            const result=parseFloat(value)*1000;
            return `this is result:${result}`
        }
        if(typeof value==="number"){
            return value*1000
        }
    }
    const result6=hridoy(1000) as number
}