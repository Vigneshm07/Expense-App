import React from "react"
import { Link , Route , withRouter } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from "./Home"
import Setting from "./Setting"
import Account from "./Account"
import Swal from "sweetalert2"
import Archive from "./Archive"
import AddProfile from "./AddProfile"

const NavBar = (props) => {
    const { loggedIn , handleAuth } = props

    return(
        <div className="App">
            {
                loggedIn ? (
                    <div>
                        <Link to="/">Home</Link><br/>
                        <Link to="/account">Account</Link> | 
                        <Link to="/setting">Settings</Link> | 
                        <Link to="/archive">Archive</Link> | 
                        <Link to="/profile">Profile</Link> |
                        <Link to="/logout" onClick={()=>{
                            localStorage.removeItem("token")
                            Swal.fire("Successfully Logged out")
                            props.history.push("/")
                            handleAuth()
                        }}>Logout</Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/register">Register</Link> |
                        <Link to="/login">Login</Link>
                    </div>
                )
            }

            <Route path="/" component={Home} exact={true} />
            <Route path="/register" component={Register} exact={true} />
            <Route path="/login" exact={true} render={(props)=>{
                return <Login {...props} handleAuth={handleAuth} />
            }}
            />
            <Route path="/account" exact={true} render={(props)=>{
                return <Account {...props} handleAuth={handleAuth}/>
            }}
            />
            <Route path="/setting" component={Setting} exact={true} />
            <Route path="/archive" component={Archive} exact={true} />
            <Route path="/profile" component={AddProfile} exact={true} />
        </div>
    )
}

export default withRouter(NavBar)

