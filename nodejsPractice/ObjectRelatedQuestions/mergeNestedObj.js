function mergeNestedObj(obj1 , obj2){
    const result = {...obj1}

    for(const [key , value] of Object.entries(obj2)){
        if(value !== null && typeof value === object && !Array.isArray(value) && result[key] !== null &&  typeof result[key] === object && !Array.isArray(result[key]) ){
            result[key] = mergeNestedObj(result[key] , value)
        }else{
            result[key] = value
        }
    }

    return result
}