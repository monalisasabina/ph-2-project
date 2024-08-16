import { v4 as uuid } from 'uuid'
import { useState } from "react"
import "./Form.css"


function Form({onAddTool}){

    const[name, setName]=useState('')
    const[image,setImage]=useState('')
    const[brand,setBrand]=useState('')
    const[model,setModel]=useState('')
    const[price,setPrice]=useState('')
    const[toolNumber,setToolNumber]=useState('')
    const[description,setDescription]=useState('')


  //Handling changes on the input fields and confirming using console.log()................................................... 
    // Name field
    function handleNameChange(event){
       setName(event.target.value)
       console.log(event.target.value)
    }

    // Image field
    function handleImageChange(event){
        setImage(event.target.value)
        console.log(event.target.value)
    }

    // Brand field
    function handleBrandChange(event){
        setBrand(event.target.value)
        console.log(event.target.value)
    }

     // Model field
     function handleModelChange(event){
        setModel(event.target.value)
        console.log(event.target.value)
    }

     // Price field
     function handlePriceChange(event){
        setPrice(event.target.value)
        console.log(event.target.value)
    }

     // Total tool number field
     function handleToolNumber(event){
        setToolNumber(event.target.value)
        console.log(event.target.value)
    }

      // Description field
      function handleDescriptionChange(event){
        setDescription(event.target.value)
        console.log(event.target.value)
    }

    

   //Submitting the form
   function handleSubmit(event){

    event.preventDefault()

    const toolData= {
        name:name,
        brand:brand,
        model:model,
        price:price,
        description:description,
        imageURL:image,
        availableNumber:toolNumber,
        totalNumber:toolNumber,
      }
      console.log(toolData);

      fetch(`${process.env.REACT_APP_MY_TOOLS_API_URL}/tools`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toolData),
      })
        .then((res) => res.json(res))
        .then((newTool) => onAddTool(newTool));
       

        // resetting field form
        setName('');
        setImage('');
        setBrand('');
        setModel('');
        setPrice('');
        setDescription('');
        setToolNumber('');
    }   


    return(
        <div id="form-container">
           
            <form onSubmit={handleSubmit}>
               <label className="label-form"> NAME OF TOOL:</label>
               <input onChange={handleNameChange} value={name} className="input-form"type="text" placeholder="Enter name of tool" required></input>

               <label className="label-form">TOOL PICTURE:</label>
               <input onChange={handleImageChange} value={image} className="input-form" type="url" placeholder="Enter tool picture URL" required/>

               <label className="label-form">TOOL BRAND:</label>
               <input onChange={handleBrandChange} value={brand} className="input-form" type="text" placeholder="Enter tool brand" />

               <label className="label-form">TOOL MODEL NO:</label>
               <input onChange={handleModelChange} value={model} className="input-form" type="text" placeholder="Enter tool model number"/>

               <label className="label-form">PRICE:</label>
               <input onChange={handlePriceChange} value={price} className="input-form" type="number" placeholder="Enter tool price"/>

               <label className="label-form">TOOL NUMBER:</label>
               <input onChange={handleToolNumber} value={toolNumber}className="input-form" type="number" placeholder="Enter tool total number"/>

               <label  className="label-form">DESCRIPTION:</label>
               <textarea onChange={handleDescriptionChange} value={description}className="input-form" placeholder="Enter tools description"></textarea>

               <button id="button-form" type="submit">SUBMIT</button>

            </form>
        </div>
    )
}
export default Form