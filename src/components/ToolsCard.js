import { useState } from "react"
import { Link } from "react-router-dom"

function ToolCard({name,image,totalNumber,availableNumber,id,tool,onDeleteTool}){

    const[availNumber,setAvailNumber]=useState(availableNumber)


    // Adding availableNumber.......................................................
    function handleClickAdd(){
        console.log("added")
         
        // The number should not go beyond total number
        return setAvailNumber((availNumber) => 
          availNumber<totalNumber ? availNumber + 1 : availNumber
      )
        
    }

    
    // subtracting availableNumber...................................................
    function handleClickMinus(){

       console.log('subtracted')

       //The number should not subtract beyond zero  
       return setAvailNumber((availNumber) =>
             availNumber>0 ? availNumber -1 : availNumber
        
       )
    }


    // Deleting tool................................................................
    function handleDeleteToolClick(){
     
     //delete warning and putting a password
       if(window.confirm("Only the store manager can delete this tool?")){
         const password=window.prompt("Please enter your password")
     

       if(password==='password'){
         fetch(`${process.env.REACT_APP_MY_TOOLS_API_URL}/tools/${id}`,{
            method:"DELETE",
          })
         .then((res) => res.json())
         .then(() => onDeleteTool(tool))
         .catch((error) => console.error("Error deleting tool",error))

         }else{
        alert('Incorrect password')
       }
      }  
    }


    return(
        <div className="container">
            
          <div className="tool-card">

            <h3 id="card">{name}</h3>
            <img className="tool-image" src={image}/>
            <p className="tools">TOTAL NUMBER OF TOOLS: {totalNumber}</p>
            <p className="tools">TOOLS AVAILABLE:{availNumber}</p>
            {availNumber ===0 ? <p className="tools">NO TOOLS AVAILABLE</p> :null}

            <button onClick={handleClickAdd} className="status">TOOL RETURNED</button>
            <button onClick={handleClickMinus}className="status">TOOL TAKEN</button>
            <button onClick={handleDeleteToolClick} className="status" id="delete">DELETE TOOL</button>

            <Link className="link" to={`/description/${id}`}>View More Details</Link>

         </div>
        
        </div>
    )
}
export default ToolCard