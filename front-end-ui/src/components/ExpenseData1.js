import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ExpenseDataList from "./ExpenseDataList"
import { startUpdateUser } from "../actions/budgetAction"

const ExpenseData = (props) => {

    const { formSubmission , editId } = props
    console.log(editId)
    const dispatch = useDispatch()

    const expense = useSelector((state)=>{
        return state.expense.expense
    })

    const expenseFilter = expense.filter((exp)=>{
        return exp._id === editId
    })
    const map = expenseFilter.find((ele)=>{
        return ele
    })
    console.log(map)
    

    const [name , setName] = useState(map.name ? map.name :'')
    const [amount , setAmount] = useState(map.amount ? map.amount :'')
    const [categoryId , setCategoryId] = useState(map.categoryId ? map.categoryId : '')
    const [date , setDate] = useState(map.date ? map.date : '')
    const [_id , setId] =useState(map._id ? map._id : '')

    const data = useSelector((state)=>{
        return state.category.category
    })
    console.log("data" , data)

    
    
    // if(editId){ 
    //     console.log(map)
    //     console.log("ExpenseFilter" , expenseFilter)
    //     //useEffect(()=>{
    //         setName(map.name)
    //         setAmount(map.amount)
    //         setCategoryId(map.categoryId)
    //         setDate(map.date)
    //         setId(map._id)
    //     //},[map.name , map.amount ,map.categoryId, map.date , map._id])
    // }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleIdChange = (e) => {
        setCategoryId(e.target.value)
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name : name ,
            amount : amount ,
            categoryId : categoryId ,
            date : date
        }
        formSubmission(formData , map._id)
        setName('')
        setAmount('')
        setCategoryId('')
        setDate('')
        setId('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type="text" value={name} onChange={handleNameChange} /><br/>
                <label>Amount</label><br/>
                <input type="text" value={amount} onChange={handleAmountChange} /><br/>
                <label>Select Category</label><br/>
                <select value={categoryId} onChange={handleIdChange}>
                    <option value=''>Select</option>
                    {
                        data.map((ele)=>{
                            return <option key={ele._id} value={ele._id}> {ele.name} </option>
                        })
                    }
                </select><br/>
                <label>Expense Date</label><br/>
                <input type="date" value={date} onChange={handleDateChange} /> <br/><br/>
                <input type="submit" />
            </form>  
        </div>
    )
}

export default ExpenseData


