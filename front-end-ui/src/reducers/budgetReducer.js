const initialValue = {
    budget:{}
}

const budgetReducer = (state = initialValue , action)=>{
    switch (action.type){
        case "GET_BUDGET" : {
            return {...state , budget:{...state.budget , ...action.payload}}
        }
        case "GET_UPDATE" : {
            return {...state , budget:{...state.budget , ...action.payload}}
        }
        case "REMOVE_ALL" : {
            return {...state , budget : {}}
        }
        default : {
            return {...state}
        }
    }
}

export default budgetReducer