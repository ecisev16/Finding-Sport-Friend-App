import {Link, useNavigate} from 'react-router-dom';
import ActivityList from '../components/ActivityList'
import '../components/Button.css'

  

function ProfilePage(){
    return(
        <>
            <h1> ...'s Profile </h1>
            <div>
                

                <Link to="duzenlenen-aktiviteler">
                    <button className = "button" key="k1">Düzenlenen Aktiviteler</button>
                </Link>

                <Link to="">
                    <button className = "button" key="k2">Katılınan Aktiviteler</button>
                </Link>

                
                    
                
            </div>
        </>
        
        
    ) 
}

export default ProfilePage;

{/*<>
            <h1> ...'s Profile </h1>
            <ul>
                {ACTIVITIES.map((prod)=>(
                    <li key={prod.id}>
                        <Link to={prod.id}>{prod.title}</Link>
                    </li>
                    
                ))}
            </ul>
        </>*/}