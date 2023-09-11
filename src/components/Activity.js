import {Link, useNavigate} from 'react-router-dom';
import './Activity.css';
import ActivityDate from './ActivityDate';
import Card from '../UI/Card';
import ProfilPhoto from './ActivityProfilPhoto';

function Activity(props){
    return(
        <>
                
                
                    
                    <Card className="activity-item">    
                        <ProfilPhoto/>
                      
                        <div className="activity-item__description">
                            {props.title}
                            
                        </div>
                        
                            <div className='activity-box-time-and-invite'>
                                <div className='activty-box-time'>
                                <ActivityDate 
                                date = {props.date}>  
                                </ActivityDate>
                                </div>
                                <div className='activty-box-invite'>
                                    
                                <button 
                                className="activity-item__button">Katılma isteği
                                </button>
                               
                                </div>
                               
                            </div>
                    
                    

                    </Card>
           
            
            
        </>)
            
        
        
}

export default Activity;