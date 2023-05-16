import React from "react"
import { useDispatch } from "react-redux"
import ExpenseData from "./ExpenseData"
import { startExpenseUser } from "../actions/expenseAction"


const AddExpense = (props) => {

    const dispatch = useDispatch()

    const formSubmission = (formData) => {
        dispatch(startExpenseUser(formData))
    }

    return(
        <div>
            <ExpenseData formSubmission = {formSubmission} editId={""}/>
            {/* <ExpenseDataList formSubmission={formSubmission} /> */}
        </div>
    )
}

export default AddExpense