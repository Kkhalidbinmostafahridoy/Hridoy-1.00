{
  /**
     *Description: Create a function that takes a string and an optional boolean:
        1.If the boolean is true or not provided, return the string in uppercase.
        2.If the boolean is false, return the string in lowercase.  
     */


    function formateString(input:string, toUpper?:boolean):string{
        if (toUpper ===true || toUpper=== undefined){
            return input.toUpperCase()
        }else{
            return input.toLowerCase()
        }
    }
    console.log(formateString('hello'));
    console.log(formateString('hello',true));
    console.log(formateString('hello',false));
    console.log(formateString('Khalid Bi Mostafa Hridoy',true));
    console.log(formateString('Khalid Bi Mostafa Hridoy',false));
   
  //
}
