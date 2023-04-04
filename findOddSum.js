function getSumOfArray(numbers){
    // console.log(numbers)
    let sum = 0;

    for(let i = 0; i < numbers.length; i++ ) {
        const index = i;
        // console.log(index);
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum)
    }
    return sum;
}



const myNumber = [12, 15, 17, 45, 50, 91, 49, 88, 60];

getSumOfArray(myNumber);
// console.log(myNumber);