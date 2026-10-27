const arr =  [
"apple",
"banana",
"apple",
"orange",
"banana",
"apple"
]

function countFreq(arr){
  
    const data = {}

    for(const ar of arr) {

        if(!data[ar]){
            data[ar] = 1;
        }
        data[ar]++;

    }
    console.log(data);
    return data;
}





function freqCount(arr){
    const result = {}

    for(const key of arr){
        if(!result[key]){
            result[key] = 1;
        }else{
            result[key]++
        }
    }

    return result;
}

countFreq(arr);