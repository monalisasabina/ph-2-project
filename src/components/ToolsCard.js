import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function ToolCard({name,image,totalNumber,availableNumber,id,tool,onDeleteTool}){

    // const[availNumber,setAvailNumber]=useState(availableNumber)
    // const[toolUsers, setToolUsers]=useState([])

    //using local storage just to ensure I don't loose data when refreshing................................................. 
    const[toolUsers,setToolUsers]= useState(() =>{

      const savedUsers =localStorage.getItem(`toolUsers-${id}`)
      return savedUsers? JSON.parse(savedUsers) :[]
    })

    const[availNumber,setAvailNumber]=useState(() =>{

      const savedAvailNumber=localStorage.getItem(`availNumber-${id}`)
      return savedAvailNumber !==null? JSON.parse(savedAvailNumber) : availableNumber
      
    })

    useEffect(() =>{
       localStorage.setItem(`toolUsers-${id}`,JSON.stringify(toolUsers))
       localStorage.setItem(`availNumber-${id}`,JSON.stringify(availNumber))
      
    },[toolUsers,availNumber,id])
    


    // Adding availableNumber.......................................................
    function handleClickAdd(){
        console.log("added")

        const userName=window.prompt('Enter the person who has returned the tool')

        if(userName){ 

          setToolUsers((toolUsers)=> toolUsers.filter((toolUser) => toolUser !== userName))

          // The number should not go beyond total number
          setAvailNumber((availNumber) => availNumber<totalNumber ? availNumber + 1 : availNumber)} 
    }

    
    // subtracting availableNumber...................................................
    function handleClickMinus(){

       console.log('subtracted')

       const userName=window.prompt('Enter the name of the tool user')

       if(userName){

         setToolUsers((toolUsers) => [...toolUsers,userName])
         
         //The number should not subtract beyond zero  
         setAvailNumber((availNumber) => availNumber>0 ? availNumber -1 : availNumber)
       }
      
    }


    // Deleting tool................................................................
    function handleDeleteToolClick(){
     
       //delete warning and putting a password
       if(window.confirm("Only the store manager can delete this tool")){
         const password=window.prompt("Please enter your password")
     

       if(password==='password'){
         fetch(` http://localhost:3000/tools/${id}`,{
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

            <Link className="link" to={`/tool-user/${id}`} state={{toolUsers, toolName:name}}>View Tool Users</Link>

         </div>
        
      
    )
}
export default ToolCard