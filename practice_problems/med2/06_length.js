const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);  // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length);  // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', <empty item> ]
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['Javascript']
console.log(languages.length);  // 1

languages.length = 3;
console.log(languages);  // ['Javascript', <empty item>, <empty item> ]
console.log(languages.length);  // 3

languages.length = 1;   // ['JavaScript' ]
languages[2] = 'Python'; 
console.log(languages);  // ['JavaScript', <empty item>, 'Python']
console.log(languages[1]);  // undefined
console.log(languages.length);  // 3

// The above results are because if you alter the length of an array object. The object is mutated. This means that if increase the length of the array, new uninitialized elements are added to the end of the array.   If you reduce the size of the array, the elements in the array are truncated. 