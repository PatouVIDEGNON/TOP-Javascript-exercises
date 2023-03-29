const palindromes = function (string) {

    let resultForward = string.toLowerCase().replace(/[^a-z]/g, "");
    return resultForward.split("").reverse().join("") == resultForward
  


};

// Do not edit below this line
module.exports = palindromes;
