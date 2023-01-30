import { useAppSelector } from '../../../hooks';
export default function BalanceInfo({title, status}: {title: string, status: string}){
    const value = useAppSelector(state => state.expenses.totalBalance); 
    return(
        <>
            <h3>{title}</h3>
            <p>U$ {value.toFixed(2)}</p>
            {status === '' ? (null) : (<p style={{color: 'green'}}>{status}</p>)}
        </>
    )
}