import {GiChickenOven} from 'react-icons/gi'
export default function getCategoryIcon(categoryId: number){

    const reactIcons = [<GiChickenOven/>]

    return(
        <i>{reactIcons[categoryId]}</i>
    )

}