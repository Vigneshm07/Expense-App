import React, { useState , useEffect } from "react"
import NavBar from "./components/NavBar"
import "./App.css"

const App = (props) => {
  const [loggedIn , setLoggedIn] = useState(false)

  const handleAuth = () => {
    setLoggedIn(!loggedIn)
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      handleAuth()
    }
  },[])

  return(
    <div className="App">
      < NavBar loggedIn={loggedIn} handleAuth={handleAuth}/>
    </div>
  )
}

export default App
