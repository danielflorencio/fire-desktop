import { Expense } from "../types/expense";
export const getCurrentMonth = (): string => {
    let now = new Date();
    let newDate = now.getFullYear()-(now.getMonth()+1);
    let stringDate = newDate.toString();

    return stringDate 
    // return toString((now.getFullYear()-(now.getMonth()+1)))
    // toString(now.getFullYear()-(now.getMonth()+1))
}

export const filterListByMonth = (list: Expense[], date: string): Expense[] => { 
    let newList: Expense[] = [];
    let [year, month] = date.split('-');
    
    for(let i in list){
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i])
        }
    }
    return newList;
}

// Typescript function skeleton
// export const name = (variable: type, variable: type): return type => {actual function} 