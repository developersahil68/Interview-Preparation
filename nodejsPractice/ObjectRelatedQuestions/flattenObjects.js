function flattenObj(obj , prefix = "" , ans = {}){

    for(const [key , value] of Object.entries(obj)){

        const newKey = prefix ? `${prefix}.${key} ` : key;

         
        if(value !== null && typeof value === object){
            flattenObj(value , newKey , ans);
        }else{
            ans[newKey]  = value; 
        }

    }

    return result;
}





// function flattenObj ({obj , prefix = " " , ans = {}}){

//     for(const [key , value] of Object.entries(obj)){

//         const newKey = prefix ? `${prefix}.${key}` : key


//         if(value != null && typeof value === object){
//             flattenObj(obj , newKey , ans)
//         }else{
//             ans[newKey] = value
//         }
//     }

//     return ans
// }





function deepFlatten(obj){
    const ans = {}

    function inner(currObj , chain){

        for(const [key , value]  of Object.entries(obj)){

            const cha = chain ?  chain + "." + key : key;

            if(value !== null && value === 'object'){
                inner(value  , cha);
            }else{
                ans[cha] = value;
            }


        }

    }
    inner(obj , "");

    return ans;
}

function dowork(obj){
    const ans = {}

    function helper(currentobj , path){
        for(const [key , value ] of Object.entries(currentobj)){

            const newPath = path ? `${path}.${key}` : key;

            if(value !== null && typeof value === 'object'){
                 helper(value , newPath)
            }else{
                ans[newPath] = value
            }
        }
    }

    helper(obj , "");

    return result;
}