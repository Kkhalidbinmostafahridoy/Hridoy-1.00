{
// spread operator
// rest operator
// destructuring



// learn spread operator

const bros1:string[]=['mir','mizan','hridoy']
const bros2:string[]=['mumu','mim','meherun']

 bros1.push(...bros2)


 const mentors1={
    typescript:'Mezba',
    redux:'Mir',
    dbms:'mizan',
 }

 const mentors2={
    prisma:'firoz',
    nextjs:'tonmoy',
    cloud:'nahid'
 }

 const mentorList={
    ...mentors1,
    ...mentors2
 }

//  learn res operators

const greetFriends=(...friends:string[])=>{
    // console.log(`hi ${friend1} ${friend2} ${friend3} ${friend4}`);

    friends.forEach((friend:string)=>console.log(  `hi ${friend}`))
}

greetFriends('abu','tabu','jbu','tabu','ubu','lab')






}