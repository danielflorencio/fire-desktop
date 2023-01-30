import { Expense } from "../types/expense";
export const getCurrentMonth = (): string => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`
}

export const getCurrentMonthNumber = (): number => {
    let now = new Date();
    return now.getMonth();
}

export const filterListByMonth = (list: Expense[], date: string): Expense[] => { 
    let newList: Expense[] = [];
    let [year, month] = date.split('-');
    for (let i in list){
        if(
            (list[i].date.getFullYear()) === parseInt(year) &&
            list[i].date.getMonth()  === (parseInt(month) - 1)
        ) {
            newList.push(list[i])
        }
    }
    return newList;
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}
const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const newDateAdjusted = (dateField: string) => {
    let [year, month, day] = dateField.split('-')
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}