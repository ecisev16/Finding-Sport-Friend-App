import {Link} from 'react-router-dom';
import {auth} from "../../../firebase/firebase";
import {signOut} from "firebase/auth";
import './SideBarButton.css'
import {useAuth} from '../../../pages/LogIn/Authentication';
import { useNavigate } from "react-router-dom";

function SideBarButton(props){

    const ctx = useAuth();
    const navigate = useNavigate();
    const logoutHandler = async () =>{
        try{
            signOut(auth)
            ctx.logout();
            console.log(ctx.user, "LOGOUT KONTROL");
            

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

            <div className="sidebar-link" style={{textDecoration: 'none'}}>
                
                <button onClick={logoutHandler} className="sidebar-link">Logout</button>
                
            </div>
            
            
        </div>
            
        </>)
            
        
        
}
export default SideBarButton;