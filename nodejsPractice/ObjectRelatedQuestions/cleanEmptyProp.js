function cleanEmp(obj) {
    if(obj === "" || obj === undefined || obj === null){
        return;
    }

  if(Array.isArray(obj)){
     return obj.map((item) => cleanEmp(item));
  }
     if (typeof obj !== "object") {
        return obj;
    }

  const ans = {}
  for(const [key , value] of Object.entries(obj)){
     if(value === "" || value === undefined || value === null){
       continue;
    }
    ans[key] = cleanEmp(value);
  }

return ans;
}