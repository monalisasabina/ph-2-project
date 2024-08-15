import "./Home.css"
function Login(){
     
    return (
       <>
        <h1>ENGINEERING STORES</h1>

        <div id="password">
         <img id="login" src="https://media.istockphoto.com/id/678318770/photo/metal-gears.jpg?s=612x612&w=0&k=20&c=KSkQefXmld9JJwWQtOvPXc5Znx0WrJTkaOIGftTcfxQ="/>
          
          <label htmlFor="username">Username:</label>
          <input className="input-password"type="text"/>
          
          <label htmlFor="password">Password:</label>
          <input className="input-password" type="password" />
          
          <button type="submit">LOGIN</button>
        </div>
        
       </>
    )
}
export default Login