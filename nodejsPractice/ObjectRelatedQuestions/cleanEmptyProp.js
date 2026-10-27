// function cleanEmp(obj) {
//     if(obj === "" || obj === undefined || obj === null){
//         return;
//     }

//   if(Array.isArray(obj)){
//      return obj.map((item) => cleanEmp(item));
//   }
//      if (typeof obj !== "object") {
//         return obj;
//     }

//   const ans = {}
//   for(const [key , value] of Object.entries(obj)){
//      if(value === "" || value === undefined || value === null){
//        continue;
//     }
//     ans[key] = cleanEmp(value);
//   }

// return ans;
// }



function cleanEmp(obj){

   if(obj === "" || obj === null || obj === undefined){
         return;
      }
   if(Array.isArray(obj)){
      return obj.map((item) => cleanEmp(item));
   }

   if(obj !== 'object') return obj;


   const ans = {}
   for(const [key , value] of Object.entries(obj)){
      
      if(value === "" || value === null || value === undefined){
         continue;
      }

      ans[key] = cleanEmp(value);
   }
}
