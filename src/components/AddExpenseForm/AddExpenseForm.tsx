import {useState} from 'react'
import { Expense } from '../../types/expense';
import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';

export default function AddExpense({ onAdd }: {onAdd: (expense: Expense) => void}){
    
  // A useReducer hook could probably help me simplify the code below. 

  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];
    if(isNaN(new Date(dateField).getTime())) {
      errors.push('Invalid date!');
    }
    if(!categoryKeys.includes(categoryField)) {
      errors.push('Invalid category!');
    }
    if(titleField === '') {
      errors.push('Invalid Title!');
    }
    if(valueField <= 0) {
      errors.push('Invalid value!');
    }
    if(errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: newDateAdjusted(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      });
      clearFields();
    }
  }

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }    
  
  return(
      <div className='info-area-container d-flex align-items-center flex-wrap' style={{padding: '1vh 1vw'}}>
          <div>
              <div className='text-center'><strong>Date</strong></div>
              <label><input type="date" value={dateField} onChange={e => setDateField(e.target.value)}></input></label>
          </div>
          <div>
              <div><strong>Category</strong></div>
              <label>
                  <select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
                      <option></option>
                      {categoryKeys.map(key => (
                        <option key={key} value={key}>{categories[key].title}</option>
                        ))
                      }
                  </select>
              </label>
          </div>
          <div>
              <div className='text-center'><strong>Title</strong></div>
              <label><input type="text" value={titleField} onChange={e => setTitleField(e.target.value)}></input></label>
          </div>
          <div>
              <div className='text-center'><strong>Value</strong></div>
              <label><input type="number" style={{width: '5vw'}} value={valueField} onChange={e => setValueField(parseFloat(e.target.value))}></input></label>
          </div>
          <div>
              <label>
                  <br></br>
                  <button className="btn btn-primary" onClick={handleAddEvent}>Add Expense</button>
              </label>
          </div>
      </div>
  )
}