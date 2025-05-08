{
//union type

type frontendDeveloper = 'fakibazDeveloper'| 'junior developer'
type fullstackDeveloper = 'frontendDeveloper'| 'expert developer'

type Developer=frontendDeveloper | fullstackDeveloper

const newDeveloper : FrontendDeveloper='juniorDeveloper'


type User={
    name:string;
    email?:string;
    gender:"male " | "female";
    bloodGroup:"o+"|"A+"|"AB+"
}

const user1:User={
    name:'hridoy',
    gender:'male ',
    bloodGroup:'o+',

}


type FrontendDeveloper={
    skills:string[];
    designation:'Frontend Developer'
}
type BackendDeveloper={
    skills:string[];
    designation2:'Backend Developer'
}

type FullstackDeveloper=FrontendDeveloper & BackendDeveloper

const fullstackDeveloper:FullstackDeveloper ={
    skills:['html','css','express'],
    designation:"Frontend Developer",
    designation2:'Backend Developer',
}







// 
}
// 