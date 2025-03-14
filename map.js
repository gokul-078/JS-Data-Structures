
// Map...
/*
A map is an unordered collection of key-value pairs. Both keys and values can be of any data type.
To retrieve a value, you can use the the corresponding key.
Maps are iterables. They can be used with a for of loop.
*/

/*
// Object vs Map
Objects are unordered whereas maps are ordered.
Keys in objects can only be string or symbol type whereas in maps, they can be of any type An object has a prototype and may contain a few default keys which may collide with your own keys if you're not careful. A map on the other hand does not contain any keys by default.
Objects are not iterables where as maps are iterables.
The number of items in an object must be determined manually where as it is readily available with the size property in a map.
Apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data.
*/


// Let initiate a map...
// Map itself accepts array as an argument...
// Here, we set 'a' as key for the one value where the 'a' is the string and the next one value two have number 2 as key... This is possible in map and we can't set this like in the object.
let map = new Map([['a', 1], [2, 'two']])

console.log(map);

// adding element in a map...
map.set('c', 3);
console.log(map);

// To check whether the map have an element or not...
console.log(map.has(2));
console.log(map.has('c'));
console.log('d');  // This will be false we don't have the 'd' as key for any element...

for(let [key, value] of map){
    console.log(`${key}: ${value}`);
}

// to size of the map...
console.log(map.size);

// To delete a key value pair in the map...
map.delete('c');
console.log(map);

// To clear all values in the map...
map.clear();
console.log(map);


