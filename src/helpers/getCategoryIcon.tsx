import {GiChickenOven} from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import { GiHouse } from 'react-icons/gi'
import { FaMoneyBillWaveAlt, FaBuysellads } from 'react-icons/fa'
export default function getCategoryIcon(categoryId: number){

    const reactIcons = [<GiChickenOven/>, <GiHouse/>, <FaMoneyBillWaveAlt/>, <FaBuysellads/>]

    return(
        <IconContext.Provider value={{size: '80%', color: 'white'}}>
            {reactIcons[categoryId]}
        </IconContext.Provider>
    )

}