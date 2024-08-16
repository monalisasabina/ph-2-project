import { useEffect, useState } from "react"
import "./Tools.css"
import Form from "../components/Form"
import ToolCard from "../components/ToolsCard"
import React from "react"


function Tools(){

   const[tools,setTools]=useState([]) 
   const[search,setSearch]=useState('')

   useEffect(() =>{
    fetch(`${process.env.REACT_APP_MY_TOOLS_API_URL}/tools`)
    .then((res) =>res.json())
    .then((toolsData) =>{
               setTools(toolsData)
               console.log(toolsData)
            } )
    .catch((error) => console.error("Error fetching tools",error))
       
   },[])

   // handle delete......................................................................
   function handleDeleteTool(deletedTool){

        const updatedTools=tools.filter((tool) =>tool.id !==deletedTool.id)
        setTools(updatedTools)

   }

   // handling submit...................................................................
    function handleToolFormSubmit(newTool) {
    setTools([...tools, newTool]);
  }


   //search filter..............................................................  
   const filteredTools = tools.filter((tool) =>
      tool.name.toLowerCase().includes(search.toLowerCase())
    );


    return(
        <>
        <h1>TOOLS SECTION</h1>

        <div className="tool-container">

           <Form onAddTool={handleToolFormSubmit}/> 

           <div className="tool-card-container">

           <div className="search-form">
                <label className='search' htmlFor="search">SEARCH: </label>
                <input className="searchbar"
                       type="search"
                       placeholder="Search for tool"
                       value={search}
                       onChange={(event) =>setSearch(event.target.value)}
                
                />
             </div>

             {filteredTools.map((tool)=>(
      
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
         </div>
        </>
     )
}
export default Tools