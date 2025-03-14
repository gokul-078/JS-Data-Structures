
// Object...
/*
An object is an unordered collection of key-value pairs. The key must either be a string or symbol data type where as the value can be of any data type.
To retrieve a value, you can use the the corresponding key. This can be achieved using the dot notation or bracket notation.
An object is not an iterable. You cannot use it with a for of loop.
*/

let obj = {
    name: "gokul",
    age: 23,
    "married": false,
    myAge: function(){
        console.log(`My age is ${this.age}`);
    },
    sayMyname: () => {
        console.log(`My name is gokul`);       // We can't use 'this' property in arrow function...
    }
}

console.log(obj);

// we can access elements inside the object by dot or bracket notation...
// Dot notation...
console.log(obj.name);
// bracket notation... In this type we give obj keys inside the double quote...
console.log(obj["age"]);
console.log(obj["married"]);  // This object property can't be accessed by dot notation...


// Adding elements into the object...
// By dot notation...
obj.hobby = "Cricket";
console.log(obj);
// By bracket notation...
obj["qualification"] = "B.E";
console.log(obj);

// accessing functions in obj...
obj.sayMyname()
obj.myAge();

// Deleting elements in an object...
delete obj.hobby
console.log(obj);


// Object.keys() .values() .entries()...  This all three will give all keys, values and all entries of object inside an array...
// Object.keys()
console.log(Object.keys(obj));

// Object.values()
console.log(Object.values(obj));

// Object.entries()
console.log(Object.entries(obj))



// Object - Big-O time complexity...
/*
Insert - O(1) Remove - O(1)
Access - O(1)
Search - O(n)
Object.keys() - O(n)
Object.values() — O(n)
Object.entries() — O(n)
*/


