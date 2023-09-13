import {Link} from 'react-router-dom';
import './SideBarButton.css'


function SideBarButton(props){
    return(
        <>
        <div className="sidebar-div">
            <Link to="/root/profil" className="sidebar-link" style={{textDecoration: 'none'}}>
                <button >Profil</button>
                
                
            </Link>
            <Link to="/root" className="sidebar-link" style={{textDecoration: 'none'}}>
                
                <button >Keşfet</button>
                
            </Link>
        </div>
            
        </>)
            
        
        
}
export default SideBarButton;