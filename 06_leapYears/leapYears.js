const leapYears = function(year) {

    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)

//    let leapYears = "";
   
//     if (year%4 === 0) {
//         leapYears = true;
//     } else if((year%100 !== 0) || (year%400 === 0)){
//         return leapYears = true;
//     }
//     else {
//         return leapYears = false
//     }
   
// return leapYears;
};

// Do not edit below this line
module.exports = leapYears;
