function addition(){
  var x = document.getElementById("text1").value;
  var y = document.getElementById("text2").value;
  z = +x + +y

  document.getElementById("text3").value = z;
}

function subtraction() {
  var x = document.getElementById("text1").value;
  var y = document.getElementById("text2").value;
  z = +x - +y

  document.getElementById("text3").value = z;
}

function division(){
  var x = document.getElementById("text1").value;
  var y = document.getElementById("text2").value;
  z = +x / +y

  document.getElementById("text3").value = z;
}

function multiplication() {
  var x = document.getElementById("text1").value;
  var y = document.getElementById("text2").value;
  z = +x * +y

  document.getElementById("text3").value = z;
}
