{
    // 
    /**
     * Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.
     */
    function filterByRating(items:{title:string,rating:number}[]):{
        title:string,
        rating:number,
    }[]
    {
        return items.filter(items=>{
            return items.rating>=4
        })
}
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book D", rating: 4.0 },
        { title: "Book E", rating: 2.0 },
        { title: "Book F", rating: 5.0 },
        { title: "Book F", rating: 4.1},
        { title: "Book F", rating: 3.999},
    ];
      console.log(filterByRating(books))







    // 
}
