import { Expense } from "../types/expense";
export const getCurrentMonth = (): string => {
    let now = new Date();
    // let newDate = now.getFullYear()-(now.getMonth()+1);
    // let stringDate = newDate.toString();

    return `${now.getFullYear()}-${now.getMonth()+1}`
    // return toString((now.getFullYear()-(now.getMonth()+1)))
    // toString(now.getFullYear()-(now.getMonth()+1))
}

export const filterListByMonth = (list: Expense[], date: string): Expense[] => { 
    let newList: Expense[] = [];
    
    let [year, month] = date.split('-');
    
    // for(let i = 0; i < list.length; i++){
    for (let i in list){
        console.log('--------------------------------------')
        console.log('list item number ', i, ' year === ', list[i].date.getFullYear())
        console.log('list item number ', i, ' month === ', list[i].date.getMonth())
        console.log('full date ', list[i].date.getDate())
        console.log('year variable value === ', year)
        console.log('month variable value === ' , (parseInt(month) - 1))
        if(
            (list[i].date.getFullYear()) === parseInt(year) &&
            list[i].date.getMonth()  === (parseInt(month) - 1)
        ) {
            console.log('conditional in for loop being true.')
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