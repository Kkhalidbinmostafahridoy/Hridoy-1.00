{
    // 

    // mapped types

    const arrOfNumbers:number[]=[1,23,4343,4]

    // const arrOfStrings:string[]=['1','233','66243']

    const arrOfStrings:string[]=arrOfNumbers.map(number=>number.toString())

    console.log(arrOfStrings)


    type AreaNumber={
        height:number;
        weight:number;
    };

    type Height=AreaNumber['height']//lookup type
    // type AreaString={
    //     height:string;
    //     weight:string;
    // };
    // keyof AreaNumber=>'height'|"weight"

    // T=>{height:string,weight:number}
    // key=>'height'
    // key=>'weight'

    type AreaString<T>={
        [key in keyof T]: T[key]
    }

    const area1:AreaString<{height:string,weight:number}>={
        height:'100',
        weight:300
      }


    // 
}