import MenuAppBar from "../../component/Appbar/AppBar";
import BasicTextFields from "../../component/input/input";
import BasicButtons from '../../component/button/button'
import './css/signup.css'
import { useState } from "react";
import{createUserWithEmailAndPassword,auth} from '../../config/firebase/firebase';
import { useHistory } from "react-router";
function SigNup(){
   const [Username,Setusername]= useState("");
   const [Email,SetEmail]= useState("");
   const [Password,SetPassword]= useState("")
   const history=useHistory()
   let Reg =()=>{
    
    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       console.log (user)
       history.push('/sigin')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
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
                <BasicTextFields title="UserName" onChange={(e)=>{Setusername(e.target.value)}} type="text"/>
                </div>
                <div className="t-fields">
                <BasicTextFields title="email" onChange={(e)=>{SetEmail(e.target.value)}} type="text"/>
                </div>
                <div className="t-fields">
                <BasicTextFields title="password" onChange={(e)=>{SetPassword(e.target.value)}} type="password"/>
                </div>
                <div className="t-fields">
                < BasicButtons onClick={Reg} title="SigNup"/>
                </div>
               
            </div>
        </div>
    </div>
    </div>
   
    </div>
    
    
    
    
);
}
export default SigNup;