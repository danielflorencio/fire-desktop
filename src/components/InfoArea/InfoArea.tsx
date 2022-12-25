import './styles.css'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BsFillArrowRightCircleFill} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import ResumeExpenses from '../ResumeExpenses/ResumeExpenses'

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
        <div className="info-area-container">
            <div className='month-selector-container' style={{width: '50%'}}>
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
            <div className='resume-area'>
                <ResumeExpenses title='Revenue' value={income}/>
                <ResumeExpenses title='Expenses' value={expense}/>
                <ResumeExpenses title='Balance' value={income - expense}/>
            </div>
        </div>
    )
}