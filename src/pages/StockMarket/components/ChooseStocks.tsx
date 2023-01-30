import { useState, FormEvent } from "react";
import { StockData } from "..";
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
        let arrayOfStocks
        try {
            fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${actualSearch}&limit=2&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                arrayOfStocks = data.bestMatches
                arrayOfStocks = arrayOfStocks.slice(0, 2)
                setStocksToSearch(arrayOfStocks)
            })
            .catch(error => console.error(error));
            
        } catch(error){setError(error)}
        if(error) console.log('Error: ', error.message)
    }
    console.log('stockstoSearch value: ', stocksToSearch)
    return(
        <form className="d-flex flex-column" onSubmit={e => handleSubmit(e)}>
        <label className="mt-3 mb-2" ><h3><strong>Search for the desired stock </strong></h3></label>
        <input className='mb-3' type='text' value={searchInputField} onChange={e => handleOnSearchChange(e.target.value)}></input>
        <button className="btn btn-primary mb-3" type="submit">Search</button>
        </form>
    )
}
