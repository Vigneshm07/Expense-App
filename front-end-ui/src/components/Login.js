import { useFormik } from "formik"
import React from "react"
import { useDispatch } from "react-redux"
import { startLoginUser } from "../actions/usersAction"
import { validationLoginSchema } from "../validationSchema"
import "../App.css"

const Login = (props) => {
    const {handleAuth} = props
    const dispatch = useDispatch()

    const initialValues = {
        email : "" , 
        password : ""
    }

    const { values , handleChange , handleSubmit , errors , touched} = useFormik({
        initialValues : initialValues , 
        validationSchema : validationLoginSchema ,
        onSubmit : (values) => {
            console.log(values)
            dispatch(startLoginUser(values , props.history.push , handleAuth))
        }
    })

    return(
        <div className ="App">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <label>Email</label> <br/>
                <input
                    type="text"
                    placeholder="Enter Email"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                />
                <br/>
                <label>Password</label> <br/>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                />
                <br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login