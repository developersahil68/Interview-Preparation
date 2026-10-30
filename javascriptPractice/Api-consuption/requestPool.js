// i have a problem in understanding this question 

async function promisePool(urls , limit){

    const result = new Array(urls.length)

    let nextIndex =  0;

    async function worker(){
        while(nextIndex < urls.length){
            const index = nextIndex;
            nextIndex++

            const response = await fetch(urls[index])

            if(!response.ok){
                return new Error("HTTP error" , response.status)
            }

            result[index] = await response.json()
        }
    }

    const workers = Array.from( {length : Math.min( limit, urls.length)} , () => worker())

    await Promise.all(workers)

    return result;
}