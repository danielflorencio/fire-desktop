import { useState } from "react";
import { FormEvent } from "react";
import { StockData } from "./IndexStockMarket";

interface ChooseStocksProps {
    stocksToSearch: StockData[],
    setStocksToSearch: React.Dispatch<React.SetStateAction<StockData[]>>,
    apiKey: string;
}

export default function ChooseStocks({stocksToSearch, setStocksToSearch, apiKey}: ChooseStocksProps){
    const [searchInputField, setSearchInputField] = useState<string>()
    const [error, setError] = useState<any>(null);

    function handleOnSearchChange(inputFieldValue: string){
        setSearchInputField(inputFieldValue)
    }
    function handleSubmit(e: FormEvent){
        e.preventDefault()
        const actualSearch = searchInputField?.toUpperCase()

        try {
            fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${actualSearch}&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => setStocksToSearch(data.bestMatches))
            .catch(error => console.error(error));
        } catch(error){
            setError(error)
        }
        
    }
    console.log('stockstoSearch value: ', stocksToSearch)
  
    return(
      <>
        <form onSubmit={e => handleSubmit(e)}>
        <label>Search for the desired stock: </label>
        <input type='text' value={searchInputField} onChange={e => handleOnSearchChange(e.target.value)}></input>
        <button type="submit">Search</button>
        </form>
      </>
    )
}
