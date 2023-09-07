import Activity from "./Activity";
import './ActivityList.css';


const ActivityList = (props) =>{
    
    if (props.activities.length === 0){
        return <h2 className = 'activity-list__fallback'>Aktivite bulunamadı</h2>
    };

    return (
    <ul className = "activity-list">
        {props.activities.map((actvy) => (
            <Activity
                key = {actvy.id}
                title = {actvy.title}
                
                date = {actvy.date}
            />
        ))}
        {props.activities.map((actvy) => (
            <Activity
                key = {actvy.id}
                title = {actvy.title}
                
                date = {actvy.date}
            />
        ))}
        {props.activities.map((actvy) => (
            <Activity
                key = {actvy.id}
                title = {actvy.title}
                
                date = {actvy.date}
            />
        ))}
    </ul>

    );
}

export default ActivityList;