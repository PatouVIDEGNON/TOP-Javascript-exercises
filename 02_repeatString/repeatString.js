// const repeatString = function(monString, monNum) {
//    if (monNum < 0) {
//     return "error"
//    }
//     let repeatStr = "";

//     for (let i = 0; i <= monNum; i++) {
//         repeatStr += monString
//     }

//     return repeatStr
// };

// const repeatString = function (word, times) {
//     if (times < 0) return "ERROR";
//     let string = "";
//     for (let i = 0; i < times; i++) {
//       string += word;
//     }
//     return string;
//   };

  const repeatString = function (myString, myTimes) {
    
    let myRepeatString = "";

    if (myTimes < 0) {
        return "ERROR"
    }else if (myTimes === 1){
        return myString
    } else if(myTimes === 0){
        myTimes = "";

    };


    // switch(myTimes) {
    //     case 1:
    //          myRepeatString = myString;
    //       break;
    //     case 0: 
    //        "ERROR"
    //       break;
    //     //   case 0: 
    //     //    "ERROR"
    //     //   break;
          
    //     // default:
    //     //   // code block
    //   }

    for (let i = 0; i < myTimes; i++) {
        myRepeatString += myString;
    }
   
    
    return myRepeatString;
  }




// Do not edit below this line
module.exports = repeatString;
