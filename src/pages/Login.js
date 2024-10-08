import { useOutletContext } from "react-router-dom"
import "./Home.css"
import { useState } from "react"
import logo from "./Screenshot from 2024-07-17 17-10-45.png"

function Login(){

  const[formData, setFormData]=useState({
    username:"",
    password:"",
  })

  const login=useOutletContext()


  // input onChange event handler
  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
    })
  }

  //submitting the password form
  function handleLogin(event){
    event.preventDefault()
    
    if(formData.username ==="storeadmin" && formData.password ==="tools"){
      login()

    }else{
      alert("Invalid username or password")
    }
  }


    return (
       <>
       <img id="login-logo" src={logo} alt="panthera logo"/>
        <h1>ENGINEERING STORES</h1>

        <div id="password">
         <img id="login" src="https://media.istockphoto.com/id/678318770/photo/metal-gears.jpg?s=612x612&w=0&k=20&c=KSkQefXmld9JJwWQtOvPXc5Znx0WrJTkaOIGftTcfxQ="/>
          
        <form onSubmit={handleLogin}>

           <label htmlFor="username">Username:</label>
           <input 
               className="input-password"
               type="text" 
               name="username"
               value={formData.username}
               onChange={handleChange}
               placeholder="Enter Username"
        
            />
          
          <label htmlFor="password">Password:</label>
          <input 
               className="input-password" 
               type="password" 
               name="password"
               value={formData.password}
               onChange={handleChange}
               placeholder="Enter Password"
          />
          
          <button className="password" type="submit">LOGIN</button>
        </form>
        </div>
        
       </>
    )
}
export default Login