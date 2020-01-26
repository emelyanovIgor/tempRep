/*
Дано число n (n > 0). Проверьте, простое оно или составное. Если число простое - верните из функции строку
"Простое число", если нет - "Составное число". Воспользуйтесь методом перебора делителей числа.
 */

function testCycle(n) {
  var value = 1;
  while (++value < n) {
    if (n % value === 0) {
      return 'Составное число';
    }
  }
  return 'Простое число';
}


function validation(inputValue, outputValue, callback) {
  console.log(`for input = ${inputValue}, output = ${outputValue}: `);
  if (callback(...inputValue) === outputValue) {
    console.log('TEST PASSED');
  } else {
    console.log('TEST FAILED');
  }
}

validation([3], 'Простое число', testCycle);
validation([27], 'Составное число', testCycle);