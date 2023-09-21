
import {Link, useNavigate} from 'react-router-dom';
import ActivityList from '../components/ActivityList'
import './OwnerActivities.css'
import dummyData from './ProfilDummy';
export const ACTIVITIES = [
   
      {
        id: 'e1',
        title: 'Voleybol Maçı',
        
        date: new Date(2020, 7, 14),
      },
      {
        id: 'e3',
        title: 'Tenis Maçı',
        
        date: new Date(2021, 2, 28),
      },
      {
        id: 'e4',
        title: 'Yoga Pratiği',
        
        date: new Date(2021, 5, 12),
      },
    
  ];
 


export function OwnerActivitiesPage(){
    return(
        <div className="expenses">
            <ActivityList/>
        </div>
        
        
    ) 
} 

