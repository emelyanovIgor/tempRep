/*
Найдите наибольший общий делитель чисел a и b.
(Подсказка: вам поможет алгоритм Евклида и цикл while).

Sample Input 1:
13 182

Sample Output 1:
13

Sample Input 2:
10 99

Sample Output 2:
1
*/

function testCycle(a, b) {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
}


function validation(inputValue, outputValue, callback) {
  console.log(`for input = ${inputValue}, output = ${outputValue}: `);
  if (callback(...inputValue) === outputValue) {
    console.log('TEST PASSED');
  } else {
    console.log('TEST FAILED');
  }
}

validation([13, 182], 13, testCycle);
validation([10, 99], 1, testCycle);