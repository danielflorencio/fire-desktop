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

    // const symbols = ['MSFT', 'NFLX', 'STRIPE', 'SHOP', 'META', 'AMZN', 'GOOGL', 'UBER', 'TSLA', 'AAPL'];
    const symbols = ['MSFT', 'NFLX']


    useEffect(() => {
        const apiKey = '';
        // const apiKey = '';
        const fetchStockData = async () => {
          setIsLoading(true);
          setError(null);
    
          try {
            const requests = symbols.map(symbol =>
              fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`)
            );
            console.log('requests: ', requests)
            const responses = await Promise.all(requests);
            console.log('responses: ', responses)
            const data = await Promise.all(responses.map(response => response.json()));
            console.log("data: ", data)
            
            
            setStockData(
              data.map((item): any => ({
                
                symbol: item['Global Quote']['01. symbol'],
                price: parseFloat(item['Global Quote']['05. price']),
                change: parseFloat(item['Global Quote']['09. change']),
                changePercent: parseFloat(item['Global Quote']['10. change percent'].slice(0, -1))
                // changePercent: item['Global Quote']['10. change percent']
              }))
            );






            console.log('Stock Data: ', stockData)
            setIsLoading(false);
          } catch (error) {
            setError(error);
            console.log('Error: ', error)
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
    <ul>
        {stockData.map(stock => (
        <li key={stock.symbol}>
            <div>Symbol: {stock.symbol}</div>
            <div>Price: {stock.price}</div>
            <div>Change: {stock.change}</div>
            <div>Change %: {stock.changePercent}</div>
        </li>
        ))}
    </ul>
    );
}