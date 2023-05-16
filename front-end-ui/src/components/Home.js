import React from "react"
import Expense from "./Expense"
import { useSelector } from "react-redux"

const Home = (props) => {
    
    const { loggedIn } = props

    return(
        <div>
            <h1>Expense App</h1>
                <Expense/>
        </div>
    )
}

export default Home