/**
 * Description:
 * Define an interface Product and create a function to find the product with the highest price in an array.
 * If the array is empty, return null.
 */ 

interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
  
    let mostExpensive = products[0];
  
    for (let i = 1; i < products.length; i++) {
      if (products[i].price > mostExpensive.price) {
        mostExpensive = products[i];
      }
    }
  
    return mostExpensive;
  }
  
  // Example usage:
  const items: Product[] = [
    { name: "Phone", price: 799 },
    { name: "Laptop", price: 1200 },
    { name: "Tablet", price: 500 }
  ];
  
  console.log(getMostExpensiveProduct(items)); // Output: { name: 'Laptop', price: 1200 }
  console.log(getMostExpensiveProduct([]));     // Output: null
  