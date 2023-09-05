import {Link, useNavigate} from 'react-router-dom';
import ActivityList from '../components/ActivityList'


  

function ProfilePage(){
    return(
        <>
            <h1> ...'s Profile </h1>
            <ul>
                
                <li key="k1">
                    <Link to="duzenlenen-aktiviteler">Düzenlenen Aktiviteler</Link>
                </li>

                <li key="k2">
                    <Link to="products">Katılınan Aktiviteler</Link>
                </li>
                    
                
            </ul>
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