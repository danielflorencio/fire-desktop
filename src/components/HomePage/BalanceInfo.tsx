import { useAppSelector } from '../../hooks';
type Props = {
    title: string,
    status: string
}
export default function BalanceInfo({title, status}: Props){
    
    // const value = useSelector<RootState, number>(state => state.addExpense.totalBalance); // Old line before the store configuration change
    // const value = useSelector<RootState, number>(state => state.expenses.totalBalance); // New line but better   
    const value = useAppSelector(state => state.expenses.totalBalance); // Even newer line and even better

    return(
        <>
            <h3>{title}</h3>
            <p>U$ {value.toFixed(2)}</p>
            {status === '' ? (null) : (<p style={{color: 'green'}}>{status}</p>)}
        </>
    )
}