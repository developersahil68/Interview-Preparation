async function getUser(){
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
        const users = await response.json()

        // console.log(users)

       const result = users.map((user) =>({
        id : user.id,
        fullName: user.name,
        city : user.address.city,
       }))
       console.log(result) 
       return result
   }catch(error){
    throw error
    }

}
getUser()