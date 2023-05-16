import React from "react"
import { useFormik } from 'formik'
import { startGetUser } from "../actions/usersAction"
import { useDispatch } from "react-redux"
import { validationRegisterSchema } from "../validationSchema"
import "../App.css"

const Register = (props) => {
    const dispatch = useDispatch()

    const initialValues = {
        username : "" , 
        email : "",
        password : ""
    }

    const { values , handleChange , handleSubmit , errors , touched } = useFormik({
        initialValues : initialValues ,
        validationSchema : validationRegisterSchema ,
        onSubmit : (values) => {
            console.log(values)
            dispatch(startGetUser(values , props.history.push ))
        }
    })

    return(
        <div className ="App">
            <h2>Register With Us</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label> <br/>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={values.username}
                    onChange={handleChange}
                    name="username"
                />
                <br/>
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
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}
export default Register