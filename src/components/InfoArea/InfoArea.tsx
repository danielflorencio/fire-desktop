import './styles.css'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BsFillArrowRightCircleFill} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
type Props = {
    currentMonth: string,
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export default function InfoArea({currentMonth, onMonthChange, income, expense} : Props){
    
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }
    
    return(
    <div className="info-area-container d-flex align-items-center flex-wrap">
        <div className='month-selector-container d-flex align-items-center'>
            <i onClick={handlePrevMonth} style={{cursor: 'pointer'}}>
                <IconContext.Provider value={{ size: '1.6em'}}>
                    <BsFillArrowLeftCircleFill/>
                </IconContext.Provider>
            </i>
            <h4>{currentMonth}</h4>
            <i onClick={handleNextMonth} style={{cursor: 'pointer'}}>
                <IconContext.Provider value={{ size: '1.6em'}}>
                    <BsFillArrowRightCircleFill/>
                </IconContext.Provider>
            </i>
        </div>
        <div className='resume-area d-flex align-items-center'>
            <div className='resume-item'>
                <h2>Revenue</h2>
                <p>$$ {income}</p>
            </div>
            <div className='resume-item'>
                <h2>Expenses</h2>
                <p>$$ {expense}</p>
            </div>
            <div className='resume-item'>
                <h2>Balance</h2>
                <p>$$ {income - expense}</p>
            </div>
        </div>
    </div>
    )
}