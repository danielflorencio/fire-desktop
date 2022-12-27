import { useSelector } from 'react-redux';
import { expenses } from '../../data/expenses';
// import store from '../../store';
import { RootState } from '../../store';
type Props = {
    title: string,
    status: string
}
export default function BalanceInfo({title, status}: Props){
    
    const value = useSelector<RootState, number>(state => state.addExpense.totalBalance);
    
    // const totalBalance = useSelector<RootState, number>(state => {
    //     for(let i = 0; i < state.length(); i++){
    //         state

    // })
    // const totalBalance = useSelector<RootState, number>(state => state.);

    return(
        <>
            <h3>{title}</h3>
            <p>U$ {value.toFixed(2)}</p>
            {status === '' ? (null) : (<p style={{color: 'green'}}>{status}</p>)}
        </>
    )
}