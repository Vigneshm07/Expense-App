import axios from "axios"

export const startDeleteAccount = (props , handleAuth ) => {
    return(dispatch)=>{
        axios.all([
            axios.delete('http://localhost:3090/users/deleteAccount',{
                headers: {
                    'authorization': localStorage.getItem("token")
                }
            }),
            axios.delete('http://localhost:3090/users/deleteProfile',{
                headers : {
                    'authorization' : localStorage.getItem("token")
                }
            }),
            axios.delete('http://localhost:3090/users/deleteCategory',{
                headers : {
                    'authorization' : localStorage.getItem("token")
                }
            }),
            axios.delete('http://localhost:3090/users/deleteExpense',{
                headers : {
                    'authorization' : localStorage.getItem("token")
                }
            }),
            // axios.delete('http://localhost:3090/users/deleteBudget',{
            //     headers: {
            //         'authorization': localStorage.getItem("token")
            //     }
            // })
        ],{
        })
        .then((response)=>{
            console.log("response" , response.data)
            localStorage.removeItem("token")
            props("/register")
            handleAuth()
            dispatch(RemoveAll())
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

const RemoveAll = () => {
    return {
        type : "REMOVE_ALL"
    }
}