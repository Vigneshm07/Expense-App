import axios from "axios"
import { startListExpense } from "./expenseAction"
import Swal from "sweetalert2"

export const startCategoryUser = (formData) => {
    console.log('formData' , formData)
    return(dispatch) => {
        axios.post("http://localhost:3090/users/categories" , formData , {
            headers : {
                'authorization' : localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const result = response.data
            dispatch(setCategory(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

const setCategory = (data) => {
    return{
        type : "SET_CATEGORY" , 
        payload : data
    }
}

export const startListCategory = () => {
    return(dispatch)=> {
        axios.get("http://localhost:3090/users/list" , {
            headers : {
                'authorization' : localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const list = response.data
            dispatch(setListUser(list))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

const setListUser = (data) => {
    return{
        type : "GET_CATEGORY" , 
        payload : data
    }
}

export const startCategoryRemove = (id) => {
    return((dispatch)=>{
        axios.delete(`http://localhost:3090/users/categories/delete/${id}`, {
            headers : {
                'authorization' : localStorage.getItem("token")
            }
        })
            .then((response)=>{
                const result = response.data
                console.log("remove",result)
                dispatch(setcategoryRemove(result._id))
                dispatch(startListCategory())
                dispatch(startListExpense())
            })
            .catch((err)=>{
                alert(err.message)
            })
        }
    )   
}

export const setcategoryRemove=(id)=>{
    return {
        type: 'CATEGORY_REMOVE',
        payload : id
    }
}

// Swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire(
//         'Deleted!',
//         'Your file has been deleted.',
//         'success'
//       )
//     }
//   })
// if(confirmRemove){
//     axios.delete(`http://localhost:3090/users/categories/${id}`)
//         .then((response)=>{
//             const result = response.data
//             removeItem(result.id)
//         })
//         .catch((err)=>{
//             alert(err.message)
//         })
// }
// }

