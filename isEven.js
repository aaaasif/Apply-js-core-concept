// console.log(4/2);
// console.log(44/2);
// console.log(94/2);
// console.log(668/2);
// console.log(122/2);


// console.log(7/2);
// console.log(47/2);
// console.log(67/2);
// console.log(97/2);

// console.log(7%2);
// console.log(68%2);
// console.log(47%2);
// console.log(98%2);

function isEven(number){
    const remainder = number % 2;

    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumberIsEven = isEven(99);
console.log(myNumberIsEven)
const herNumberIsEven = isEven(888);
console.log(herNumberIsEven);