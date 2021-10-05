import React, { useEffect, useState } from "react";
import {onAuthStateChanged,auth} from '../firebase/firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";
import Home from '../../container/home/home'
import SigNup from '../../container/signup/signup'
import SigiN from "../../container/sigin/sigin";
import Profile from '../../container/profile/profile'
 function PrivateRoute({component:Component,auth,...rest}){
   return(<>
            <Route 
            {...rest} component={({location})=>
             auth ?(
               <Component/>
             ): <Redirect to={{
               pathname:'/',
               state:{
                  from: location.pathname,
               },
             }} />
          
            
            }
            
            />
   
   
   
   </>);


 }
function PublicRoute({component : Component,auth,...rest}){
const location=useLocation();
 return(<>
      <Route
            {...rest}
            component={() =>
                !auth ? (
                    <Component />
                ) : (
                    <Redirect
                        to={location?.state?.from ? location.state.from : "/profile"}
                    />
                )
            }
        />
  
  
  
  
  
  
  </>);
}


function AppRouter(){
    const [isAuth, setIsAuth]=useState(false)
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
              setIsAuth(true)
          } else {
              setIsAuth(false)
          }
      })
  }, [])
    return(<>
         
         <Router>
  <Switch>
     <PublicRoute auth={isAuth} exact path="/" component={Home}/>
     <PublicRoute auth={isAuth} exact path="/signup" component={SigNup}/>
     <PublicRoute auth={isAuth} Route exact path="/sigin" component={SigiN}/>
     <PrivateRoute auth={isAuth}  exact path="/profile" component={Profile}/>
   



  </Switch>





         </Router>
    
    
    
    
    </>);
}
export default AppRouter;