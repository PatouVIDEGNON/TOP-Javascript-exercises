const fibonacci = function(n) {
    return n < 1 ? "OOPS"
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2);
         /** 1er pas
          ****n < 1 ? 0 : n ===> verifie si la valeur n entrer par user est
          * inferieur a zero;
          * si vrai alors il return un int 0;
          * si faux, il return n (valeur saisie);
          **** 2em Pas
           n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2); ====>
           verifie si le n est inf ou egal a 2, si oui la function fibonaci() donne 1
            dans le cas contraire elle return  fibonacci(n-1) + fibonacci(n-2)
           il return fibona1
         
          */
           //Le comprends le code mais cest quoi le fibonacci meme je dois relire...

};



 


// Do not edit below this line
module.exports = fibonacci;
