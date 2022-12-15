import { Expense } from "../types/expense";
export const getCurrentMonth = (): string => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`
}

export const filterListByMonth = (list: Expense[], date: string): Expense[] => { 
    let newList: Expense[] = [];
    
    let [year, month] = date.split('-');
    
    for (let i in list){
        // console.log('--------------------------------------')
        // console.log('list item number ', i, ' year === ', list[i].date.getFullYear())
        // console.log('list item number ', i, ' month === ', list[i].date.getMonth())
        // console.log('full date ', list[i].date.getDate())
        // console.log('year variable value === ', year)
        // console.log('month variable value === ' , (parseInt(month) - 1))
        if(
            (list[i].date.getFullYear()) === parseInt(year) &&
            list[i].date.getMonth()  === (parseInt(month) - 1)
        ) {
            // console.log('conditional in for loop being true.')
            newList.push(list[i])
            // console.log('newList ', i, ' ', newList)
        }
    }
    // console.log('date ', Date())
    // console.log('newlist ', newList)
    // console.log(newList)
    return newList;
}

// Typescript function skeleton
// export const name = (variable: type, variable: type): return type => {actual function} 

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