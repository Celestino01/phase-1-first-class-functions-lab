  const returnFirstTwoDrivers = function(array){
        const newArray = [];
        for(let i = 0; i < 2; i++){
            newArray.push(array[i]);
        }
        return newArray
    }
    

const returnLastTwoDrivers = function(array){
    const newArray = [];
    for(let i = (array.length - 2); i < array.length; i++){
        newArray.push(array[i]);
    }
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplyValue){
    return function(value){
        return multiplyValue * value;
    };
}

// const fareDoubler = function(arg){
//     let multiplier = (createFareMultiplier(arg) * 2) / arg;
//     return multiplier;
// }
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };



