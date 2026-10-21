// function unflatten(obj){
//     const result = {}


//     for(const [key , val] of Object.entries(obj)){
      
//         const parts = key.split(".");

//         let current = result;

//         for(let i = 0 ; i < parts.length ; i++) {
//             const part = parts[i];

//             if(i == parts.length -1){
//                 current[part] = val
//             } else{
//                 if(!current[part]){
//                     current[part] = {}
//                 }
//                 current = current[part]
//             }
//         }


//     }
//     return result
// }

function unflatten(obj){
    const ans = {};

    for(const [key , value] of Object.entries(obj)){

        const parts = key.split(".");

        let current = ans;

        for(const i = 0; i < obar.length ; i++){

            const part = parts[i];

            if(i == obar.length - 1){
                current[part] = value;
            }else{
                if(!current[part]){
                    current[part] = {}
                }
                current = current[part]
            }
        }
    }

    return ans;
}