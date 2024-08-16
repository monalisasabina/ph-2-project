import { useEffect, useState } from "react"
import "./Tools.css"
import Form from "../components/Form"
import ToolCard from "../components/ToolsCard"
import React from "react"


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

   // handle delete...............................................................
   function handleDeleteTool(deletedTool){

        const updatedTools=tools.filter((tool) =>tool.id !==deletedTool.id)
        setTools(updatedTools)

   }

   // handling submit.....................................................
    function handleToolFormSubmit(newTool) {
    setTools([...tools, newTool]);
  }



    return(
        <>
        <h1>TOOLS SECTION</h1>
        <div className="tool-container">

           <Form onAddTool={handleToolFormSubmit}/> 
 
           {tools.map((tool)=>(
      
                <ToolCard
                     key={tool.id}
                     tool={tool} 
                     id={tool.id}
                     name={tool.name} 
                     image={tool.imageURL}
                     totalNumber={tool.totalNumber}
                     availableNumber={tool.availableNumber}
                     onDeleteTool={handleDeleteTool}
                     />
            ))}
          </div>
        </>
     )
}
export default Tools