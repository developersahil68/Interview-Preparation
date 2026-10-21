// function sortEmployee(employee){
//     return  [...employee].sort((a , b) => {
//         if(a.age !== b.age){
//             return a.age - b.age;
//         }

//         return a.name.localeCompare(b.name)
//     })
// }


function sort(employees){
    return [...employees].sort((a , b ) =>{
        if(a.age != b.age){
            return a.age - b.age;
        }

        return a.name.localcompare(b.name);
    })
}