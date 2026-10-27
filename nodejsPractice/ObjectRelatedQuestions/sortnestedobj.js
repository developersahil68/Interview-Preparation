// Problem:
// Given a nested JSON object, sort every object's keys alphabetically
// (case-insensitive), preserve arrays, preserve nesting, and don't mutate
// the original object.

// Pattern:
// Recursion + Object.keys() + Sorting

// Key idea:
// 1. Get object's keys.
// 2. Sort the keys.
// 3. Create a new object.
// 4. For every sorted key:
//    - Get its value.
//    - Recursively process it.
//    - Put it into the new object.
// 5. Return the new object.

// Important line:
// result[key] = sortObjectKeys(obj[key]);

// Meaning:
// Take the current key → get its value → recursively process that value
// → put the processed value into the new object.

// Things I initially struggled with:
// - What Object.keys() returns
// - What sortedKeys contains
// - How the sort comparator works
// - How the for...of loop builds the new object
// - How recursion enters the nested address object

// Revisit:
// Try solving it from scratch without looking at the solution.


const obj = {
    Name: "John",
    age: 20,
    address: {
        Zip: 123,
        city: "Delhi"
    }
};

function sortObjectKeys(obj) {
    if(obj === null || typeof obj != object){
        return obj;
    }
     
    if(Array.isArray(obj)){
     return   obj.map((item) => sortObjectKeys(item));
    }

     const sortobj = Object.keys(obj).sort((a , b) =>{
        a.localeCompare(b , undefined , {
            sensitivity:"base"
        } )
     })

     const ans = {};

     for(const key in sortobj){
        ans[key] = sortObjectKeys(obj[key]);
     }
     return ans;
}

// function sortNestedObj(obj) {
//     if(obj === null || typeof obj !== object) return obj;

//     if(Array.isArray(obj)){
//         obj.map((item) => sortNestedObj(item));
//     }

//     let ans = {};

//     const sortans = Object.keys(obj).sort((a , b) =>{
//         a.localeCompare(b , undefined , {
//             sensitivity: "base",
//         })
//     })

//     for(const sot of sortans){
//         ans[sot] = sortNestedObj[obj[sot]];
//     }
//     return ans;
// }










function dowork(obj){

    if(obj === null || typeof obj !== "object") return obj;

    if(Array.isArray(obj)){
      return  obj.map((item) => dowork(item))
    }


    const ans = {}


    const sortedobj = Object.keys(obj).sort((a , b) =>{
        a.localeCompare(b , undefined , {
            sensitivity: "base"
        })
    })


    for (const key of sortedobj){
        ans[key] = dowork(obj[key])
    }

    return ans;


}