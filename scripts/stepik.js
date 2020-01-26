/*
В этом задании вам нужно вычислить сумму всех четных чисел,
встречающихся в ряду от 1 до числа (включительно), передаваемого в нашу функцию (переменная "а").
*/

/*let number = 4;
let result = 0;
for (let i = 1; i <= number; i++) {
  if (i % 2 === 0) {
    result += i;
  }
}
console.log(result);*/
// let number = 0;


/*function sumOfEven(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      result += i;
    }
  }
  return result;
}
console.log(sumOfEven(4));*/

/*
function testWhile(a) {
  var x=0;
  // Тут нужно написать решение
  return x;
}*/

/*
function testWhile(a) {
  let x = 0;
  // Тут нужно написать решение
  for (let i = 1; i <= a; i++) {
    if (i % 2 === 0) {
      x += i;
    }
  }
  return x;

}
console.log(testWhile(3));
*/


/*let i = 1;
let result = 0;
// let result = 0;
// let counter = 0;
while (i <= 4) {
  if (i % 2 === 0) {
    result += i;
  }
  i+= 1;
}
console.log(result);*/


/*
for (let i = 1; i <= number; i++) {
  if (i % 2 === 0) {
    result += i;
  }
}
console.log(result);*/


/*
function testWhile(a) {
  var x=0;
  var i =1;
  // Тут нужно написать решение
  while (i <= a) {
    if (i % 2 === 0) {
      x += i;
    }
    i+= 1;
  }
  return x;
}
console.log(testWhile(4));*/


/*
for (let i = 1; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log('i= ' + i);
}*/


// ************************************************
/*
let yourName = prompt('Enter your name', 'Ivan');

function helloFunc() {
  console.log('Hello ' + yourName + '!')
}

helloFunc();*/

//*************************************************

//Найдите сумму  всех целых чисел от 1 до n включительно и верните из функции результат.

/*let number = 4;
let sum = 0;
for(let i = 1; i <= number; i++){
  sum+= i;
}
console.log(sum);*/


/*
function sumNumber(number) {
  let sum = 0;
  for(let i = 0; i <= number; i++){
    sum+= i;
  }
  return sum;
}
console.log(sumNumber(4));*/


/*
function testCycle(n) {
  var x = 0;
  // Тут нужно написать решение
  var sum = 0;
  for(let i = 0; i <= n; i++){
    x+= i;
  }
  return x;
}

console.log(testCycle(4));*/

//**********************************************************************************************************************

/*
Даны два целых числа k и n.
Верните из функции строку, которая состоит из чисел n, повторяющихся k раз, разделенных пробелом.
Известно, что и k и n больше либо равно 1.*/


/*
let k = 6;
let n = 5;
let result = "";

for (let i = 1; i <= k; i++) {

  result += " " + n;
}

console.log(result);
*/

//**********************************************************************************************************************

/*Даны числа a и b. Выведите строку с числами от а до b, разделенных пробелами.
Известно, что b больше a.*/

/*
let a = 6;
let b = 24;
let result = "";
if (b > a){
  for (let i = a; i <= b; i++){
    result+= " " + i;
  }
  console.log(result);
}else console.log ("b > a");
*/

//**********************************************************************************************************************

/*
Даны числа a и b. Выведите строку с числами между а и b включая границы, отсортированными по возрастанию.
Неизвестно, какое из чисел больше, но известно, что и a и b больше 0.

Sample Input 1:

8 1

Sample Output 1:

1 2 3 4 5 6 7 8

Sample Input 2:

6 6

Sample Output 2:

6

Sample Input 3:

3 5

Sample Output 3:

3 4 5
*/

/*
let a = 5;
let b = 5;
let result = "";
if (b >= a){
  for (let i = a; i <= b; i++){
    result+= " " + i;
  }
}else if(a > b){
  for (let i = b; i <= a; i++){
    result+= " " + i;
  }
}else{
  //console.log(result);
}
console.log(result);
*/


