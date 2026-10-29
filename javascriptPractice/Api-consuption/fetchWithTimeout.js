async function fetchWithTimeout(url , ti){
    const controller = new AbortController()

    const timerId = setTimeout(() =>{
      controller.abort()
    }, ti) 

    try{
        const response = await fetch(url , {
            signal : controller.signal
        })

        if(!response.ok){
            throw new error(`http error  ${response.status}`)
        }
        return response
    }catch(error){
        if(controller.signal.aborted){
            throw new Error("timeout error")
        }

        throw error

    }finally{
        clearTimeout(timerId)
    }
}


async function main() {
    try{

        const response = await fetchWithTimeout("https://jsonplaceholder.typicode.com/users",
      5000);
        
        const data = response.json()
        
        return data
    }catch(error){ 

      console.log(error.message)

    }
}