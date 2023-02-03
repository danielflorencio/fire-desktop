import { useState } from 'react'
import { Expense } from '../../../../types/expense';
import { categories } from '../../../../data/categories';
import { newDateAdjusted } from '../../../../helpers/dateFilter';
import { useMediaQuery } from 'react-responsive';

export default function AddExpense({ onAdd }: {onAdd: (expense: Expense) => void}){
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState<number>(0);

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

  if(isSmallScreen){
    return(
      <div className='info-area-container d-flex align-items-center flex-wrap' style={{padding: '1vh 1vw'}}>
        <div className='d-flex flex-column px-2'>
          <div className='mb-3'>
            <label><strong>Date: </strong></label>
            <input type="date" className='w-100 text-center' value={dateField} onChange={e => setDateField(e.target.value)}></input>
          </div>
          <div className='mb-3'>
            <label><strong>Category: </strong></label>
            <select className='w-100 text-center' value={categoryField} onChange={e => setCategoryField(e.target.value)}>
                <option>Choose one</option>
                {categoryKeys.map(key => (
                  <option key={key} value={key}>{categories[key].title}</option>
                  ))
                }
            </select>
          </div>
          <div className='mb-3'>
            <label className='d-block'><strong>Title: </strong></label>
            <input type="text" className="w-100" value={titleField} onChange={e => setTitleField(e.target.value)}></input>
          </div>
          <div className='mb-3'>
            <label><strong>Value: </strong></label>
            <input type="number" className='w-100' value={valueField} onChange={e => setValueField(parseFloat(e.target.value))}></input>
          </div>
        </div>
        <div className='w-100 d-flex align-items-center justify-content-center'>
          <br></br>
          <button className="btn btn-primary" onClick={handleAddEvent}>Add Expense</button>
        </div>
    </div>
    )
  } else{
    return(
        <div className='info-area-container d-flex align-items-center flex-wrap' style={{padding: '1vh 1vw'}}>
          <div>
            <div className='text-center'><strong>Date</strong></div>
            <input type="date" value={dateField} onChange={e => setDateField(e.target.value)}></input>
          </div>
          <div>
            <label className='d-block text-center'><strong>Category</strong></label>
            <select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
                <option></option>
                {categoryKeys.map(key => (
                  <option key={key} value={key}>{categories[key].title}</option>
                  ))
                }
            </select>
          </div>
          <div>
            <div className='text-center'><strong>Title</strong></div>
            <input type="text" className="w-8rem" value={titleField} onChange={e => setTitleField(e.target.value)}></input>
          </div>
          <div>
            <div className='text-center'><label><strong>Value</strong></label></div>
            <input type="number" className='w-5rem' value={valueField} onChange={e => setValueField(parseFloat(e.target.value))}></input>
          </div>
          <div>
            <br></br>
            <button className="btn btn-primary" onClick={handleAddEvent}>Add Expense</button>
          </div>
      </div>
    )
  } 
}