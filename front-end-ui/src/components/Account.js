import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startAccountUser } from "../actions/usersAction"
import { startDeleteAccount } from "../actions/deleteAction"

const Account = (props) => {

    const {handleAuth} = props
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startAccountUser())
    },[dispatch])

    const account = useSelector((state)=>{
        return state.user
    })
    console.log("account" , account.user)

    const handleClick = (props , handleAuth) => {
        dispatch(startDeleteAccount(props , handleAuth))
    }

    return(
        <div>
            <h1>User Account</h1>
            <h2>Username : {account.user.username}</h2>
            <h3>Email : {account.user.email}</h3>
            <br/>
            <button onClick={()=>{handleClick(props.history.push , handleAuth)}}>Delete Account</button>
        </div>
    )
}

export default Account