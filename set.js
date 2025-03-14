
// Set...
/* 
A set is a data structure that can hold a collection of values. The values however must be unique
Set can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same set
Sets are dynamically sized. You don't have to declare the size of a set before creating it
Sets do not maintain an insertion order
Sets are iterables. They can be used with a for of loop.
*/

// Set vs Array...
/*
#) Differences and characteristics b/w set & array...
Arrays can contain duplicate values whereas Sets cannot.
Insertion order is maintained in arrays but it is not the case with sets.
Searching and deleting an element in the set is faster compared to arrays. 
*/


// let see how to initialize a set...
// The set itself accepts array of input...
let set = new Set([1,2,3,"four"]);

console.log(set);


// To add a element in set...
set.add(4);

// To remove an element in set...
set.delete("four");

// We can't add a duplicate value in a set. If we add a duplicate value then it will omit that...
set.add(3);  // 3 will be unconsidered by the set...

// To see whether the required element is in set or not we use has()...
console.log(set.has(2));
console.log(set.has(5));

// To find the size of a set...
console.log(set.size);

// To iterate element in an array...
for(let val of set){
    console.log(val);
}

// To unset or clear all values in a set...
set.clear();
console.log(set);   // The set will be shown as zero...

