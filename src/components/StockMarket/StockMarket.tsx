import { useState, useEffect } from 'react';

interface StockData {
    symbol: string;
    price: number;
    change: number;
    changePercent: number;
}

export default function StockMarket(){

    const [stockData, setStockData] = useState<StockData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    // const symbols = ['MSFT', 'NFLX', 'SHOP', 'META', 'AMZN', 'GOOGL', 'UBER', 'TSLA', 'AAPL'];
    const symbols = ['MSFT', 'NFLX', 'SHOP']


    useEffect(() => {
        const apiKey = '';
        const fetchStockData = async () => {
          setIsLoading(true);
          setError(null);
    
          try {
            const requests = symbols.map(symbol =>
            fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`)
            );
            const responses = await Promise.all(requests);
            const data = await Promise.all(responses.map(response => response.json()));            
            setStockData(
              data.map((item): any => ({      
                symbol: item['Global Quote']['01. symbol'],
                price: parseFloat(item['Global Quote']['05. price']),
                change: parseFloat(item['Global Quote']['09. change']),
                changePercent: parseFloat(item['Global Quote']['10. change percent'].slice(0, -1))
              }))
            );
            setIsLoading(false);
          } catch (error) {
            setError(error);
          }
        };
      fetchStockData();
    }, []);
    
      if (error) {
        return <div>An error occurred: {error.message}</div>;
      }
    
      if (isLoading) {
        return <div>Loading...</div>;
      }

      return (
        <div className='w-100'>
          <div style={{marginBottom: '6vh'}} className='d-flex justify-content-center align-items-center'><h1>Stocks</h1></div>
          <div style={{height: "6vh"}} className='d-flex align-items-center rounded border w-100 justify-content-around'>
            <div>Stock</div>
            <div>Price</div>
            <div>Change</div>
            <div>Change %</div>
          </div>
          {
            stockData.map(stock => (
              <div style={{height: "6vh", marginTop: '2vh'}} className='d-flex align-items-center rounded border w-100 justify-content-around'>
                <div>{stock.symbol}</div>
                <div>{stock.price}</div>
                <div className={stock.change > 0 ? 'text-success' : 'text-danger'}>{stock.change}</div>
                <div className={stock.change > 0 ? 'text-success' : 'text-danger'}>{stock.changePercent}</div>
              </div>    
            ))
          }
        </div>        
    );
}