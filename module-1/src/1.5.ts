{
    // reference type--->object

const user :{
    readonly company:string; //type--->literal type
    firstName:string;
    middleName?:string;   //optional type
    lastName:string;
    isMarried:boolean;
}={
    company:'programming hero',
    firstName:'Khalid',
    lastName:'bin',
    isMarried:true,
}

user.company='programming hero'

}