import React,{useContext} from 'react'
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {

    const {expenses}=useContext(AppContext)
    
//   const expenses =[
//     {id:123,name:"shopping",cost:50},
//     {id:123,name:"holiday",cost:300},
//     {id:123,name:"transportation",cost:70},
//     {id:123,name:"fuel",cost:40},
//     {id:123,name:"child care",cost:500},

// ];

return(
    <ul className='list-group'>
        {expenses.map((expense)=>(
           <ExpenseItem 
           id={expense.id}
           name={expense.name}
           cost={expense.cost}/> 
        ))}
    </ul>
)
}

export default ExpenseList