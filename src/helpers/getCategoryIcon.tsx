import {GiChickenOven} from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import { GiHouse } from 'react-icons/gi'
import { FaMoneyBillWaveAlt, FaBuysellads } from 'react-icons/fa'
import { AiOutlineShopping } from 'react-icons/ai'
import { GiFruitBowl } from 'react-icons/gi'
import { AiFillCar } from 'react-icons/ai'
import { HiOutlineTicket } from 'react-icons/hi'
import {GoLightBulb} from 'react-icons/go'

export default function getCategoryIcon(categoryId: number){

    const reactIcons = [<GiChickenOven/>, <GiHouse/>, <FaMoneyBillWaveAlt/>, <FaBuysellads/>, <AiOutlineShopping/>, <GiFruitBowl/>, <AiFillCar/>, <HiOutlineTicket/>, <GoLightBulb/>]

    return(
        <IconContext.Provider value={{size: '80%', color: 'white'}}>
            {reactIcons[categoryId]}
        </IconContext.Provider>
    )

}