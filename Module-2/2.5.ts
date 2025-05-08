{
    // 

// function with generic

    const createArray=(param:string):string[]=>{
        return [param]
    }

    const createArrayWithGeneric=<T>(param:T):T[]=>{
        return [param]
    }

    const rest1=createArray('bangladesh');
    const resGenetic=createArrayWithGeneric<string>('bangladesh')

    // type User={id:number ,name:string} //type ts

    interface User{
        id:number ,name:string
    }

    const resGeneticObjT=createArrayWithGeneric<User>({id:201-15-3722,name:'hridoy'})



    // 

    const createArrayWithTuple=<T,Q>(param1:T,param2:Q):[T,Q]=>{
        return [param1,param2]
    }

    const rest10=createArrayWithTuple<string,number>('bangladesh',673);
    const resTuple=createArrayWithTuple<string,{name:string}>('bangladesh',{name:'asis'})

    // type User={id:number ,name:string} //type ts

    interface User{
        id:number ,name:string
    }

    const resGeneticObj=createArrayWithGeneric<User>({id:201-15-3722,name:'hridoy'})

    const addCourseToStudent=<T>(student:T)=>{
        const course='next level web development';

        return {
            ...student,
            course
        }
    }

    const student1=addCourseToStudent({name:'mr.x',email:'x@gmail.com',devType:'next level dev'})

    const student2=addCourseToStudent({name:'mr.y',email:'y@gmail.com',handwatch:'apple'})

    // 
}