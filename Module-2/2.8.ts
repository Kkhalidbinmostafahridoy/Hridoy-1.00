{
    // 
// promise
    // simulate string type

    type User={
        id:number,
        userId:number,
        title:string,
        completed:boolean,
    }

    const GetUsers=async():Promise<User>=>{
       const response=await fetch('https://jsonplaceholder.typicode.com/users')

       const data=await response.json()

       return data
    //    console.log(data)
    }

    GetUsers()

    const createPromise = ():Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = 'somethings';
            if (data) {
                resolve(data);
            } else {
                reject('failed to load data');
            }
        });
    }
    

    // calling create promise function

    const showData=async():Promise<string>=>{
        const data:string=await createPromise();
        return data
    }
    showData();

     // simulate boolean type


    // const dataCreateProise=():Promise<boolean>=>{
    //     return new Promise<boolean>((resol,rej)=>{
    //         const data1:boolean=true
    //         if(data1){
    //             resol(data1)
    //         }else{
    //             rej('failed to load data1')
    //         }
    //     })
    // }

    // const showDataPromise=async():Promise<boolean>=>{
    //     const data1=await dataCreateProise()
    //     return data1
    // }
    // showDataPromise();


    //  // simulate object type

    //  type Something={something:string};


    // const createtxPromise = ():Promise<Something> => {
    //     return new Promise<Something>((resolve, reject) => {
    //         const data2: Something = {something:'somethings'};
    //         if (data2) {
    //             resolve(data2);
    //         } else {
    //             reject('failed to load data');
    //         }
    //     });
    // }
    

    // // calling create promise function

    // const showData2=async():Promise<Something>=>{
    //     const data2:Something=await createPromise();
    //     return data2
    // }
    // showData2();
}