// function isLeapYear (year) {
//     const remainder = year % 4;
//     if(remainder === 0){
//         return true
//     }
//     else {
//         return false
//     }
// }


// function isLeapYear (year) {
//     const remainder = year % 4;
//     if(remainder === 0){
//         return true
//     }
//     return false
// }


// const isMyYearLeapYear = isLeapYear(1933);
// console.log('my year:', isMyYearLeapYear)
// const isHerYearLeapYear = isLeapYear(2020);
// console.log('Her Year:', isHerYearLeapYear)


// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = ('2100');

checkLeapYear(year);

