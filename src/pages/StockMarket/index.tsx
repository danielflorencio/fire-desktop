import { useState } from "react";
// import ChooseStocks from "./components/ChooseStocks";
// import ShowStocks from "./components/ShowStockMarket";
export interface StockData {
    symbol: string;
    price: number;
    change: number;
    changePercent: number;
}
export default function StockMarket(){
    const [stocksToSearch, setStocksToSearch] = useState<StockData[]>([])
    const apiKey = '';

    return(
        <>
            <h2 className="text-center mt-4 px-2">Hey, i didn't let the feature working to not expose my API Key. Here's a video showing it live: </h2>
            <div className="mt-5"><iframe width="400" height="220" src="https://www.youtube.com/embed/C4atterMyF0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
            {/* <ChooseStocks stocksToSearch={stocksToSearch} setStocksToSearch={setStocksToSearch} apiKey={apiKey}/>
            <ShowStocks stocksToSearch={stocksToSearch} apiKey={apiKey}/> */}
        </>
    )
}