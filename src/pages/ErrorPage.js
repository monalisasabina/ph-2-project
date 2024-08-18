import { useNavigate } from "react-router-dom"
import "./ErrorPage.css"


function ErrorPage(){
 
  // Using navigate hook to direct back home on the error page
  const navigate=useNavigate()

  function handleGoHome(){
    navigate('/')
     
  }
     
    return (
        <>
          <h1>ERROR PAGE</h1>
          <h2 id="err-message" >Oops! We can't find that page</h2>
          <button onClick={handleGoHome}className="err-btn">Go Back home</button>
          <div id="err-image-cont">
            <img className="err-image" src="https://cdn.vectorstock.com/i/500p/81/59/404-error-page-not-found-tiny-people-vector-51588159.jpg"/>
          </div>
          

        </>
    )
}

export default ErrorPage