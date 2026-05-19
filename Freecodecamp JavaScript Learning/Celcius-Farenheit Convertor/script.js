// Celsius to Fahrenheit Converter
function convertCtoF(celsius) {
    return celsius * (9/5) + 32;
  }
  
  const celsiusTest1 = convertCtoF(0);
  const celsiusTest2 = convertCtoF(-30);
  const celsiusTest3 = convertCtoF(-10);
  const celsiusTest4 = convertCtoF(20);
  const celsiusTest5 = convertCtoF(30);
  
  console.log(celsiusTest1);
  console.log(celsiusTest2);
  console.log(celsiusTest3);
  console.log(celsiusTest4);
  console.log(celsiusTest5);