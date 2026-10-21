const employees = [
  { id: 1, name: "John", department: "Engineering" },
  { id: 2, name: "Alice", department: "HR" },
  { id: 3, name: "Bob", department: "Engineering" },
  { id: 4, name: "David", department: "Sales" },
  { id: 5, name: "Eva", department: "HR" }
];


function groupDep(employees){
    const res = {}

    for(const employee of employees){

        const department = employee.department

        if(!res[department]){
           res[department] = []
        }
        res[department].push(employee)
    }
    console.log(res);
    return res;
}

groupDep(employees)