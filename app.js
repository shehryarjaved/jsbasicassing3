////// Q no 1      ///////

// const people = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Bob' },
//   ];
  
//   const names = people.map((person) => {
//     return person.name;
//   });
  
//   console.log(names); 


  ////// Q no 2      ///////
  
//   const people = [
//     { id: 1, name: 'John', age: 25 },
//     { id: 2, name: 'Jane', age: 17 },
//     { id: 3, name: 'Bob', age: 30 },
//   ];
  
//   const adults = people.filter((person) => {
//     return person.age >= 18;
//   });
  
//   console.log(adults);

 ////// Q no 3      ///////

//  const people = [
//     { id: 1, name: 'John', age: 25 },
//     { id: 2, name: 'Jane', age: 20 },
//     { id: 3, name: 'Bob', age: 30 },
//   ];
  
//   people.sort((a, b) => a.age - b.age);
  
//   console.log(people);

////// Q no 4      ///////

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });

// console.log(sum); 



////// Q no 5      ///////
  
  
// const people = [
//     { id: 1, name: 'John', age: 25 },
//     { id: 2, name: 'Jane', age: 30 },
//     { id: 3, name: 'Bob', age: 25 },
//   ];
  
//   const personWithAge25 = people.find((person) => person.age === 25);
  
//   console.log(personWithAge25);



////// Q no 6    ///////

// const strings = ["apple", "banana", "orange", "kiwi", "grape"];

// const result = strings
//   .filter((str) => str.length > 3) // Filter strings with length greater than 3
//   .map((str) => str.toUpperCase()) // Capitalize each string
//   .reduce((concatenatedString, currentString) => {
//     // Concatenate the strings
//     return concatenatedString + (concatenatedString ? ', ' : '') + currentString;
//   }, "");

// console.log(result);

////// Q no 7   ///////

// const numbers = [1, 2, 3, 4, 5];

// // Using an anonymous function as the callback
// const squaredNumbers = numbers.map((num) => {
//   return num * num;
// });

// console.log(squaredNumbers); 

////// Q no 8   ///////

// const numbers = [1, 2, 3, 4, 5];

// try {
//   const sum = numbers.reduce((accumulator, currentValue) => {
//     // Simulate a potential error condition (e.g., division by zero)
//     if (currentValue === 0) {
//       throw new Error('Cannot divide by zero.');
//     }

//     return accumulator / currentValue;
//   }, 0);

//   console.log(sum);
// } catch (error) {
//   console.error(error.message);
// }


////// Q no 9  ///////

//  using map 

//  const numbers = [1, 2, 3, 4, 5];

// // Immutably double each number using map
// const doubledNumbers = numbers.map((num) => num * 2);

// console.log(numbers);         // Original array remains unchanged
// console.log(doubledNumbers);  


// Using filter

// const numbers = [1, 2, 3, 4, 5];

// // Immutably filter out even numbers using filter
// const oddNumbers = numbers.filter((num) => num % 2 !== 0);

// console.log(numbers);    // Original array remains unchanged
// console.log(oddNumbers); 


////// Q no 10  ///////


// Using map:

// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map((num) => num * num);

// console.log(squaredNumbers); 


// Using forEach:

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = [];

// numbers.forEach((num) => {
//   squaredNumbers.push(num * num);
// });

// console.log(squaredNumbers); 



////// Q no 2  ///////

// const strings = ["apple", "banana", "kiwi", "grape", "pear", "orange"];

// const result = strings
//   .filter((str) => str.length >= 5) // Filter strings with length greater than or equal to 5
//   .map((str) => str.toUpperCase());  // Capitalize each remaining string

// console.log(result);


////// Q no 3  ///////

// const products = [
//     { name: 'Product A', price: 30 },
//     { name: 'Product B', price: 20 },
//     { name: 'Product C', price: 40 },
//     { name: 'Product D', price: 25 },
//   ];
  
