import './styles.css'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BsFillArrowRightCircleFill} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

type Props = {
    currentMonth: string,
    onMonthChange: (newMonth: string) => void;
}

export default function InfoArea({currentMonth, onMonthChange} : Props){
    
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
        console.log('test worked')
    }

    return(
        <div className="info-area-container">
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
    )
}