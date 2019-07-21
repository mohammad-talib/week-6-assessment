console.log('GOOD LUCK 👩‍💻 👨‍💻')
/* Q1:
Usind For Each
Create a function called addKeyPowerIndex
that takes an array of objects as a parameter
and return this array with add a key to each object
that is the (index) of this object in this array
and the value will be the (power) of the index

var arrOfObj1 = [
  { a: 12 },
  { b: 5 },
  { c: 16 },
  { d: 4 },
  { e: 3 }
]

Ex: addKeyPowerIndex(arrOfObj1)
=> [
  {0: 0, a: 12},
  {1: 1, b: 5},
  {2: 4, c: 16},
  {3: 9, d: 4},
  {4: 16, e: 3}
] 

var arrOfObj2 = [
  { a: 'cat' },
  { b: 'dog' },
  { c: 'duck' }
]

Ex: addKeyPowerIndex(arrOfObj2)
=> [
  {0: 0, a: 'cat'},
  {1: 1, b: 'dog'},
  {2: 4, c: 'duck'}
]   
*/

function addKeyPowerValue(array) {
  array.forEach(function (element, index) {
    element[index] = index ** 2
  });
  return array
}

/* Criteria Q1
Out of 5:
1: Use forEach and return the parameter that inserted (array in my case).
1: Pass element to the callback function or any name as the first parameter.
1: Pass index to the callback function or any name as the second parameter.
1: Write (the first parameter[the second parameter]=the second parameter).
1: Final answer 100% correct.
*/


/* Q2:
Usind Map
Create a function called decreseBy
that takes an array of numbers and number as a parameter
and return a new array after will decrease this number 
from each element in this array

var arrOfNum1 = [77,5,33]
Ex: decreseBy(arrOfnum1,10)
=> [67,-5,23]

Ex: decreseBy(arrOfNum1,-6)
=> [83, 11, 39]

*/

function decreseBy(array, num) {
  var result = array.map(function (element) {
    return element - num
  });
  return result
}

/* Criteria Q2
Out of 5:
1: Use map.
1: Return the varible that saved inisde what map return (result in this case).
1: Pass elemnt to the callback function or any name as the first parameter.
1: Return elemnt - the first parameter in the main function(num in this case).
1: Final answer 100% correct.
*/


/* Q3:
Using Filter
Create a function called nameLongerThan
that takes an array of objects and number as a parameter
and return a new array with the object has a value inside the key name
longer than this number

var arrOfObj3 = [
  { name: "alex" },
  { name: "mercer"},
  { name: "alice" },
  { name: "zaheer"},
  { name: "elizabeth"}
]
Ex: nameLongerThan(arrOfObj3,4)
=>[
  { name: "mercer"},
  { name: "alice" },
  { name: "zaheer"},
  { name: "elizabeth"}
]

Ex: nameLongerThan(arrOfObj3,6)
=>[
  { name: "elizabeth"}
]
*/

function nameLongerThan(array, long) {
  var result = array.filter(function (element) {
    return element.name.length > long
  });
  return result
}

/* Criteria Q3
Out of 5:
1: Use filter.
1: Return the varible that saved inisde what filter return (result in this case).
1: Pass elemnt to the callback function or any name as the first parameter.
1: Write the condition and return it
 (the first parameter in filter(element in this case).name.length
 > the secend parameter in the main function(long in this case) ).
1: Final answer 100% correct.
*/



/* Q4:
Using Reduce
Create a function called avgLength
that takes an array of objects of strings and key as a parameter
and return the avg of the length of this key inside this objects

var arrOfObj4 = [
  { name: "alex", food: "fried chiken" },
  { name: "mercer", food: "pizaa" },
  { name: "alice", food: "burger" },
  { name: "zaheer", food: "hot dog" },
  { name: "elizabeth", food: "eggs" }
]
Ex: avgLength(arrOfObj4,"name")
=> 6

Ex: avgLength(arrOfObj4,"food")
=> 6.8
*/
function avgLength(array, key) {
  var result = array.reduce(function (acc, element) {
    return acc + element[key].length
  }, 0)
  return result / array.length
}

/* Criteria Q4
Out of 5:
1: Use reduce.
1: Return the varible that saved inisde what reduce return and divide it by array length (result in this case).
1: Pass elemnt to the callback acc,elemnt
1: Return acc+element[key].length and use[] not . in the object.
1: Final answer 100% correct.
*/


