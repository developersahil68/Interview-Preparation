function maxWindowSum(arr , k){
    if(k <= 0 || k > arr.length - 1) return null;

    let windowSum = 0;

    for(let i = 0; i < k ; i++){
        windowSum += arr[i];
    }

    let maxSum = windowSum;

    for(let i = k ; i < arr.length ; i++){
        windowSum = windowSum - arr[i-k] + arr[i];

        maxSum = Math.max(windowSum , maxSum);
    }
    return maxSum;
}