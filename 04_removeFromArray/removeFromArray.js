// const removeFromArray = function(arr, ...value) {

//     const newArray = [];
//     arr.forEach((item) => {
//         if (!value.includes(item)){
//             newArray.push(item);
            
//         }
        
//     });

//     return newArray
// };


var removeFromArray = function(array, ...value) {
      return array.filter(val => !value.includes(val))

    }


    
// Do not edit below this line
module.exports = removeFromArray;


