import { Expense } from '../../types/expense'
import { Category } from '../../types/category'
import { categories } from '../../data/categories'
import { expenses } from '../../data/expenses'
import { useState } from 'react'
import { getCurrentMonth } from '../../helpers/dateFilter'
export default function ExpenseTracker(){
    const [list, setList] = useState<Expense[]>(expenses); 

    // Since my 'expenses' data has already been type set, my state is automatically type set. 
    // The <Expense[]> code explicitly tells the code that the list state is an Array of 'Expense'
    // It is not necessary because what i said two lines ago, but it might improve code readability.
    
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

    return 
    <>
        <h1>Expense Tracker</h1>
        
    </>
}