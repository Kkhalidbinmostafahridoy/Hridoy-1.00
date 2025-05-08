{
    // 
    /**
     * Description: Write a function that takes a string | number and returns:
    1. The length if it's a string
    2. The number multiplied by 2 if it's a number
     */
    function processInput(value:string | number ):number
    {
        if(typeof value==='string'){
            return value.length;
        }else{
            return value*2;
        }
    }
    console.log(processInput('hello'))
    console.log(processInput(30))

    // 
}