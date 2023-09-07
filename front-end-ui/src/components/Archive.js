import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startSoftList, startSoftRestore } from "../actions/expenseAction"
import "../App.css"

const Archive = (props)=> {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startSoftList())
    },[dispatch])

    const category = useSelector((state)=>{
        return state.category.category
    })

    const list = useSelector((state)=>{
        return state.expense.soft
    })
    console.log(list)

    const handleRestore = (id) => {
        dispatch(startSoftRestore(id))
    }

    return(
        <div className="App">
            {
                list.length > 0 ?
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Category Name</th>
                            <th>Amount</th>
                            <th>Expense Date</th>
                            <th>Restore</th>
                        </tr>
                    </thead>              
                    <tbody>
                        {
                        list.map((ele)=>{
                            const categoryName = category.filter((category)=>{
                                return category._id === ele.categoryId
                            })
                            const name = categoryName.map((ele)=>{
                                return ele.name
                            })
                            return (
                                <tr key={ele._id}>
                                    <td>{ele.name}</td>
                                    <td>{name}</td>
                                    <td>{ele.amount}</td>
                                    <td>{ele.date}</td>
                                    <td><button onClick={()=>{
                                        handleRestore(ele._id)
                                    }}>Restore</button></td>
                                </tr>
                            )
                        })
                        }   
                    </tbody>
                </table>
                : <h1>No Data Found</h1>
            } 
        </div>
    )
}

export default Archive