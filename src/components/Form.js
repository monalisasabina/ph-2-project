import "./Form.css"

function Form({tools}){

    console.log({tools})

    return(
        <div id="form-container">
            
            <form>
               <label className="label-form"> NAME OF TOOL:</label>
               <input className="input-form"type="text" placeholder="Enter name of tool" required></input>

               <label className="label-form">TOOL PICTURE:</label>
               <input className="input-form" type="text" placeholder="Enter tool picture URL"/>

               <label className="label-form">TOOL BRAND:</label>
               <input className="input-form" type="text" placeholder="Enter tool brand" />

               <label className="label-form">TOOL MODEL NO:</label>
               <input className="input-form" type="text" placeholder="Enter tool model number"/>

               <label className="label-form">PRICE:</label>
               <input className="input-form" type="number" placeholder="Enter tool price"/>

               <label className="label-form">TOOL NUMBER:</label>
               <input className="input-form" type="number" placeholder="Enter tool total number"/>

               <label  className="label-form">DESCRIPTION:</label>
               <textarea className="input-form" placeholder="Enter tools description"></textarea>

               <button id="button-form" type="submit">SUBMIT</button>



            </form>
        
        </div>
    )
}
export default Form