//   // Sorting in descending order based on the 'price' property
//   products.sort((a, b) => b.price - a.price);
  
//   console.log(products);


////// Q no 4  ///////


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumOfEvenNumbers = numbers.reduce((accumulator, currentValue) => {
//   // Check if the current number is even
//   if (currentValue % 2 === 0) {
//     // Add the even number to the accumulator
//     return accumulator + currentValue;
//   }

//   // Otherwise, just return the accumulator without modification
//   return accumulator;
// }, 0);

// console.log(sumOfEvenNumbers);


////// Q no 5 ///////


// const items = [
//     { id: 1, name: 'Item A', status: 'pending' },
//     { id: 2, name: 'Item B', status: 'in-progress' },
//     { id: 3, name: 'Item C', status: 'pending' },
//   ];
  
//   const targetItemId = 2;
  
//   const foundItem = items.find(item => item.id === targetItemId);
  
//   if (foundItem) {
//     // If the item with the specified 'id' is found, update its 'status' property
//     foundItem.status = 'completed';
//     console.log(`Item with id ${targetItemId} updated to 'completed':`, foundItem);
//   } else {
//     console.log(`Item with id ${targetItemId} not found.`);
//   }
  
//   // Original 'items' array remains unchanged
//   console.log('Original items array:', items);
  

////// Q no 6 ///////

// const numbers = [5, -2, 10, -8, 3, 7, -1, 4];

// const positiveNumbers = numbers
//   .filter(num => num > 0) // Filter out positive numbers
//   .reduce((sum, num, index, array) => {
//     // Calculate the sum of positive numbers
//     sum += num;

//     // If it's the last iteration, calculate the average
//     if (index === array.length - 1) {
//       return sum / array.length;
//     }

//     return sum;
//   }, 0);

// const averageRounded = positiveNumbers.toFixed(2);

// console.log(`The average of positive numbers: ${averageRounded}`);


////// Q no 7 ///////



// function getAdults(people) {
//     // Use the filter method to select only adults
//     const adults = people.filter(person => person.age >= 18);
//     return adults;
//   }
  
//   // Example usage:
//   const people = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 17 },
//     { name: 'Bob', age: 30 },
//   ];
  
//   const adults = getAdults(people);
//   console.log(adults);


////// Q no 8 ///////


  
// const strings = ["apple", "kiwi", "banana", "grape", "orange", "pear"];

// const sortedStrings = strings.sort((a, b) => {
//   // Compare lengths first
//   const lengthComparison = a.length - b.length;

//   // If lengths are equal, maintain relative order
//   return lengthComparison !== 0 ? lengthComparison : strings.indexOf(a) - strings.indexOf(b);
// });

// console.log(sortedStrings);


////// Q no 9 ///////

// const arrayOfArrays = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8],
//   ];
  
//   // Flatten the array of arrays using the flat method
//   const flattenedArray = arrayOfArrays.flat();
  
//   // Calculate the sum of all numbers using the reduce method
//   const sum = flattenedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
//   console.log('Flattened Array:', flattenedArray);
//   console.log('Sum of All Numbers:', sum);
  

////// Q no 10 ///////


// const items = [
//     { id: 1, name: 'Item A' },
//     { id: 2, name: 'Item B' },
//     { id: 3, name: 'Item C' },
//   ];
  
//   // Function to find an item by id with a custom default object
//   const findItemById = (id, defaultValue) => {
//     const foundItem = items.find(item => item.id === id);
  
//     // If the item is not found, return the custom default object
//     return foundItem !== undefined ? foundItem : defaultValue;
//   };
  
//   // Example usage:
//   const itemIdToFind = 4;
//   const defaultItem = { id: itemIdToFind, name: 'Default Item' };
  
//   const resultItem = findItemById(itemIdToFind, defaultItem);
  
//   console.log('Result Item:', resultItem);
  



  








  