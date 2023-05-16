import axios from "axios"
import Swal from "sweetalert2"

export const startGetUser = (formData , props) => {
    
    return() => {
        axios.post('http://localhost:3090/users/register' , formData)
            .then((response)=>{
                const user = response.data
                console.log("register" , user)
                alert('User Registerd Successfully')
                props("/login")
            })
            .catch((err)=>{
                console.log(err.message)
            })
    }
}

export const startLoginUser = (formData , props , handleAuth) => {
    return()=>{
        axios.post('http://localhost:3090/users/login' , formData)
        .then((response)=>{
            const user = response.data
            console.log("user" , user)
            if(user.hasOwnProperty('errors')){
                alert(user.errors)
            } else {
                Swal.fire("Successfully Logged in")
                localStorage.setItem("token" , user.token)
                props("/")
                handleAuth()
            }
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

export const startAccountUser = (token) => {

    return(dispatch)=>{
        axios.get('http://localhost:3090/users/account' , {
            headers: {
                'authorization' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const user = response.data
            console.log("Account" , user)
            dispatch(getUser(user))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

const getUser = (data) => {
    return {
        type : "GET_ACCOUNT" , 
        payload : data
    }
}