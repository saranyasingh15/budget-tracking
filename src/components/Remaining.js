import React , {useContext} from 'react'
import { AppContext } from '../context/AppContext'

const Remaining = () => {
  const {expenses , budget} = useContext(AppContext)

  //to find the remaining money , we need to first calculate the total expenses then substract it from our budget
  const totalExpenses=expenses.reduce((total,item)=>{
    return (total=total+item.cost);
  },0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success' 
  
  return (
    <div className={`alert ${alertType}`}>
        <span>Remaining :{budget - totalExpenses }</span>
    </div>
  )
}

export default Remaining