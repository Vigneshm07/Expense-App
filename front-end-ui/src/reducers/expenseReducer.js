const initialValue = {
    expense : [] ,
    errors : {} ,
    soft : []
}

const expenseReducer = (state = initialValue , action)=>{
    switch (action.type){
        case "SET_EXPENSE" : {
            return {...state , expense:[ ...state.expense , action.payload]}
        }
        case "GET_EXPENSE" : {
            return {...state , expense:[...action.payload]}
        }
        case "UPDATE_EXPENSE" : {
            return {
                ...state , expense : state.expense.map((ele)=>{
                    if(ele._id === action.payload._id){
                        return {...ele , ...action.payload}
                    } else {
                        return {...ele}
                    }
                })
            }
        }
        case "SOFT_DELETE" : {
            return { ...state , expense: state.expense.filter((ele)=>{
                return ele._id !== action.payload
            })}
        }
        case "SOFT_REDELETE" : {
            return { ...state , soft: state.soft.filter((ele)=>{
                return ele._id !== action.payload
            })}
        }
        case "SOFT_RESTORE" : {
            return {...state , expense:[...state.expense , action.payload]}
        }
        case "SOFT_LIST" : {
            return {...state , soft:action.payload}
        }
        case "REMOVE_ALL" : {
            return {...state , expense : []}
        }
        default:{
            return {...state}
        }
    }
}

export default expenseReducer