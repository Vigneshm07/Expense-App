import axios from "axios"

export const startExpenseUser = (formData) => {
    console.log('formData', formData)
    return (dispatch) => {
        axios.post("http://localhost:3090/users/expense", formData, {
            headers: {
                'authorization': localStorage.getItem("token")
            }
        })
            .then((response) => {
                const result = response.data
                //console.log("result", result)
                dispatch(setExpense(result))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const setExpense = (data) => {
    return {
        type: "SET_EXPENSE",
        payload: data
    }
}

export const startListExpense = () => {
    return (dispatch) => {
        axios.get("http://localhost:3090/users/expense", {
            headers: {
                'authorization': localStorage.getItem("token")
            }
        })
            .then((response) => {
                const list = response.data
                //console.log("list", list)
                dispatch(setListUser(list))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const setListUser = (data) => {
    return {
        type: "GET_EXPENSE",
        payload: data
    }
}

export const startUpdateExpense = (formData, _id) => {
    return (dispatch) => {
        axios.put(`http://localhost:3090/users/expense/${_id}`, formData, {
            headers: {
                'authorization': localStorage.getItem("token")
            }
        })
            .then((response) => {
                const update = response.data
                //console.log("update", update)
                dispatch(setUpdateExpense(update))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const setUpdateExpense = (data) =>{
    return{
        type: "UPDATE_EXPENSE",
        payload: data
    }
}

export const startExpenseSoftDelete = (id) => {
    return(dispatch) => {
        axios.delete(`http://localhost:3090/users/expenseSoftDelete/${id}` ,{
            headers: {
                'authorization': localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const result = response.data
            //console.log("soft" , result)
            dispatch(setSoftDelete(id))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

const setSoftDelete = (id) => {
    return{
        type: "SOFT_DELETE",
        payload: id
    }
}

export const startSoftList = () => {
    return (dispatch) => {
        axios.get("http://localhost:3090/users/expenseSoftList", {
            headers: {
                'authorization': localStorage.getItem("token")
            }
        })
            .then((response) => {
                const list = response.data
                console.log("Soft list", list)
                dispatch(setSoftList(list))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const setSoftList = (data) => {
    return {
        type: "SOFT_LIST",
        payload: data
    }
}

export const startSoftRestore = (id) => {
    return(dispatch)=>{
        axios.get(`http://localhost:3090/users/expense/${id}`,{
            headers: {
                'authorization': localStorage.getItem("token")
            }
        })
        .then((response)=>{

            const result = response.data
            console.log("restore" , result)
            dispatch(setSoftRestore(id))
            dispatch(startListExpense())
            dispatch(setSoftRestoreDelete(id))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

const setSoftRestoreDelete = (id) => {
    return {
        type: "SOFT_REDELETE",
        payload: id
    }
}

const setSoftRestore = (id)=> {
    return{
        type: "SOFT_RESTORE",
        payload: id
    }
}