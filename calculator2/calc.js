function sum() {ujk
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
    w = +x / +y
    document.getElementById('txt3').value = w;
  }

  function multiplication(){
    x = document.getElementById('txt1').value;
    y = document.getElementById('txt2').value;
    w = +y * +x
    document.getElementById('txt3').value = w;
  }
}
