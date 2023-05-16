import { applyMiddleware } from 'redux'
import { createStore , combineReducers } from 'redux'
import thunk from 'redux-thunk'
import budgetReducer from '../reducers/budgetReducer'
import categoryReducer from '../reducers/categoryReducer'
import expenseReducer from '../reducers/expenseReducer'
import usersReducer from '../reducers/usersReducer'
import profileReducer from '../reducers/profileReducer'

const configureStore = () => {
    const store = createStore(
        combineReducers({
            user : usersReducer ,
            budget : budgetReducer ,
            category : categoryReducer ,
            expense : expenseReducer ,
            profile : profileReducer
        }),
        applyMiddleware(thunk)
    )
    return store
}

export default configureStore