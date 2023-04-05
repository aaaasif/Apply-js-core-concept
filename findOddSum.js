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
function getOddNumberOnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i< numbers.length; i++){
        const index = i;
        const element = numbers[index];
        // console.log(index, element)
        if(element % 2 !== 0 ){
            console.log(element)
            oddNumbers.push(element);
        }
    }
    return oddNumbers 
    
}



const myNumbers = [12, 15, 17, 45, 50, 91, 49, 88, 60];
const oddNumbers = getOddNumberOnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfArray(myNumbers);
console.log('odd Number Sum', oddNumberSum);
