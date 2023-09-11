
import {Link, useNavigate} from 'react-router-dom';
import ActivityList from '../components/ActivityList'
import './OwnerActivities.css'

const ACTIVITIES = [
    {
      photo: "../public/components/image/person1.jpg",
      id: 'e1',
      title: 'Voleybol Maçı',
      point: 7.8,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e3',
      title: 'Tenis Maçı',
      point: 8.6,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Yoga Pratiği',
      point: 6.8,
      date: new Date(2021, 5, 12),
    },
  ];
function OwnerActivitiesPage(){
    return(
        <div className="expenses">
            <ActivityList activities = {ACTIVITIES}/>
        </div>
        
        
    ) 
}

export default OwnerActivitiesPage;