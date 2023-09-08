import {Link} from 'react-router-dom';
import './SideBarButton.css'


function SideBarButton(props){
    return(
        <>
        <div className="sidebar-div">
            <Link to="/profil" className="sidebar-link" >
                <button >Profil</button>
                
                
            </Link>
            <Link to="/" className="sidebar-link">
                
                <button>Keşfet</button>
                
            </Link>
        </div>
            
        </>)
            
        
        
}
export default SideBarButton;