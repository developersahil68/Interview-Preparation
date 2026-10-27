function diffbttwoObj(obj1 , obj2){
    const ans = {}

    for(const key of Object.keys(obj1)){

        if(obj1[key] !== obj2[key]){
           ans[key] = {
           old : obj1[key] ,
           new :  obj2[key]
           }
        }
    }
    return ans;
}