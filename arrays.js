'use strict';

// 1. printIndices
function printIndices(items) {

  for (const idx in items) {
    console.log(idx);
  }
  
}

// 2. everyOtherItem
function everyOtherItem(items) {

  let result = [];

  for (let i = 0; i < items.length; i+=2) {
    result.push(items[i]);
  }

  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {

  //sort items, slice items to (not including) index n, reverse slice
  const sorted_items = items.sort();
  let sliced_items = sorted_items.slice(0,n);
  console.log(sliced_items.reverse());
 
}
