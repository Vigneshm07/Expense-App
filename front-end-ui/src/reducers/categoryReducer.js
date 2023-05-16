const initialValue = {
    category:[]
}

const categoryReducer = (state = initialValue , action)=>{
    switch (action.type){
        case "SET_CATEGORY" : {
            return {...state , category:[ ...state.category , action.payload]}
        }
        case "GET_CATEGORY" : {
            return {...state , category:[...action.payload]}
        }
        case 'CATEGORY_REMOVE':{
            return { ...state , category: state.category.filter((ele)=>{
                return ele._id !== action.payload
            })}
        }
        case "REMOVE_ALL" : {
            return {...state , category : []}
        }
        default:{
            return {...state}
        }
    }
}

export default categoryReducer