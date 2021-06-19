var arr = [3,5,66,78,23,44,11,32,58];

function SelectionSort(arr){
  var arr = arr.slice()
  for(let i =0; i< arr.length-1; i++){
    let min = i;
    for(let j= i +1 ;  j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j
      }
    }
   
   let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
   
    
  }
  return arr
}

console.log(SelectionSort(arr));

