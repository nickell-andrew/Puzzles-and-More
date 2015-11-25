var options = [
  "+",
  "-",
  "/",
  "*",
  ""
];

var evaluateSolution = function (expressionString) {
  // chunk the string tracking operators
  var stringIdx = 0;
  var numbers = [];
  var operators = [];
  while (stringIdx < expressionString.length) {
    var chunk = "";
    while ( !isNaN( parseInt(expressionString[stringIdx]) ) ) {
      chunk += expressionString[stringIdx];
      stringIdx++;
    }

    numbers.push(chunk);

    if (expressionString[stringIdx] !== undefined) {
      operators.push(expressionString[stringIdx]);
    }

    stringIdx++;
  }
  //perform the operations in order pemdas (no parenthesis, no exponents)
  // loop through operators to find the multiplication and division
  for (var i = 0; i < operators.length; i++) {
    // apply them to the appropriate numbers
    if (operators[i] === '*') {
      var num1 = parseInt(numbers[i]);
      var num2 = parseInt(numbers[i+1]);
      numbers.splice(i, 2, num1 * num2);
      operators.splice(i, 1);
      i--
    } else if (operators[i] === '/') {
      var num1 = parseInt(numbers[i]);
      var num2 = parseInt(numbers[i+1]);
      numbers.splice(i, 2, num1 / num2);
      operators.splice(i, 1);
      i--
    }
  }

  // loop through remaining operators
  for (var i = 0; i < operators.length; i++) {
    // apply them to the appropriate numbers
    if(operators[i] === '+') {
      var num1 = parseInt(numbers[i]);
      var num2 = parseInt(numbers[i+1]);
      numbers.splice(i, 2, num1 + num2);
      operators.splice(i, 1);
      i--;
    } else if(operators[i] === '-') {
      var num1 = parseInt(numbers[i]);
      var num2 = parseInt(numbers[i+1]);
      numbers.splice(i, 2, num1 - num2);
      operators.splice(i, 1);
      i--;
    }
  }
  var evaluated = numbers[0];
  return evaluated;
}

var expressionToTarget = function (numberString, target) {
  var results = [];
  var inner = function (preFix, index) {
    // console.log(preFix, index);
    //base case: if we have used each number and our expression equals the target
    if (index === numberString.length) {
      //console log the current expression and add it to our results array
      if(evaluateSolution(preFix) === target) {
        results.push(preFix);
        console.log(preFix, ' = ', target);
      }
      return;
    } else {
      //grab the current character
      // preFix += numberString[index];  
      //recursively call our function, with each operator added and with no operator added
      for (var i = 0; i < options.length; i++) {
        if(index > 0) {
          inner(preFix + options[i] + numberString[index], index + 1);
        } else {
          inner(preFix + numberString[index], index + 1)
        }
      }
    }
  };
  // call inner function with empty string (prestring) and 0 (current index in numberStrin
  inner("", 0);
  // console.log(results);
  return results;
};