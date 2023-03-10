import { Expense } from '../../../../types/expense'
import { formatDate } from '../../../../helpers/dateFilter'
import { categories } from '../../../../data/categories'
import getCategoryIcon from '../../../../helpers/getCategoryIcon'
export const MobileExpensesTable = ({list}: {list: Expense[]}) => {
    return(
        <>
            {
                list.map((expense, index) =>(
                    <div key={index} className='default-container min-w-fit max-w-sm h-5rem d-flex mx-0'> {/** I gotta change this info-area-container class name */}
                        <div className='w-25 h-100 d-flex justify-content-center align-items-center'>
                            <div style={{backgroundColor: `${categories[expense.category].bgColor}`}} className='w-75 px-2 h-75 rounded d-flex justify-content-center align-items-center'>
                                {getCategoryIcon((categories[expense.category].categoryId))}
                            </div>
                        </div>
                        <div className='min-w-fit px-2 d-flex flex-column justify-content-center'>
                            <div style={{fontWeight: '600'}} className='w-100'>{expense.title}</div>
                            <div className='w-100'>{formatDate(expense.date)}</div>
                        </div>
                        <div className='min-w-fit px-3 d-flex justify-content-center align-items-center'><p><strong>{categories[expense.category].expense ? '-' : ''}U$$ {expense.value}</strong></p></div>
                    </div>
                ))
            }
        </>
    )
}