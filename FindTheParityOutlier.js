// Description:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns N.
// For example:
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160





// My Answer 
function findOutlier(integers){
 var evens = [];
 var odd = [];
 for ( i = 0; i < integers.length; i++) {
   var num = integers[i]
   if (num % 2 === 0) {
   evens.push(num)
   }
   if (num % 2 === 1 || num % 2 === -1) {
     odd.push(num)
   }

 }
 if (odd.length < evens.length) {
 return odd[0] } else {
 return evens[0] }
}
