const dt =  [
 [1,3],
 [2,6],
 [8,10],
 [15,18]
]

function mergeoverlap(data) {
    if(data.length <= 1) return data;

   data.sort((a , b) => a[0] - b[0]);

   const result = [data[0]];

   for(let i  = 1 ; i < data.length ; i++){
    const current =  result[result.length - 1];
    const next = data[i];

    if(next[0] <= current[1]){
        current[1] = Math.max(current[1] , next[0]);
    }else{
        result.push(next)
    }
   }
  console.log(result);
   return result

}





function mergeOverlap(intervals){
    
    intervals.sort((a , b) => {
        return a[0] - b[0];
    })
    const result = [intervals[0]]
    

    for(let i = 1 ; i < intervals.length ; i++){
        
       const last = result[result.length - 1];
       const next = intervals[i];

        
        

        if(last[1] >= next[0]){
            last[1] = Math.max(last[1] , next[1]);

        }else{

           result.push(next);
        }




    }

    return result;
}

mergeoverlap(dt);