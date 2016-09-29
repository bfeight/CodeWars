// Description:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Example:
// high_and_low("1 2 3 4 5")  # return "5 1"
// high_and_low("1 2 -3 4 5") # return "5 -3"
// high_and_low("1 9 3 4 -5") # return "9 -5"
// Notes:
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.




//My Solution 
function highAndLow(numbers){
 var split = numbers.split(" ")
 var newarray = [];
 var final= [];
 var parsednum;
 var splitlength;
 var answer;
 for (i=0; i < split.length; i++) {
   parsednum = parseInt(split[i]);
   newarray.push(parsednum)
   splitlength = newarray.length - 1
   newarray.sort(function(a,b) {
   return a-b })

   }
  final.push(newarray[0])
  final.push(newarray[splitlength])
  answer = final[1] + " " + final[0]
 return answer
}
