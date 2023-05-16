const initialValue = {
    user:{},
    errors:{}
}

const usersReducer = (state = initialValue , action)=>{
    switch (action.type){
        case "GET_ACCOUNT" : {
            return {...state , user:{...state.user , ...action.payload}}
        }
        case "REMOVE_ALL" : {
            return {...state , user : {}}
        }
        default:{
            return {...state}
        }
    }
}

export default usersReducer