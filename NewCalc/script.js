var OutPut = document.querySelector(".OutPut");

var InputPad = document.querySelector(".InputPad");
//getting the buttons from html
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btnDot = document.getElementById("btnDot");
var btnPlus = document.getElementById("btnPlus");
var btnMinus = document.getElementById("btnMinus");
var btnDivide = document.getElementById("btnDivide");
var btnMultiply = document.getElementById("btnMultiply");
var btnEquals = document.getElementById("btnEquals");
var btnClear = document.getElementById("btnClear");

//adding event listeners to every button
btn0.addEventListener("click", function () {
  //changing the output
  OutPut.textContent = OutPut.textContent + "0";
});
btn1.addEventListener("click", function () {
  OutPut.textContent = OutPut.textContent + "1";
});
btn2.addEventListener("click", function () {
  OutPut.textContent = OutPut.textContent + "2";
});
btn3.addEventListener("click", function () {
  OutPut.textContent = OutPut.textContent + "3";
});
btn4.addEventListener("click", function () {
  OutPut.textContent = OutPut.textContent + "4";
});
btn5.addEventListener("click", function () {
  OutPut.textContent = OutPut.textContent + "5";
});
btn6.addEventListener("click", function () {
  OutPut.textContent = OutPut.textContent + "6";
});
btn7.addEventListener("click", function () {
  OutPut.textContent = OutPut.textContent + "7";
});
btn8.addEventListener("click", function () {
  OutPut.textContent = OutPut.textContent + "8";
});
btn9.addEventListener("click", function () {
  OutPut.textContent = OutPut.textContent + "9";
});
btnDot.addEventListener("click", function () {
  OutPut.textContent = OutPut.textContent + ".";
});
btnPlus.addEventListener("click", function () {
  OutPut.textContent = OutPut.textContent + "+";
});
btnMinus.addEventListener("click", function () {
  OutPut.textContent = OutPut.textContent + "-";
});
btnDivide.addEventListener("click", function () {
  OutPut.textContent = OutPut.textContent + "/";
});
btnMultiply.addEventListener("click", function () {
  OutPut.textContent = OutPut.textContent + "*";
});
btnEquals.addEventListener("click", function () {
  OutPut.textContent = eval(OutPut.textContent);
});
btnClear.addEventListener("click", function () {
  OutPut.textContent = "";
});


