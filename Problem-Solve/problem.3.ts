{
  //
  /**
   * Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.
   */
  function concatenateArrays<T>(...array: T[][]): T[] {
    return ([] as T[]).concat(...array)
  }

  const string=concatenateArrays(["a", "b"], ["c"]); 
  const number=concatenateArrays([1, 2], [3, 4], [5]); 
  const boolean=concatenateArrays([true,false],[false,true],[true],[false]); 

  console.log(string)
  console.log(number)
  console.log(boolean)

  //
}
