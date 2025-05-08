{
// 
// interface

    type use1={
        name:string;
        age:number;
    }

    
    interface User2{
        name:string;
        age:number;
    }

    type userWithRole1=use1 &{role:string}

    interface userWithRole2 extends User2{
        role:string
    }

        
    const user1:userWithRole2={
        name:'hridoy',
        age:22,
        role:'student'
    }



    const user4:User2={
        name:'masud',
        age:23
    }


    // js object er object array object function object

    type roll=number[]

    interface roll2 {
        [index:number]:number
    }

    const roll1:roll=[1,2,3,4]
    const roll2:roll=[1,2,3,4]


    type Add1 =(num1:number,num2:number)=>number

    interface Add2{
        (num1:number,num2:number):number
    }

    const add:Add2=(num1,num2)=>num1+num2;


// 
}