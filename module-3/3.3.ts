{
    // 
    // typeof--->type guard

    type AlphaNewMeric= string|number;

    const add=(
        param1:AlphaNewMeric,
        param2:AlphaNewMeric
    ):AlphaNewMeric=>{

        if(typeof param1==='number' && typeof param2 === 'number'){
            return param1+param2;
        }else{
            return param1.toString()+param2.toString()
        }
       
    }

    const result1=add('2','3');
    console.log(result1);

    // in guard
    type Normaluser={
        name:string,
    }

    type AdminUser={
        name:string;
        role:'admin'
    }

    const getUser=(user:Normaluser|AdminUser)=>{
        if('role' in user){
            console.log(`my name is ${user.name} my role is ${user.role}`)
        }else{
            console.log(`my name is ${user.name}`)
        }
    }
    const normalUser:Normaluser={
        name:'hridoy'
    }
    const adminUser:AdminUser={
        name:'mr.admin',
        role:'admin'
    }
    getUser(adminUser)
    // 
}