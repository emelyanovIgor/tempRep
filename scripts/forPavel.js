

/*Даны числа a и b. Выведите строку с числами между а и b включая границы, отсортированными по возрастанию.
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

3 4 5*/




/*function testCycle(a, b) {
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

console.log(testCycle(10, 10));*/


function testCycle(a, b) {
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