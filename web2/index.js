function addition() {
  x = document.getElementById('txt1').value;
  y = document.getElementById('txt2').value;
  w = +y + +x
  document.getElementById('txt3').value = w;
}

function subtraction() {
  x = document.getElementById('txt1').value;
  y = document.getElementById('txt2').value;
  w = +y - +x
  document.getElementById('txt3').value = w;
}

function division(){
  x = document.getElementById('txt1').value;
  y = document.getElementById('txt2').value;
  w = +y / +x
  document.getElementById('txt3').value = w;
}

function multiplication(){
  x = document.getElementById('txt1').value;
  y = document.getElementById('txt2').value;
  w = +y * +x
  document.getElementById('txt3').value = w;
}

function calc(){
  document.write("Hello world")
}

function swap() {
  x = document.getElementById('txt1').value;
  y = document.getElementById('txt2').value;
  document.getElementById('txt3').value = Math.random();

}

console.log(Math.random());
