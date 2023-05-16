import axios from "axios"

export const startBudgetUser = () => {
    return(dispatch)=>{
        axios.get("http://localhost:3090/users/budget" , {
            headers: {
                'authorization' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const budget = response.data
            console.log("response", budget)
            dispatch(setBudget(budget))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

const setBudget = (amount) => {
    return {
        type : "GET_BUDGET" , 
        payload : amount
    }
}

export const startUpdateUser = (formData) => {
    console.log(formData)
    return(dispatch)=> {
        axios.put(`http://localhost:3090/users/update/${formData._id}` , formData ,{
            headers: {
                'authorization' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            console.log("form" , response.data)
            dispatch(setUpdate(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

const setUpdate = (update) => {
    return {
        type : "GET_UPDATE" , 
        payload : update
    }
}
