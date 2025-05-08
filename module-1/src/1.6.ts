{

// learning function
// normal function
// Arrow function

function add(num1:number,num2:number=10):number{
    return num1+num2
}

add(2,'2')

const addArray=(num1:number,num2:number):number=>num1+num2;

// object-->function-->method

const poorUser={
    name:'hridoy',
    blance:0,
    addBlance(blance:number):string{
        return `my new blance is:${this.blance+ blance}`
    }
}

const arr:number[]=[1,4,10]

const newArray:number[]=arr.map((elem:number):number=>elem*elem)



}