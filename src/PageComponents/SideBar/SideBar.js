import './SideBar.css'
import './SideBarButton/SideBarButton'
import SideBarButton from './SideBarButton/SideBarButton';

function SideBar(props){
    return(
        <>
            <div className="sidebar">
                <SideBarButton/>
            </div>
        </>)
            
        
        
}
export default SideBar;