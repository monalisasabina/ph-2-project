import { useEffect, useState } from "react"
import "./Tools.css"


function Tools(){

   const[tools,setTools]=useState([]) 

   useEffect(() =>{
    fetch(`${process.env.REACT_APP_MY_TOOLS_API_URL}/tools`)
    .then((res) =>res.json())
    .then((toolsData) =>{
               setTools(toolsData)
               console.log(toolsData)
            } )
    .catch((error) => console.error("Error fetching tools",error))
       
   },[])


    return(
        <>
          <div className="container">
          {tools.map((tool) =>(
            <div className="tool-card" key={tool.id}>
                <h3>{tool.name}</h3>
                <img className="tool-image" src={tool.imageURL}/>
                <p>TOTAL NUMBER OF TOOLS: {tool.totalNumber}</p>
                <p>TOOLS AVAILABLE:{tool.availableNumber}</p>
                <button className="status">TOOL RETURNED</button>
                <button className="status">TOOL TAKEN</button>
                <button id="delete">DELETE TOOL</button>

            </div>
          ))}
          </div>
        </>
    )
}
export default Tools