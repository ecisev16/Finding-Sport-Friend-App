import './Activity.css';
import ActivityDate from './ActivityDate';
import Card from '../UI/Card';

function Activity(props){
    return(
        <>
            <Card className="activity-item">
                <ActivityDate date = {props.date}/>
                <div className="activity-item__description">
                    <h4>{props.title}</h4>
                    
                </div>
                <button className="activity-item__button">Katılma isteği</button>
            </Card>
            
        </>)
            
        
        
}

export default Activity;