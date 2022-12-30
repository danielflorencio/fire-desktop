import { Expense } from "../types/expense"
import { categories } from "../data/categories"
export function getTotalBalance(expenses: Expense[]){
    let incomeCount = 0 
    let expenseCount = 0
    for(let i = 0; i < expenses.length; i++){
        if(categories[expenses[i].category].expense === true){
            expenseCount = expenseCount + expenses[i].value  
        } else{
            incomeCount = incomeCount + expenses[i].value
        }
    }
    return incomeCount - expenseCount
}

export function getMonthBalance(expenses: Expense[]){

}

export function getTotalExpenses(){

}
export function getMonthExpenses(expenses: Expense[]){ 
    let expenseCount = 0
    for(let i = 0; i < expenses.length; i++){
        if(categories[expenses[i].category].expense === true){
            expenseCount = expenseCount + expenses[i].value  
        }
    }
    return expenseCount
}
export function getTotalIncomes(){

}
export function getMonthIncomes(expenses: Expense[]): number{
    let incomeCount = 0
    for(let i = 0; i < expenses.length; i++){
        if(categories[expenses[i].category].expense === false){
            incomeCount = incomeCount + expenses[i].value  
        }
    }
    return incomeCount
}