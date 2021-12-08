function recursiveSum(arr){
  if (arr.length === 0){
	  return 0;
  } else{
	  return arr[0] += recursiveSum(arr.slice(1));
  }
}

const arr = [2,4,6];
recursiveSum(arr);
