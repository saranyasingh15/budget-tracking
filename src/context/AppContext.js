import { useReducer } from "react";
import { createContext } from "react"

const AppReducer=(state,action)=>{ //this is reducer function . It creates new state objects based on the action it recieves
    switch(action.type){ 
        case 'ADD_EXPENSE' : //dispatch function from AddExpenseForm comes here , action is performed
            return {
                ...state,
                expenses:[...state.expenses , action.payload] 
            }

        case 'DELETE_EXPENSE':
            return {
                ...state ,
                expenses : state.expenses.filter(
                    (expense)=>expense.id !== action.payload
                )

            }
        default:
            return state;
    }
};

//set the initial state when app loads
const initialState={
    budget:5000,
    expenses:[
    {id:12,name:"shopping",cost:100},
    {id:13,name:"holiday",cost:300},
    {id:14,name:"transportation",cost:100},
    
    ]
};

//first we created the context and assign it to AppContext variable. Other components wil import it and get the state
export const AppContext=createContext(); 


// provider is an arrow function that accepts some props. Provider function holds a state and passes it to other components
//Provider component wraps the components we want to give access to the state
export const AppProvider=(props)=>{ 

    //we used useReducer hook to hold state. useReduces gives us a state and a function (called dispatch)to update the state nad dispatch action .Whenever we call useReduces we have to give it 2 things - a reducer function and initial state. Whenever the app runs for first time the state is equal to initial state
    const [state,dispatch]=useReducer(AppReducer,initialState); 

    return(<AppContext.Provider value={{
        budget:state.budget,
        expenses:state.expenses,
        dispatch
         
    }}>
        {props.children}
    </AppContext.Provider>
    )
};

