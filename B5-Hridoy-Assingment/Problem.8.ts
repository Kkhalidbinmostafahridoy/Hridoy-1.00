{
  //
  /**
     * Description: Create an async function that:
    1. Returns the square of a number after 1 second
    2. Rejects if the number is negative
    3. Function Signature:
     */
  async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
      throw new Error("Negative number not allowed");
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(n * n);
      }, 1000); 
    });
  }
  squareAsync(4).then(console.log); 
  squareAsync(-3).catch(console.error);
  //
}
