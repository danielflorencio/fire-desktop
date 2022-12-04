import { Expense } from '../../types/expense'
import { Category } from '../../types/category'
import { categories } from '../../data/categories'
import { expenses } from '../../data/expenses'
import { useState, useEffect } from 'react'
import { getCurrentMonth, filterListByMonth } from '../../helpers/dateFilter'
import { ExpensesTable } from '../TableArea/ExpenseTrackerTable'
export default function ExpenseTracker(){
    const [list, setList] = useState<Expense[]>(expenses); 

    // Since my 'expenses' data has already been type set, my state is automatically type set. 
    // The <Expense[]> code explicitly tells the code that the list state is an Array of 'Expense'
    // It is not necessary because what i said two lines ago, but it might improve code readability.
    
    const [filteredList, setFilteredList] = useState<Expense[]>([]);

    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth))
    }, [list, currentMonth] ) // This last argument in the useEffect determines what we are going to monitor changes.
    // Search later the video where Kyle (web dev simplified) says it's not good practice to use useEffect.

    return(
    <>
        <h1 className='text-center' style={{marginBottom: '60px'}}>Expense Tracker</h1>        
        <ExpensesTable/>
    </>
    )
}