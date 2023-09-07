import React from "react"
import { Link, Route, withRouter } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from "./Home"
import Setting from "./Setting"
import Account from "./Account"
import Swal from "sweetalert2"
import Archive from "./Archive"
import AddProfile from "./AddProfile"
import "../App.css"

const NavBar = (props) => {
    const { loggedIn, handleAuth } = props

    return (
        <div className="bg">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div class="container-fluid">
                    <a class="navbar-brand" href=" ">Expense App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        {
                            loggedIn &&
                            <div>
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/account">Account</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/setting">Settings</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/archive">Archive</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/profile">Profile</a>
                                    </li>

                                </ul>
                            </div>
                        }
                    </div>
                    <div class="d-flex">
                        {
                            loggedIn ?
                                (
                                    <div>
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li class="nav-item">
                                                <a class="nav-link" href="/logout" onClick={() => {
                                                    localStorage.removeItem("token")
                                                    Swal.fire("Successfully Logged out")
                                                    props.history.push("/")
                                                    handleAuth()
                                                }}>Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div>
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li class="nav-item">
                                                <a class="nav-link" href="/register">Register</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="/login">Login</a>
                                            </li>
                                        </ul>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </nav >
            <Route path="/" component={Home} exact={true} />
            <Route path="/register" component={Register} exact={true} />
            <Route path="/login" exact={true} render={(props) => {
                return <Login {...props} handleAuth={handleAuth} />
            }}
            />
            <Route path="/account" exact={true} render={(props) => {
                return <Account {...props} handleAuth={handleAuth} />
            }}
            />
            <Route path="/setting" component={Setting} exact={true} />
            <Route path="/archive" component={Archive} exact={true} />
            <Route path="/profile" component={AddProfile} exact={true} />
        </div >
    )
}

export default withRouter(NavBar)


{/* <div className="App">
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
        </div> */}

