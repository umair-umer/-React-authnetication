import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../../container/home/home'
import SigNup from '../../container/signup/signup'
import SigiN from "../../container/sigin/sigin";
import Profile from '../../container/profile/profile'
function AppRouter(){
    return(<>
         
         <Router>
  <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/signup" component={SigNup}/>
     <Route exact path="/sigin" component={SigiN}/>
     <Route exact path="/profile" component={Profile}/>
   



  </Switch>





         </Router>
    
    
    
    
    </>);
}
export default AppRouter;