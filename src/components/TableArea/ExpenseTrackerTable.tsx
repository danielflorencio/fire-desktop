import './styles.css'
import { Expense } from '../../types/expense'
import { filterListByMonth, formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'
import { useEffect } from 'react'

type Props = { // Everytime we pass props in React Typescript components, we have to declare the type of the props separately.
    list: Expense[] 
}


export const ExpensesTable = ({list}: Props) => {
    return(
        <>
            <table className='table'>
                <div className='table-titles'>
                    <div className='table-title'><h2>Date</h2></div>
                    <div className='table-title'><h2>Category</h2></div>
                    <div className='table-title'><h2>Item</h2></div>
                    <div className='table-title'><h2>Value</h2></div>
                </div>
                {
                    list.map((expense, index) =>(
                        <div key={index} className='table-row'>
                            <div className='table-item-container'><div className='table-item'>{formatDate(expense.date)}</div></div> {/* Note: it is important to remember that the value for month showed in the date prop must be shown with one added. */}
                            <div className='table-item-container'><div className='table-item' style={{backgroundColor: `${categories[expense.category].bgColor}`, color: `${categories[expense.category].color}`}}>{categories[expense.category].title}</div></div>
                            <div className='table-item-container'><div className='table-item'>{expense.title}</div></div>
                                <div className='table-item-container'><div className='table-item'>{expense.value}</div></div>
                        </div>
    
                    ))
                }

            </table>
        </>
    )
}