const myArr = [2, 4, 8, 9, 10];
//ES5 Map Callback (given)


function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }


//ES2015 Arrow Functions Shorthand
const myDouble = arr => arr.map(val => val*2);

//double(myArr)=[4, 8, 16, 18, 20]
//myDouble(myArr)=[4, 8, 16, 18, 20]



//ES5 (given)
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }


//Refactored with ES2015

const mySquareAndFindEvens = numbers =>  (numbers.map(num => num**2)).filter(square => square % 2 ===0);
   
//squareAndFindEvens(myArr)=[4, 16, 64, 100];
//mySquareAndFindEvens(myArr)=[4, 16, 64, 100];
