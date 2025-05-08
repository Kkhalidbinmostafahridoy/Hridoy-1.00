// {
//     // 
//     // static
//     class Counter{
//         count:number=0;
//         increment(){
//            return (this.count=this.count+1);
//         }
//         decriment(){
//             return (this.count=this.count-1);
//         }
//     }

//     const instance1= new Counter()
//     console.log(instance1.increment()) ; //1--->different memory
//     console.log(instance1.increment()) ; //1--->different memory
//     console.log(instance1.increment()) ; //1--->different memory

//     const instance2=new Counter()
//     console.log(instance2.decriment()) ; //-1--->different memory
//     console.log(instance2.decriment()) ; //-1--->different memory

//     const instance3=new Counter()
//     console.log(instance3.increment());

//     // 
// }



{
    {
        // 
        // static
        class Counter{
            static count:number=0;
            static increment(){
               return (Counter.count=Counter.count+1);
            }
            static decriment(){
                return (Counter.count=Counter.count-1);
            }
        }
    
        
        console.log(Counter.increment()) ; //1--->different memory
        // console.log(instance1.increment()) ; //1--->different memory
        // console.log(instance1.increment()) ; //1--->different memory
    
        
        console.log(Counter.decriment()) ; //-1--->different memory
        // console.log(instance2.decriment()) ; //-1--->different memory
    
        // const instance3=new Counter()
        console.log(Counter.increment());
    
        // 
    }
}