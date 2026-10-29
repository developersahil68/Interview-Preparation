const sleep = (ms) =>{
 return new Promise((resolve) => setTimeout(resolve  , ms))
}

async function rateLimitedFetch(urls){
    const result = []

    for(let i  = 0; i < urls.length ; i+=5) {
      
        const batch = urls.slice(i , i+5);

        const batchResults = await Promise.all(
            batch.map( async (url) => {
                const response = await fetch(url)

                if(!response.ok){
                    throw new Error(`http error , ${response.message}`)
                }

                return response.json()
            })
        )
       result.push(...batchResults)

           if (i + 5 < urls.length) {
      await sleep(1000);
    }

    }

    return result
}