import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { startAccountUser } from './actions/usersAction'
import { startListCategory } from './actions/categoryAction'
import { startListExpense } from './actions/expenseAction'
import { startBudgetUser } from './actions/budgetAction'

const store = configureStore()
console.log(store)

console.log('state' , store.getState())

store.subscribe(() => {
  console.log('state update' , store.getState())
})

if(localStorage.getItem("token")){
  store.dispatch(startAccountUser())
  store.dispatch(startListCategory())
  store.dispatch(startListExpense())
  store.dispatch(startBudgetUser())
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      
    </Provider>
)
