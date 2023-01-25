import { Expense } from '../../types/expense'
import { useState, useEffect } from 'react'
import { getCurrentMonth, filterListByMonth } from '../../helpers/dateFilter'
import { DesktopExpensesTable } from '../ExpensesTable/DesktopExpensesTable'
import { MobileExpensesTable } from '../ExpensesTable/MobileExpensesTable'
import AddExpense from '../AddExpenseForm/AddExpenseForm'
import InfoArea from '../InfoArea/InfoArea'
import { useDispatch } from 'react-redux';
import { addExpense } from '../../features/balance/balanceSlice'
import { useAppSelector } from '../../hooks'
import { getMonthExpenses, getMonthIncomes } from '../../helpers/getBalanceInfo'
import { useMediaQuery } from 'react-responsive'
export default function ExpenseTracker(){
 
    const isSmallScreen = useMediaQuery({ query: '(max-width: 968px)' });    

    const [filteredList, setFilteredList] = useState<Expense[]>([]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
 
    const dispatch = useDispatch();
    const overallExpensesList = useAppSelector(state => state.expenses.expenses)
    
    useEffect(() => {
        setFilteredList(filterListByMonth(overallExpensesList, currentMonth))
    }, [overallExpensesList, currentMonth] )

    useEffect(() => { // This useEffect Detects when a new expense is added (filteredList state) and resets the income and expenses value that goes to the InfoArea component.
        setIncome(getMonthIncomes(filteredList));
        setExpense(getMonthExpenses(filteredList))
    },[filteredList]) // I don't need this anymore since now i'm using redux toolkit to update state changes. Now i need to update this part of the code.

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
        {isSmallScreen ? <MobileExpensesTable list={filteredList}/> : <DesktopExpensesTable list={filteredList}/>}
    </>
    )
}