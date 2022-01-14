function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }



 function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
  }


  function temperatureConverter1(valNum1) {
    valNum1 = parseFloat(valNum1);
    document.getElementById("outputCelcius").innerHTML=(valNum1-32)/1.8;
  }