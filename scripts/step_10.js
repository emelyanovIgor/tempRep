/*
Дано число n (n > 0). Верните из функции значение двойного факториала: n!!=n∗(n−2)∗(n−4)∗...∗2
(или 1, в зависимости от четности n).

Пример, для n = 5: n!!=5∗3∗1=15,
для n = 6: n!!=6∗4∗2=48

Sample Input 1:
3
Sample Output 1:
3
Sample Input 2:
7
Sample Output 2:
105
*/


function testCycle(n) {
  var factorial = 1;

  while (n >= 1) {
    factorial *= n;
    n -= 2;
  }
  // if (n % 2 !== 0)

  return factorial;
}

function validation(inputValue, outputValue, callback) {
  console.log(`for input = ${inputValue}, output = ${outputValue}: `);
  if (callback(inputValue) === outputValue) {
    console.log('TEST PASSED');
  } else {
    console.log('TEST FAILED');
  }
}

validation(3, 3, testCycle);
validation(7, 105, testCycle);