const sumAll = function(n1, n2) {
    let sum = 0;
    if (n1 > n2) {
        for (let i = n2; i <= n1; i++) {
            sum += i
            
        }
    } else if (n1 < 0 || n2 < 0) {
        return "ERROR";
    } else if (!Number.isInteger(n1) || !Number.isInteger(n2) ) {
        return "ERROR"
        
    }
    
    
for (let i = n1; i <= n2; i++) {
    sum += i;
    
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;

