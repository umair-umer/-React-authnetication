import zone2 from '../../asset/image/zone2.png'
import Zone from '../../asset/image/Zone.jpg' 
import MenuAppBar from "../../component/Appbar/AppBar";
import './css/home.css'
function Home(){
    return(
        <div className="home">
           
           
            <MenuAppBar/>

<div className="banner">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
           <img className="zone" src={Zone} alt=""/>
            </div>
            <div className="col-md-6">
           <img className="zone2" src={zone2} alt=""/>
            </div>
        </div>
    </div>
</div>
            

        </div>
        
      
    );
}
export default Home;