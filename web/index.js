function greet(){
  var x = document.getElementById("text1").value;
  var y = document.getElementById("text2").value;
  prce = "R"
  z = prce + +x * +y

  document.getElementById("text3").value = z;
}
