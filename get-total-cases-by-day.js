const date = require('./get-date.js');
const totalCases = require('./get-total-cases.js');
const getDate = require('./get-date.js');

//takes in date str, and a 2d array
//loop through each row of data

const getTotalCasesByDay = function(dateStr, arr){

  for(const total of arr){
if(getDate(total) === dateStr){
  return totalCases(total)
}
}
}


// const getTotalCasesByDay = function(dateStr, arr){
//   let result = [];
//   for(let i=0; i < arr.length ; i++){
// //looping through the given array, to find the data for the date passed in
// result.push(dateStr[i]/*.toString(totalCases)*/)
// console.log(dateStr[i]- 1)  

// }
// return result;
// }





if (typeof getTotalCasesByDay === 'undefined') {
  getTotalCasesByDay = undefined;
}


module.exports = getTotalCasesByDay;
