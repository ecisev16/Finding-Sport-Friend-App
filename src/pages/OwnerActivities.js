
import {Link, useNavigate} from 'react-router-dom';
import ActivityList from '../components/ActivityComponents/ActivityList'
import './OwnerActivities.css'
 


export function OwnerActivitiesPage(){
    return(
        <div className="expenses">
            <ActivityList/>
        </div>
        
        
    ) 
} 

