function secondLargest(arr) {
    var max1st = arr[0];
    var max2nd = 0;
    
    for(var i=0; i<arr.length; i++) {
      if(arr[i] > max1st) {
        max2nd = max1st;
        max1st = arr[i];
      }
      else if(arr[i] > max2nd && arr[i] != max1st) {
        max2nd = arr[i];
      }
    }
    return max2nd;
  }
  
  console.log(secondLargest([100,2,4,54,27,98,99]));