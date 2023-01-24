import { useState } from "react";
import ChooseStocks from "./ChooseStocks";
import ShowStocks from "./ShowStockMarket";
export interface StockData {
    symbol: string;
    price: number;
    change: number;
    changePercent: number;
}
export default function IndexStockMarket(){
    const [stocksToSearch, setStocksToSearch] = useState<StockData[]>([])
    const apiKey = '';

    return(
        <>
            <ChooseStocks stocksToSearch={stocksToSearch} setStocksToSearch={setStocksToSearch} apiKey={apiKey}/>
            <ShowStocks stocksToSearch={stocksToSearch} apiKey={apiKey}/>
        </>
    )
}