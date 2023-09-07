import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startBudgetUser } from "../actions/budgetAction"
import Form from "./Form"

const Budget = (props) => {

    const [ toggle , setToggle ] = useState(false)

    const budget = useSelector((state)=>{
        console.log(state.budget.budget)
        return state.budget.budget
    })

    const dispatch = useDispatch()

    const handleEdit = () => {
        setToggle(!toggle)
    }

    useEffect(()=>{
        dispatch(startBudgetUser())
    }, [dispatch])

    return(
        <div>
            {
                toggle ?
                <div>
                    {
                        <div>
                            <Form handleEdit = {handleEdit} />
                            <button onClick={handleEdit}> Cancel</button><br/>
                        </div>
                    }
                </div>
            : 
                <div>
                    <h1>Budget : {budget.amount}</h1>
                    <button onClick={handleEdit}>Edit</button><br/>
                </div>
            }    
        </div>
    )
}

export default Budget