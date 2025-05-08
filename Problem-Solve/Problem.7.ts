{
    // 
    /**
     * Description:
    1. Define an enum Day for the days of the week.
    2. Create a function that returns "Weekday" or "Weekend" based on the input day.
     */
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    function getDayType(day:Day):string{
        if(day===Day.Monday || day===Day.Tuesday ||day===Day.Wednesday || day===Day.Thursday || day===Day.Friday ||day===Day.Saturday){
            return "weekday"
        }else{
            return 'weekend'
        }
    }
    console.log( getDayType(Day.Monday))
    console.log( getDayType(Day.Sunday))
    // 
}