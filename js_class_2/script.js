/*
   function names can NOT have:
   - spaces
   - any special characters except _
   function names CAN have:
   - letters
   - numbers
   function naming convention is: firstSecondThirdFourth (called Camel Case)
*/
function showAlert() {
   console.log('Alert # 1');
   console.log('Alert # 2');
   console.log('Alert # 3');
   console.log('Alert # 4');
}

function secondFunc() {
   alert('Sarah Ahmed');
}

function changeColor(){
    document.querySelector('span').innerHTML = document.querySelector('input').value   ;
   
  document.querySelector('h1').style='font-family: Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif;background-color:aqua;color:blue'  ;
}
function removeBack(){
    document.querySelector('h1').style='font-family:fantasy;background-color:none;color:blue'  ;

}
function changeBack(){
    document.querySelector('body')=document.querySelector('input').value;

}
/*
Problem 1:show user input inside heading
    ( 1.Get input element user type something 
      2.Get value of input 
      3.Get heading element
      4.Change heading content   
        )

problem 2:

*/
// Single line comments

/*

This
is a
multi-line comment

*/

// An English paragraph has many SENTENCES. Each sentence ends with a FULL-STOP
// A Javascript code has many STATEMENTS. Each statement ends with a SEMI-COLON.

// Each JS statement is written on a separate line.