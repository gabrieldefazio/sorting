const mergeSort = array =>{
  if (array.length < 2) return array
  else {
    array = split(array);
    let left = array[0];
    let right = array[1]
    console.log(array)
    return merge(mergeSort(left), mergeSort(right));
  }
}

const split = array =>{
  let center = array.length / 2
  return [array.slice(0, center), array.slice(center)];
}

const merge = (left, right) =>{
  let merged = [];
  let leftI = 0;
  let rightI = 0;
  while (leftI < left.length && rightI < right.length){
    if (left[leftI] > right[rightI]) merged.push(right[rightI++])
    else merged.push(left[leftI++])
  }
  for(; leftI < left.length; leftI++) merged.push(left[leftI++]);
  for(; rightI < right.length; leftI++) merged.push(right[rightI++]);
  return merged
}

let sorted = mergeSort([39,-1,9,2,64,100,63, -13])
console.log(sorted)