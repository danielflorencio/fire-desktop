import './DesktopExpensesTableStyles.css'
import { Expense } from '../../../../types/expense'
import { formatDate } from '../../../../helpers/dateFilter'
import { categories } from '../../../../data/categories'

export const DesktopExpensesTable = ({list}: {list: Expense[]}) => {
    return(
        <>
            <div className='table'>
                <div className='table-titles'>
                    <div className='table-title'><p><strong>Date</strong></p></div>
                    <div className='table-title'><p><strong>Category</strong></p></div>
                    <div className='table-title'><p><strong>Item</strong></p></div>
                    <div className='table-title'><p><strong>Value</strong></p></div>
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
            </div>
        </>
    )
}