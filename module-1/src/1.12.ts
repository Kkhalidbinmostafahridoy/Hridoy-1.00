{
// nullable types /unknown type

const searchName=(value:string | null)=>{
    if(value){
        console.log('searching')
    }else{
        console.log('there is nothing to search')
    }
};

searchName(null)



//  unknown type

const getSpreedInMeterPeSecond=(value:unknown)=>{
    if(typeof value==='number'){
        const convertedSpreed=(value*1000)/3600
        console.log(`the spreed is ${convertedSpreed}ms-1`)
    }
    else if(typeof value==='string'){
        const [result,unit]=value.split(' ')
        const convertedSpreed=(parseFloat(result)*1000)/3600
        console.log(`the spreed is ${convertedSpreed}ms-1`)
    }else{
        console.log('wrong')
    }
}
getSpreedInMeterPeSecond(`1000 kmh-1`)



// never type


const  throwError=(msg:string)=>{
    throw new Error(msg)
}

throwError('muskilse error hogaye')
// 
}