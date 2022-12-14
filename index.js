// Code your solution in this file!


let ft = 264
let HQ = 42

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - HQ)  
}



function distanceFromHqInFeet(blocks) {
    let difference = distanceFromHqInBlocks(blocks);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return difference * ft

}




function distanceTravelledInFeet(start, destination) {
    let difference = Math.abs(start - destination)
    return difference * ft
    //returns the number of feet traveled
}
console.log(distanceTravelledInFeet(1,5))