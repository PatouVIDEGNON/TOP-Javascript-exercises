const add = function(nb1, nb2) {
  return nb1 +nb2;
	
};

const subtract = function(nb1, nb2) {
  return nb1 - nb2;
	
};

const sum = function(array) {
  let sumArray = 0;
  array.map(
    element => sumArray += element 
   )
  return sumArray
	
};

const multiply = function(array) {
  //let multiplyValue = 0;
  return (array.length) ? array.reduce((accum, currentValue) => accum * currentValue) : "error";
  
 

  
};

const power = function(nb1, nb2) {
  
  return Math.pow(nb1, nb2);
	
};

function factorial(n) {
	
  if (n === 0) {
    return 1
    
  }

  return n * factorial(n-1);

/**
 * facto : la function s'appelle elle mme et constat
 * que elle doit returner au debut pour pourvoir faire 
 * operation demandée, jsqu_a ce qu'il se rend compte 
 * que la condition if l'a finalement soulager de ce va et vient
 */
 
    
  

  //  if (n === 0) {
  //   return 1
  //  }
  //  let facto = 1;
  //   for (let i = n; i > 0; i--) {
      
  //     facto *= i
  //   }
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
