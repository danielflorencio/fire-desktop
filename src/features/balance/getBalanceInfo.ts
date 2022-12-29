import { Expense } from "../../types/expense"
import { categories } from "../../data/categories"
export function getTotalBalance(expenses: Expense[]){
    let incomeCount = 0 
    let expenseCount = 0
    for(let i = 0; i < expenses.length; i++){
        console.log('For loop being initiated.')
        if(categories[expenses[i].category].expense === true){
            expenseCount = expenseCount + expenses[i].value  
        } else{
            incomeCount = incomeCount + expenses[i].value
        }
    }
    return incomeCount - expenseCount
    
}


export function getMonthBalance(){

}
export function getTotalExpenses(){

}
export function getMonthExpenses(){

}
export function getTotalIncomes(){

}
export function getMonthIncomes(){

}