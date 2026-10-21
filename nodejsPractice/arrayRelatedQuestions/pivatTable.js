const arr = [
 {month:"Jan",product:"Laptop",sales:10},
 {month:"Jan",product:"Phone",sales:5},
 {month:"Feb",product:"Laptop",sales:8},
 {month:"Feb",product:"Phone",sales:12}
]

function pivat(arr){

    const ans = {};

    for(const it of arr){
        const m = it.month
        const p = it.product
        const s = it.sales
        
        if(!ans[m]){
            ans[m] = {}
        }

        ans[m][p] = s;
    }
    return ans;

}