const theDate = require('./get-date.js');
const getNewCases = require('./get-new-cases.js');
// we want to take in two parameters (the date/2d array)
//loop through each given row of data

const getNewCasesByDay = function(date,newCases){
for(const row of newCases){
  if(theDate(row)=== date){
    return getNewCases(row)
  }
}
}






if (typeof getNewCasesByDay === 'undefined') {
  getNewCasesByDay = undefined;
}


module.exports = getNewCasesByDay;
