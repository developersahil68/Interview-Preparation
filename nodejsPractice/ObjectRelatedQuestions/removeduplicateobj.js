// this question teaches us how to work with set data structure 

function removedup(arr) {
    const seen = new Set();

    const ans = []

    for (const obj of arr) {
        const key = JSON.stringify(obj);

        if(!seen.has(key)){
            seen.add(obj);
            ans.push(obj);
        }
    }

    return ans;
}

// function removedup(obj) {
//     const seen = new Set()

//     const ans = [];

//     for(const ob of obj){
//         const key = JSON.stringify(ob);

//         if(!seen.has(key)){
//             seen.add(ob);
//             ans.push(ob)
//         }
//     }

//     return ans;
// }


function dowork(arr){
    const seen = new Set()

    const ans = []
    for(const obj of arr){
        const key = JSON.stringify(obj);

        if(!seen.has(key)){
          seen.add(key)
            ans.push(obj)
        }
    }

    return ans;
}