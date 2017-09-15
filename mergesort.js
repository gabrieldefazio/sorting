const mergeSort = array =>{
    if (array.length < 2) return array;
    const splits = split(array),
        left = splits[0],
        right = splits[1];
    return merge(mergeSort(left), mergeSort(right))
};

const split = array =>{
    let center = array.lenth / 2;
    let left = array.slice(0, center);
    let right = array.slice(center);
    return [left, right];
};

const merge = (left, right) =>{
    let merged = [];
    let leftI = 0;
    let rightI = 0;
    while(leftI < left.length && rightI < right.length) {
        if (left[leftI] < right[rightI]) merged.push(left[leftI++])
        else merged.push(right[rightI++])
    }
    for(; leftI < left.length; leftI++) merged.push(left[leftI++]);
    for(; rightI < right.length; leftI++) merged.push(right[rightI++]);
    return merged
};