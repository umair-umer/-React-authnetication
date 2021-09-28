import MenuAppBar from "../../component/Appbar/AppBar";
import BasicTextFields from "../../component/input/input";
import BasicButtons from '../../component/button/button'
import './css/sig.css'
import { useState } from "react";
import { useHistory } from "react-router";
import{signInWithEmailAndPassword,auth} from '../../config/firebase/firebase'


function SigiN(){
   
   const [Email,SetEmail]= useState("");
   const [Password,SetPassword]= useState("")
   const history= useHistory();
   let Sigin =()=>{
       console.log(Email,Password)
       
signInWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.email)
    history.push('/profile')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
   }
  

    return(

    <div className="Sinup">
        <div className="appbar">
        <MenuAppBar/>
        </div>
    
    <div className="s-f-m">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 justify-content-center">
                <div className="s-heading ">
                    <h1>signUp</h1>
                </div>
                
                <div className="t-fields">
                <BasicTextFields title="email" onChange={(e)=>{SetEmail(e.target.value)}} type="text"/>
                </div>
                <div className="t-fields">
                <BasicTextFields title="password" onChange={(e)=>{SetPassword(e.target.value)}} type="password"/>
                </div>
                <div className="t-fields">
                < BasicButtons onClick={Sigin} title="sigin"/>
                </div>
               
            </div>
        </div>
    </div>
    </div>
   
    </div>
    
    
    
    
);
}
export default SigiN;