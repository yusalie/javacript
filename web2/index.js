calcArray=[];

function number(number){
  let numBox = document.getElementById("txt4");
  numBox.value += number;
}

function op(operator){
  let oper = document.getElementById("txt4");
  num1 = parseInt(oper.value);
  oper.value += operator;
  opera = oper.value;
}

function calc(sum){
  calcArray = document.getElementById("txt4").value;
  x = ''
  document.getElementById('txt4').value = x;
  document.getElementById("txt4").value = eval(calcArray);
}

function clr(){
  new_txt = ''
  document.getElementById('txt4').value =new_txt;
}
