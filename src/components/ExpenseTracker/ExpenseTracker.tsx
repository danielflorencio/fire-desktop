import { Expense } from '../../types/expense'
import { categories } from '../../data/categories'
import { expenses } from '../../data/expenses'
import { useState, useEffect } from 'react'
import { getCurrentMonth, filterListByMonth } from '../../helpers/dateFilter'
import { ExpensesTable } from '../TableArea/ExpenseTrackerTable'
import AddExpense from '../AddExpenseForm/AddExpenseForm'
import InfoArea from '../InfoArea/InfoArea'
import { useDispatch } from 'react-redux';
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

    const handleAddExpense = (expense: Expense) => {        
        setList([...list, expense]);
        dispatch(addExpense({date: expense.date, category: expense.category, title: expense.title, value: expense.value }))
    }


    // Testing Redux
    // const now = new Date();
    // // const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDay());
    // function testDispatch(){
    //     dispatch(addExpense({date: now,category: 'Food', title: 'Popcorn', value: 23}))
    //     const lastExpense = useSelector<RootState, string>(state => state.addExpense.expenses[expenses.length].title);
    //     console.log('Last expense state title: ', lastExpense)
    // }
    // testDispatch()
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