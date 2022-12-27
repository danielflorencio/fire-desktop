import { useSelector } from 'react-redux';
import { RootState } from '../../store';
type Props = {
    title: string,
    status: string
}
export default function BalanceInfo({title, status}: Props){
    
    const value = useSelector<RootState, number>(state => state.addExpense.totalBalance);
    
    return(
        <>
            <h3>{title}</h3>
            <p>U$ {value.toFixed(2)}</p>
            {status === '' ? (null) : (<p style={{color: 'green'}}>{status}</p>)}
        </>
    )
}