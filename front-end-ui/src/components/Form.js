import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startUpdateUser } from "../actions/budgetAction"

const Form = (props) => {

    const dispatch = useDispatch()
    const { handleEdit } = props

    const budget = useSelector((state)=>{
        console.log("form" , state.budget.budget)
        return state.budget.budget
    })

    const [amount , setAmount] = useState(budget.amount ? budget.amount : '')
    const [_id] = useState(budget._id ? budget._id : '')

    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            _id : _id , 
            amount : amount
        }
        console.log("formdata".formData)
        dispatch(startUpdateUser(formData))
        handleEdit()
        setAmount('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={amount} onChange={handleChange}/>
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default Form