/*
function testCycle(a, b) {
  var x = "";
  if (b >= a) {
    for (var i = a; i <= b; i++) {
      x += " " + i;
    }
  } else if (a > b) {
    for (var i = b; i <= a; i++) {
      x += " " + i;
    }
  }
  return x;
}

console.log(testCycle(10, 10));
*/


/*function testCycle(a, b) {
  let i;
  let x = "";
  if (b >= a) {
    i = a;
    while (i <= b) {
      x += " " + i;
      i++;
    }
  }

  else if (a > b){
    i = b;
    while (i <= a){
      x += " " + i;
      i++;
    }
  }
  return x;
}

console.log(testCycle(2, 2));

*/

// ------------------------------------------------

//let inc = x => x+1;

//let inc = function(x) { return x + 1; };

// -----------------------------------------------


/*
testCycle = (a, b) => {
  let x = "";
  let i;
  if (b >= a) {
    for (i = a; i <= b; i++) {
      x += " " + i;
    }
  } else if (a > b) {
    for (i = b; i <= a; i++) {
      x += " " + i;
    }
  }
  return x;
};

console.log(testCycle(15, 10));
*/

// *********************************************************************************************************************

/*
Даны числа a и b. Выведите строку с числами от большего числа до меньшего. 
Известно, что и a и b больше либо равно 1, но неизвестно, какое из них больше.
  
Sample Input 1:

8 7

Sample Output 1:

8 7

Sample Input 2:

11 14

Sample Output 2:

14 13 12 11

Sample Input 3:

13 3

Sample Output 3:

13 12 11 10 9 8 7 6 5 4 3
*/

/*
function testCycle(a, b) {
  let result = "";
  let i;
  if (a >= b){
    for (i = a; i >= b; i--){
      result+= " " + (i*i);
    }
  }else if (a < b){
    for (i = b; i>= a; i--){
      result+= " " + i;
    }
  }
  return result;
}
console.log(testCycle(8, 4));
*/


/*
function testCycle(n) {
  let result = "";
  let i;
  for (i = 1; i <= n; i++) {
    result += " " + (i * i);
  }
  return result;
}
*/

/*
//вывод ряда нечётных
function testCycle(n) {
  let result = "";
  let i;
  for (i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result += " " + i;
    }

  }
  return result;
}*/

/*function testCycle(n) {
  let res = '';
  let sum = 0;
  let i;
  for (i = 1; i <= n; i += 1) {
    sum += 2 * i - 1;
    res += sum + ' ';
  }
  return res;
}

console.log(testCycle(7));*/

/*
function testCycle(n) {
    var x = "";
    var y = 0;
    for (i = 1; i <= 2 * n - 1; i = i + 2) {
        y = y + i;
        x = x + " " + y;
    }
    return x;
}*/


//**********************************************************************************************************************

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



/*
Дано число n (n > 0). Верните из функции следующую сумму: 1+1.5+2+2.5+...+n.
Задача довольно простая, подумайте, как можно задавать изменение счетчика, чтобы легко получить нужную сумму.

Sample Input 1:

9

Sample Output 1:

85

Sample Input 2:

2

Sample Output 2:

4.5
*/



function testCycle(n) {
  x += 1;
  let res = 0;
  let i;
  if (n > 0) {
    for (i = 1; i <= n; i += 0.5) {
      res += i;
    }
  }
  return res;
}

var x = 0;
console.log(testCycle(2));
console.log('Hello!');
console.log(testCycle(3));

//**********************************************************************************************************************

/*
Дано целое число n, большее 1. Найти квадрат данного числа, используя формулу n2=1+3+5+...+(2∗n−1).
Из функции необходимо вывести строку, состоящую из чисел, получающихся на каждом шаге при добавлении каждого слагаемого
(таким образом, получится строка из квадратов всех чисел от 1 до n).

Sample Input 1:

8

Sample Output 1:

1 4 9 16 25 36 49 64

Sample Input 2:

3

Sample Output 2:

1 4 9
*/