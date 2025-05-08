{
// 

// generic type

type genericArray<T>=Array<T>
type genericArray1<T>=Array<T>
type genericArray2<T>=Array<T>

// const rollNumbers:number[]=[2,3,4,5,65,6];
// const rollNumbers:Array<number>=[2,3,4,5,65,6];
const rollNumbers:genericArray<number>=[2,3,4,5,65,6];


// const mentors:string[]=['mr.x','mr.y','mr.z'];
// const mentors:Array<string>=['mr.x','mr.y','mr.z'];
const mentors:genericArray1<string>=['mr.x','mr.y','mr.z'];

// const BoolArray:boolean[]=[true,false,true]
// const BoolArray:Array<boolean>=[true,false,true]
const BoolArray:genericArray2<boolean>=[true,false,true]

const user:genericArray<{name:string,age:number}>=[
    {
        name:'hridoy',
        age:32874,
    },
    {
        name:'jhankar vai',
        age:54365,
    },
    
]


const add=(x:number,y:number)=>x+y

add(34,20)




// generic tuple

type genericTuple<x,Y>=[X,Y]

    const manush:genericTuple<string,string>=['mr.x','miss.y']

    interface user {
        name:string,
        age:number,
        bool:boolean
    }

    const users:genericArray<user>=[
        {
            name:'hridoy',
            age:232,
            bool:true
        }
    ]




 // 
}