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

    const profilHandler = async () =>{

        console.log(ctx.user.user.uid, "user id")
        navigate(`/root/${ctx.user.user.uid}`); 
        
    };

    

    return(
        <>
        <div className="sidebar-div">
            <div className="sidebar-link" style={{textDecoration: 'none'}}>
                <button onClick = {profilHandler} >Profil</button>
                
                
            </div>
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