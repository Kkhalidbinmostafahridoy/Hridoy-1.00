// destructing

{

    const user = {
        id: 345,
        name: {
            firstName: 'khalid',
            middleName: 'ben Mostafa',
            lastName: 'Hridoy',
        },
        contactNo: '01773627432',
        address: 'dhaka',
    };

    const {
        contactNo,
        name: { middleName:midName }
    } = user


// Array Destructuring

const myFriend=['chandler','joye','ross','rachel','molica',
    'phoebe']

const [,,bestFriend,...rest]=myFriend





























}