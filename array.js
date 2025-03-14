
// Builtin data structures are...
/*
Array
Object
Set
Map
*/

// Array is a collection of data that can be stored in a single variable...
// In javascript we can store multiple types data in a single variable there is no restrictions for to use only specific or single type of data in a variable array...

/*
An array is a data structure that can hold a collection of values
Arrays can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same array
Arrays are resizable. You don't have to declare the size of an array before creating
it
JavaScript arrays are zero-indexed and the insertion order is maintained
Arrays are iterables. They can be used with a for of loop.
*/


// let initiate an array with different data types...

const arr = [1,2,3,"four"];
console.log(arr);

// Some array methods...
// To insert a value into an array...
arr.push(5);
console.log(arr);

// To remove a last element from an array...
arr.pop();
console.log(arr);

// To insert a element in the starting index of an array...
arr.unshift(0);
console.log(arr);

// To delete a element at the starting index of an array...
arr.shift();
console.log(arr);


// We can iterate array through loops...
// for.. of.. loop..

for(let val of arr){
    console.log(val);
}


// We also have some set of array methods to handle large functions.
// Like map, filter, reduce, concat, slice and splice...

// Map... It access each element in a original array and return a new array...
let comArr = [1,2,3,4,5];

let mapArr = comArr.map((val) => {
    return val*2;
})
console.log(mapArr);


// Filter... It filters the given array and returns which elements are obeyed the condition...
let filterArr = comArr.filter((val) => {
    return val%2 === 0;
})
console.log(filterArr);


// Reduce... It reduces the all elements in an array to a single value and return that value...
let reduceArr = comArr.reduce((acc, val) => {
    return acc + val;
}, 0)
console.log(reduceArr);


// Concat... It joins a two array or combine two array...
let concatArr = comArr.concat(6,7,[8,9,10]);
console.log(concatArr);
// We can do concat by spread operator(...arr_name) too...
let spreadArr = [...comArr, ...concatArr];
console.log(spreadArr);

// Slice... It don't change the original array it just give the result of our methods only
console.log(comArr.slice(1,3));
console.log(comArr.slice(3));
console.log(comArr);

// Splice... splice(startingCount, totaldeletingCount, addingnewitems...)
// Splice changes the original values of an array...
console.log(comArr.splice(1, 2)); // It returns the deleted value...
console.log(comArr);
console.log(comArr.splice(0, 1, 2, 3));//Here, we deleting 1 element from starting index of 0 and adding two items 2 & 3.
console.log(comArr);


// Time Complexity...
/*
Array - Big-O time complexity
Insert / remove from end — O(1)
Insert/remove from beginning — O(n)
Access - O(1)
Search - O(n)
Push/pop - O(1)
Shift/ unshift/concat / slice / splice — O(n)
forEach/map/filter/ reduce - O(n)
*/
