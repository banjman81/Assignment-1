const x = 6

// 7. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

  function addXToResultNoArrow(input1, input2){
    return input1 + input2 + x
  }

console.log("Question 7.", addXToResultNoArrow(1,2),)

// 8. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

  const addXToResultArrow = (input1, input2) => {
    return input1 + input2 + x
  }

  console.log("Question 8.", addXToResultArrow(5,2))

// 9. Write a function that returns another function. (use arrow functions please)

  const callBack = () => {
    return addXToResultArrow
  }

  console.log("Question 9.", callBack()(6,6))

// 10. given the following code:


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2))

// Explain why the function that returns from getFunction still has access to "y" if "y" is not a global variable.
  // It have access to the local variable fo getFunction because JS closures.



// 11. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and console log its result.
// Make sure to handle errors that could be thrown by "couldThrowError()"

const couldThrowError = () => {
  
  if(Math.ceil(Math.random() * 2) < 2){
    throw new Error("Error was thrown");
  }
  
  return 'success'
}

const errorChecker = () => {
  const message = couldThrowError()
  return message
}

try{
  console.log("Question 11.", errorChecker())
  
}catch(e){
  console.log("Question 11.", e.message)
}
  



