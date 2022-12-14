// Code your solution in this file!


let ft = 264
let HQ = 42

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - HQ)
}



function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet


}


console.log(distanceFromHqInBlocks(50))