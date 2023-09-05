import {Link, useNavigate} from 'react-router-dom';
import './Activity.css';
import ActivityDate from './ActivityDate';
import Card from '../UI/Card';

function Activity(props){
    return(
        <>
            <Link to=".." relative="path">
                <Card className="activity-item">
                    <ActivityDate date = {props.date}/>
                    <div className="activity-item__description">
                        {props.title}
                        
                    </div>
                    <button className="activity-item__button">Katılma isteği</button>

                </Card>
            </Link>
            
            
        </>)
            
        
        
}

export default Activity;