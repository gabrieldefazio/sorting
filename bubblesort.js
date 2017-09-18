function bubbleSort (array) {
    let flag = true;
    if(!array.length) return array;


    for (let i = 0; i < array.length-1; i++) {

        if(array[i] > array[i+1]) {
            [array[i], array[i + 1]] = swap(array[i], array[i + 1]);
            if (flag) flag = false;
        }
    }
    if(flag) return array;

    return bubbleSort(array.slice(0,-1)).concat([array[array.length-1]])
}

function swap (a,b) {return [b,a]};

// const bubbleSort = array =>{
//     let flag = true;
//     if(!array.length) return array;
//     swap = (a,b) => [b,a];
//
//     for (let i = 0; i < array.length-1; i++) {
//         if(array[i] > array[i+1]){
//             console.log('before',[array[i], array[i+1]]);
//             console.log('after', swap(array[i], array[i+1]))
//                 [array[i], array[i+1]] = swap(array[i],array[i+1]);
//             //if(flag) flag = !flag;
//         }
//         //if(flag) return array;
//     }
//     console.log(array)
//     return bubbleSort(array.slice(0,-1)).concat([array[array.length-1]])
// }