import {Link, useNavigate} from 'react-router-dom';
import ActivityList from '../components/ActivityList'
import '../components/Button.css'
import './Image.css';

  

function ProfilePage(){
    return(
        <>
            <div >
                <div>
                    <h1> ...'s Profile</h1>
                </div>
                <div className="rounded-image">
                    <img  src="image/img.jpg" alt="" className="image"></img>
                </div>
            </div>
            

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