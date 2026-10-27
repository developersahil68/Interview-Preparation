
async function fetchWithRetry(url , retries){
    let latestError;

    for(let retry =0 ; retry < retries.length ; retry++){
        try{
            const response = await fetch(url);

            if(!response.ok){
                throw new Error(`http error  ${response.status}`)
            }

            return response
        }catch(error){
            latestError = error

            if(retry === retries){
                throw latestError
            }

            console.log(`Attempt ${retry + 1} failed . retrying`)
        }
    }
}


async function main() {
    try{

        const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/users" , 3)
        
        const response = await data.json();
        
        if(!response.ok){
            return new Error(`http error , ${response.status}`)
        }
        
        return response
    }catch(error){
       console.log("request failed with retries" , error.message)
    }
}