// {
//     // basic data type

// // string

// let firstName:string='hridoy'

// // number type
// let roll:number=123

// // boolean
// let isAddmin:boolean= true

// // undefine
// let x :undefined=undefined

// // null
// let y:null=null

// let d:number;

// d=123

// // array

// let friend:string[]=['rachel','monika'];



// let eligibleRollList:number[]=[1,2,3]

// // tuple--->array-->order-->type of value

// let coordinates:[number,number]=[1,5]

// let ageName:[number,string,boolean]=[22,'hridoy',true]



// }

{

    let name:string='hridoy';

    let friend:string[]=['muin','sajib','nilim','shuvo']

    let d:number=6436;

    let x:boolean=true;

    let y:null=null;

    let c:undefined=undefined;

    let thisIsEligibleNumber:number[]=[11,22,33,55,66,44,33,33,22,43,45,54,43,32];

    let cordinate:[string,number,boolean,null,undefined]=['hridoy',21,true,null,undefined]

    let course:string='this is our mearn course'
    console.log(course)


    let Courses:{
        subject:string;
        courseCode:number;
        majorCode:string;
        UniversityName:string;
        totalStudent:number;
        DoYouStudyWell:boolean;
    }={
        subject:'OOP',
        courseCode:221,
        majorCode:'566',
        UniversityName:'Daffodil Unternation University',
        totalStudent:6777777777,
        DoYouStudyWell:true,
    }

Courses.DoYouStudyWell=true

    let address:{
        city:string;
        road:string;
        post:number;
        houseDetails:{
            building:string;
            unit:string;
            totalUnit:number;
            mainMen:{
                fathername:string;
                motherName:string;
                totalFamilyNo:number;
            }
        }
    }={
        city:'dhaka',
        road:'uttara 10 er 9',
        post:6712,
        houseDetails:{
            building:'sector 9 house',
            unit:'2/b',
            totalUnit:783,
            mainMen:{
                fathername:'dr.Golam Mostafa',
                motherName:'Afroza khatun',
                totalFamilyNo:647,
            }
        }
    }

address.post=7374

function add(num1:number,num2:number):number{
    return num1+num2;
}

add(11,22)


const arrayAdd=(num1:number,num2:number)=>(num1+num2)

const PoorUser={
    name:'hridoy',
    blance:0,
    addBlance(blance:number):string{
        return `this is blance ${this.blance+blance}`
    }
}

const arr:number[]=[11,22,33,44,55];

const newArray:number[]=arr.map((ele:number):number=>(ele*ele))



const array:number[]=[33,4,55,66,77,4,3,32]

const arrayNumber:number[]=array.map((elem:number):number=>elem*elem)



const roast:string[]=['hridoy','arosh','farin'];
const roast1:string[]=['hffd','gfsdh','ygsdha'];

roast1.push(...roast1);

const moster1={
    typeScript:'hridoy',
    react:'khalid',
    js:'yeasin',
}

const moster2={
    html:'hridoy',
    css:'tytdgy',
    python:'hridoy',
}

const monster={
    ...moster1,
    ...moster2
}




}


