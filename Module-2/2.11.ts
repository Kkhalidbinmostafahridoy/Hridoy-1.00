{
    //
    
    // utilities type

    type person={
        name:string;
        age:number;
        email?:string;
        contact:number
    }

    type Name=Pick<person,"name">
    type NameAge=Pick<person,"name"|"age">
    type NameContact=Pick<person,"name"|"age"|"contact">
    type NameEmail=Pick<person,"name"|"age"|"contact"|"email">

    // omit

    type ContactInfo=Omit<person,"name"|"age">

    // required sob option gula k required  krbe dibe

    type PersonRequired=Required<person>

    // Partial sb required gula k optional baniye dibe
    
    type PartialPerson=Partial<person>
    type PartialPerson1=Partial<person>


    // read only object er value poribotton na krle read only use kre

    type PersonReadOnly = Readonly<person>;

const Pdetails: PersonReadOnly = {
    name: 'mr.x',
    age: 32,
    contact: 6437239
};

// record

    // type MyObj={
    //     a:string,
    //     b:string,
    //     c:number,
    // }


    type MyObj=Record<string,string>

    const EmptyObj:Record<string,unknown>={}//importent


    const obj1:MyObj={
        a:'aa',
        b:'bb',
        c:'33',
        d:'6734'
    }

    // 

}