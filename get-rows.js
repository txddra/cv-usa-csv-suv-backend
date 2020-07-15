// when i enter in a csv str that contains a new line, i should get back an array, with a line break//
const getRow = require('./get-row.js')

const getRows = function(csvStr){
  // putting
  let newArr = [];
  let ourStr = csvStr.split('\n');
for(const rows of ourStr ){
  newArr.push(getRow(rows))
}

  // // gets me to have a line break in the given data, but with strings.
  // let subArr = [];
  // let result = [];
  // let whatever = csvStr.split(',')
  // for(let i = 0; i < whatever.length; i++){
  //   //put values into new array
  //   if(whatever[i].includes('\n')){
  //     let newVar = whatever[i].indexOf('\n')
  //     // console.log(newVar)
  //     subArr.push(whatever[i].slice(0,newVar))
  //     result.push(subArr)
  //     subArr = [];
  //     subArr.push(whatever[i].slice(newVar))
  //   } else{
  //     subArr.push(whatever[i])
      
  //   }

    //
  
return newArr;

}
// console.log(result)
// return result;


if (typeof getRows === 'undefined') {
  getRows = undefined;
}


module.exports = getRows;
