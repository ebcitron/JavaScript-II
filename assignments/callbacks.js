// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
   // getLength passes the length of the array into the callback.
return cb(arr.length);
};

  getLength(items, function(first){
    console.log(first);

  });
   



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.slice(-1).pop());
}


last(items, function(last){
  console.log(last)
});



function sumNums(x, y, cb) {
return cb(x + y);
}
sumNums(1,7,function(add){
  console.log(add);

});


  // sumNums adds two numbers (x, y) and passes the result to the callback.


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
return cb(x*y);
}

multiplyNums(10,20, function(multiply){
  console.log(multiply)

});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}
  contains('Pencil', items ,console.log);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}



