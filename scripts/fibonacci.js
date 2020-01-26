var fibonacciNumbers = [1, 1];
var numbersQuantity = 7;


function extracted(arr, qty) {
  for (var i = 2; i <= qty; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

var result = extracted(fibonacciNumbers, numbersQuantity);
console.log(result);

function recurs(arr, number) {
  if (number === 0 || number === 1) {
    return arr[number];
  } else {
    return recurs(arr, number - 1) + recurs(arr, number - 2);
  }
}

console.log(recurs(fibonacciNumbers, numbersQuantity));


/* Техническое задание

Напиши программу, которая считает числа Фибоначчи и последовательно записывает эти числа в массив.

Массив записан в переменную fibonacciNumbers. Первые два числа уже находятся в этом массиве.

Вам нужно дополнить массив: найти следующие числа в последовательности и записать каждое из них по порядку в массив.

Количество новых чисел в массиве ограничено. В переменной numbersQuantity указано сколько чисел нужно добавить в массив. Это значение не включает в себя два числа, которые изначально даны в массиве.

*/
