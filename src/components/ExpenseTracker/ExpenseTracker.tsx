import { Expense } from '../../types/expense'
import { categories } from '../../data/categories'
import { expenses } from '../../data/expenses'
import { useState, useEffect } from 'react'
import { getCurrentMonth, filterListByMonth } from '../../helpers/dateFilter'
import { ExpensesTable } from '../TableArea/ExpenseTrackerTable'
import AddExpense from '../AddExpenseForm/AddExpenseForm'
import InfoArea from '../InfoArea/InfoArea'
import { useSelector, useDispatch } from 'react-redux';
import { addExpense } from '../../features/balance/balanceSlice'
export default function ExpenseTracker(){
    const [list, setList] = useState<Expense[]>(expenses); 

    // Since my 'expenses' data has already been type set, my state is automatically type set. 
    // The <Expense[]> code explicitly tells the code that the list state is an Array of 'Expense'
    // It is not necessary because what i said two lines ago, but it might improve code readability.
    
    const [filteredList, setFilteredList] = useState<Expense[]>([]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
 
    const dispatch = useDispatch();
    // const totalBalance = useSelector((state: any) => state.setTotalBalance.value)

    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth))
    }, [list, currentMonth] ) // This last argument in the useEffect determines what we are going to monitor changes.
    // Search later the video where Kyle (web dev simplified) says it's not good practice to use useEffect.

    useEffect(() => {
        let incomeCount = 0;
        let expenseCount = 0;
        for (let i in filteredList) {
            if (categories[filteredList[i].category].expense){
                expenseCount += filteredList[i].value
            } else{
                incomeCount += filteredList[i].value
            }
        }
        setIncome(incomeCount);
        setExpense(expenseCount)
    },[filteredList])

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth)
    }

    useEffect(() => { // Sets the state of the Total Balance so we can export it to the Redux Store
        let expenseCount = 0
        let incomeCount = 0
        for(let i in list){
            if (categories[list[i].category].expense){                
                expenseCount += list[i].value
            } else{
                incomeCount += list[i].value
            }
            // let totalBalance = incomeCount - expenseCount
            // const totalBalanceState: BalanceStateValue = {
            //     totalBalance: incomeCount - expenseCount
            // } 
            // setTotalBalance(incomeCount - expenseCount)
            // dispatch(addExpense())
            // setTotalBalance({incomeCountArgument: incomeCount, expenseCountArgument: expenseCount})
        }
    }, [list])

    const handleAddExpense = (expense: Expense) => {
        let newList = [...list];
        newList.push(expense);
        setList(newList);
    }


    // Testing Redux
    const now = new Date();
    // const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDay());
    dispatch(addExpense({date: now,category: 'Food', title: 'Popcorn', value: 23}))
    // Testing Redux


    return(
    <>
        <h1 className='text-center' style={{marginBottom: '45px'}}>Expense Tracker</h1>  
        <InfoArea 
        onMonthChange={handleMonthChange} 
        currentMonth={currentMonth}
        income={income}
        expense={expense}
        />    
        <AddExpense onAdd={handleAddExpense}/>  
        <ExpensesTable list={filteredList}/> {/*  */}
    </>
    )
}