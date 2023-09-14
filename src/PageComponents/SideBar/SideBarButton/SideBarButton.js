import {Link} from 'react-router-dom';
import './SideBarButton.css'
import {useAuth} from '../../../pages/LogIn/Authentication';
import { useNavigate } from "react-router-dom";

function SideBarButton(props){

    const ctx = useAuth();
    const navigate = useNavigate();
    const logoutHandler = async () =>{
        try{
            
            ctx.logout();
            

        } catch (err){
            console.error(err); //incase something happend we will know cause we console.log
        }
    
    navigate("../");
        
    };

    

    return(
        <>
        <div className="sidebar-div">
            <Link to="/root/profil" className="sidebar-link" style={{textDecoration: 'none'}}>
                <button >Profil</button>
                
                
            </Link>
            <Link to="/root" className="sidebar-link" style={{textDecoration: 'none'}}>
                
                <button >Keşfet</button>
                
            </Link>

            <Link className="sidebar-link" style={{textDecoration: 'none'}}>
                
                <button onClick={logoutHandler} className="sidebar-link">Logout</button>
                
            </Link>
            
            
        </div>
            
        </>)
            
        
        
}
export default SideBarButton;