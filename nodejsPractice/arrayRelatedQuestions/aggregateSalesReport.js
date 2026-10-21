function aggregateSales(sales){
    const grouped = {};

    for(const transaction of sales){
        const city = transaction.city;
        const amount = transaction.amout;
    
        if(!grouped[city]){
            grouped[city] = {
                totalSales :0,
                transaction : 0
            }
        }

        grouped[city].totalSales += amount;
        grouped[city].transactions++;
    
    }

    const result = []

    for(const [city , data] of Object.entries(grouped)){
          result.push({
            city: city,
            totalSales: data.totalSales,
            transactions: data.transactions,
            average: data.totalSales / data.transactions
        });
    }
}