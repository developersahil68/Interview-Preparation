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

countFreq(arr);