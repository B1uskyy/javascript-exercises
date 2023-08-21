const fibonacci = function(number) {


    if (number < 0) {
        return "OOPS";
    }

    let x = Number(number); 

   let fib = 1; 
   let temp1 = 1;
   let temp2 = 1 

    if (number == 1) return 1; 

    for (let i = 3; i <= x; i++) {
        fib = temp1 + temp2; 
        temp2 = temp1; 
        temp1 = fib; 

       
    }

    return fib; 

};

fibonacci(3); 

// Do not edit below this line
module.exports = fibonacci;
