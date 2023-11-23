import React, {useContext,useState}  from 'react'
import { AppContext } from '../context/AppContext'
import ViewBudget from './ViewBudget'

const Budget = () => {
  const {budget} =useContext(AppContext) //value of budget variable comes from AppContext
  
  //---------------trying to do the challenge(create edit button with budget)----------------------------------------------------------------------
  // const [isEditing , setIsEditing]=useState(false)

  // const handleEditClick =()=>{
  //   setIsEditing(true)
  // }

  // const handleSaveClick =(value)=>{
  //   dispatch ({
  //     type:'SET_BUDGET',
  //     payload:value
  //   })
  //   setIsEditing(false)
  // }
  //------------------------------------------------------------------------------------------

  return (
    <div className='alert alert-secondary'>
        <span>Budget : ${budget}</span>
        {/* <ViewBudget  budget={100} handleEditClick={handleEditClick} /> */}
    </div>
  )
}

export default Budget