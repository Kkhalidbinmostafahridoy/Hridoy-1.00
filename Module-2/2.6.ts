{
    // 

    // constraints

    const addCourseToStudent=<T extends{id:number,name:string,email:string}>(student:T)=>{
        const course='next level web development';

        return {
            ...student,
            course
        }
    }

    const student3=addCourseToStudent({id:356232,name:'mr.y',email:'y@gmail.com',emni:'emni'})

    const student1=addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>
    ({id:356232,name:'mr.x',email:'x@gmail.com',devType:'next level dev'})

    const student2=addCourseToStudent({id:356232,name:'mr.y',email:'y@gmail.com',handwatch:'apple'})

    // 
}