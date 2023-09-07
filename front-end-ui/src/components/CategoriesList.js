import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startCategoryRemove, startListCategory } from "../actions/categoryAction"
import Swal from "sweetalert2"

const CategoriesList = () => {

    const dispatch = useDispatch()

    const list = useSelector((state)=>{
        return state.category.category
    })
    console.log("list" , list)

    // useEffect(()=>{
    //     dispatch(startListCategory())
    // } , [dispatch])

    const removeList = (id) => {
        console.log(id)
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        )
        dispatch(startCategoryRemove(id))
        }
    })
    }

    return(
        <div>
            {
                list.length > 0 && <h1>Categories List - {list.length}</h1>
            }
            <br/>
                {
                    list.length > 0 && list.map((ele)=>{
                        return ( <div>
                            <h4 key={ele._id}>{ele.name} <button onClick={()=>{
                                removeList(ele._id)
                            }}>X</button></h4>
                        </div>)
                        
                    })
                }
            
        </div>
    )
}

export default CategoriesList