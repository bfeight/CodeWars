// Description:
// Is Prime
// Define a function isPrime that takes one integer argument and returns true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Example
// isPrime(5)
// => true


// My Answer
function isPrime(n) {
var n = Math.abs(n);
if (n===1 || n===0)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x<n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;
  }
}
