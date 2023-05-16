import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startCategoryUser } from "../actions/categoryAction"


const Categories = (props) => {

    const [name , setName] = useState('')

    const dispatch = useDispatch()

    const category = useSelector((state)=>{
        console.log(state.category.category)
        return state.category.category
    })
    console.log(category)

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name : name
        }
        console.log("formdata", formData)
        dispatch(startCategoryUser(formData))
        setName('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label><h2>Categories</h2></label>
                <input type="text" value={name} onChange={handleChange} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Categories