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
    
    for(let i = 0; i < list.length; i++){
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i])
            console.log('newList ', i, ' ', newList)
        }
    }
    // console.log('date ', Date())
    // console.log('newlist ', newList)
    console.log(newList)
    return newList;
}

// Typescript function skeleton
// export const name = (variable: type, variable: type): return type => {actual function} 