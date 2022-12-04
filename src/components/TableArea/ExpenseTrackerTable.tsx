import './styles.css'
export const ExpensesTable = () => {
    return(
        <>
            <table className='table'>
                <div className='table-titles'>
                    <div className='table-title'><h2>Date</h2></div>
                    <div className='table-title'><h2>Category</h2></div>
                    <div className='table-title'><h2>Item</h2></div>
                    <div className='table-title'><h2>Value</h2></div>
                </div>
                <div className='table-row'>
                    <div className='table-item-container'><div className='table-item'>Date item</div></div>
                    <div className='table-item-container'><div className='table-item'>Category item</div></div>
                    <div className='table-item-container'><div className='table-item'>Item item</div></div>
                    <div className='table-item-container'><div className='table-item'>Value item</div></div>
                </div>
                <div className='table-row'>
                    <div className='table-item-container'><div className='table-item'>Date item</div></div>
                    <div className='table-item-container'><div className='table-item'>Category item</div></div>
                    <div className='table-item-container'><div className='table-item'>Item item</div></div>
                    <div className='table-item-container'><div className='table-item'>Value item</div></div>
                </div>
                <div className='table-row'>
                    <div className='table-item-container'><div className='table-item'>Date item</div></div>
                    <div className='table-item-container'><div className='table-item'>Category item</div></div>
                    <div className='table-item-container'><div className='table-item'>Item item</div></div>
                    <div className='table-item-container'><div className='table-item'>Value item</div></div>
                </div>

                {/* <tr>
                    <th className='table-title date-title'>Date</th>
                    <th className='table-title category-title'>Category</th>
                    <th className='table-title item-title'>Item</th>  
                    <th className='table-title value-title'>Value</th>   
                </tr>
                <tr>
                    <td className='table-row'><div className='table-item'>Date item</div></td>
                    <td className='table-row'><div className='table-item'>Category item</div></td>
                    <td className='table-row'><div className='table-item'>Unit item</div></td>
                    <td className='table-row'><div className='table-item'>Item value</div></td>
                </tr>
                <tr>
                    <td className='table-row'>Date item</td>   
                    <td className='table-row'>Category item</td>
                    <td className='table-row'>Unit item</td>
                    <td className='table-row'>Item value</td>
                </tr>
                <tr>
                    <td className='table-row'>Date item</td>
                    <td className='table-row'>Category item</td>
                    <td className='table-row'>Unit item</td>
                    <td className='table-row'>Item value</td>
                </tr> */}
            </table>
            {/* <tbody>

            </tbody> */}
        </>
    )
}