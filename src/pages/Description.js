import { useState } from "react";
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import "./Description.css"

function Description(){

    const[tool,setTool]=useState([])

    const params=useParams();
    console.log(params)
    const toolId = params.id;

 useEffect(() =>{
   fetch(` http://localhost:3000/tools/${toolId}`)
   .then(r => r.json())
   .then(data => setTool(data))
   .catch(error => console.error(error))
 }, [toolId]);

    return(
        <>
         <h1>ABOUT TOOL</h1>

         <div>
            <h2 id="des-title">{tool.name}</h2>
            <img id="des-image"src={tool.imageURL}/>
            <div className="des-para"> 
              <p className="para"><strong>DESCRIPTION: </strong>{tool.description}</p>
              <p className="para"><strong>BRAND: </strong>{tool.brand}</p>
              <p className="para"><strong>MODEL: </strong>{tool.model}</p>
              <p className="para"><strong>PRICE: </strong>{tool.price}</p>
              <p className="para"><strong>TOTAL NUMBER OF TOOLS: </strong>{tool.totalNumber}</p>
            </div>
         </div>
        </>
    )
}
 export default Description