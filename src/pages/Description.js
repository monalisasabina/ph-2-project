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
   fetch(`${process.env.REACT_APP_MY_TOOLS_API_URL}/tools/${toolId}`)
   .then(r => r.json())
   .then(data => setTool(data))
   .catch(error => console.error(error))
 }, [toolId]);

    return(
        <>
         <h1>DESCRIPTION</h1>

         <div>
            <h2 id="des-title">{tool.name}</h2>
            <img id="des-image"src={tool.imageURL}/>
            <h4>Description:</h4>
            <p className="para">{tool.description}</p>
            <p className="para"><strong>BRAND: </strong>{tool.brand}</p>
            <p className="para"><strong>MODEL: </strong>{tool.model}</p>
            <p className="para"><strong>BRAND: </strong>{tool.price}</p>
           

         </div>
        </>
    )
}
 export default Description