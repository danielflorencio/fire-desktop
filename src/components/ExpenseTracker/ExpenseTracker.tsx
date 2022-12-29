import { Expense } from '../../types/expense'
import { useState, useEffect } from 'react'
import { getCurrentMonth, filterListByMonth } from '../../helpers/dateFilter'
import { ExpensesTable } from '../TableArea/ExpenseTrackerTable'
import AddExpense from '../AddExpenseForm/AddExpenseForm'
import InfoArea from '../InfoArea/InfoArea'
import { useDispatch } from 'react-redux';
import { addExpense } from '../../features/balance/balanceSlice'
import { useAppSelector } from '../../hooks'
import { getMonthExpenses, getMonthIncomes } from '../../features/balance/getBalanceInfo'
export default function ExpenseTracker(){
    
    const [filteredList, setFilteredList] = useState<Expense[]>([]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
 
    const dispatch = useDispatch();
    const overallExpensesList = useAppSelector(state => state.expenses.expenses)
    
    useEffect(() => {
        setFilteredList(filterListByMonth(overallExpensesList, currentMonth))
    }, [overallExpensesList, currentMonth] )
    // Search later the video where Kyle (web dev simplified) says it's not good practice to use useEffect.

    useEffect(() => { // This useEffect Detects when a new expense is added (filteredList state) and resets the income and expenses value that goes to the InfoArea component.
        setIncome(getMonthIncomes(filteredList));
        setExpense(getMonthExpenses(filteredList))
    },[filteredList])

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth)
    }

    const handleAddExpense = (expense: Expense) => {        
        dispatch(addExpense({date: expense.date, category: expense.category, title: expense.title, value: expense.value }))
    }

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