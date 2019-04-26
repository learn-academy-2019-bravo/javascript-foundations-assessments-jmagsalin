// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
divisibleThree = (number) => {if (number % 3 === 0) {console.log("divisible by three")}
                              else {console.log("is not divisible by three")}
                            }
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
var helloMe = {
        first_name : "Joel",
        last_name : "Magsalin",
        city_living : "San Diego",
        high_school : "St. Augustine"
}
function getInfo(object){
  var data =  [object.first_name, object.last_name, object.city_living, object.high_school]
  return data
}
console.log(getInfo(helloMe))
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
var groceryItems = ["apples", "meat", "fish" , "bread", "milk"]
function onlyThree(array){
  var newArr = []
  newArr.push(array[0], array[2], array[4])
    return newArr.join(" ")
}
  console.log(onlyThree(groceryItems));
// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
function alphabet(string) {
    return string.split('').sort().join('')}
    console.log("gatorade")
// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]
function numbersAnimals(array1, array2){
  var newArr = []
for (let i=0; i < array1.length; i++)
for (let i=0; i < array2.length; i++)
  newArr.push(array1[i]), array2[i])
  // }
  // for (i = 0; i < l; i++) {
  //   result.push(array1[i], array2[i]);
}
console.log(numbersAnimals(nums, nouns));



// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
var numbers = [4, 2, 46, 34, 13]
function timesFive (array) {
  var newArr = []
  for (let i=0; i<array.length; i++) {
    newArr.push(array[i] * 5)
  }return newArr
}
console.log(timesFive(numbers));
