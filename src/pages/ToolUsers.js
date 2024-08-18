import { useLocation } from "react-router-dom";
import "./toolUsers.css"

function ToolUsers(){

    // the useLocation allows me to access the current location object, 
    // which contains information about the URL of the page the user is currently on.
    
    const location= useLocation()
    const {toolUsers,toolName} =location.state

    return(
        <>
           <h1>TOOL USERS</h1>
          
           <div className="tooluser-list">
             <h3>The following should return {toolName}(s):</h3>
             <ol >
               {toolUsers.length > 0 ? (
                    toolUsers.map((user, index) => (
                        <li key={index}>{index+1}. {user}</li>
                    ))
                ) : (
                    <p>No users have taken this tool.</p>
                )}
             </ol>
           </div>
 
        </>
    )
}
export default ToolUsers