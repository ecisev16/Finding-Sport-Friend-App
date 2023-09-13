
import {Link, useNavigate} from 'react-router-dom';
import ActivityList from '../components/ActivityList'
import './OwnerActivities.css'

const ACTIVITIES = [
    {
      photo: "../public/components/image/person1.jpg",
      id: 'e1',
      titleElement: ['Voleybol','Rugby','Masa Tenisi'],
      AboutMe:"adım mehmet yaş 28",
      point: 7.8,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e3',
      titleElement: ['Voleybol','Hentbol','Basketbol','Yüzme','Futbol'],
      aboutMe:"adım fatma yaş 25",
      point: 8.6,
      date: new Date(2021, 2, 28),
    },
    {
      id: '',
      itleElement: ['Futbol','American Futbolu','Kayak','Masa Tenesi'],
      aboutMe:"adım ayşe yaş 35",
      point: 6.8,
      date: new Date(2021, 5, 12),
    },
  ];
/* function OwnerActivitiesPage(){
    return(
        <div className="expenses">
            <ActivityList activities = {ACTIVITIES}/>
        </div>
        
        
    ) 
} */

export default ACTIVITIES;