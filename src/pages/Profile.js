import {Link, useNavigate} from 'react-router-dom';
import ActivityList from '../components/ActivityList'
import '../components/Button.css'
import ProfilPhoto from '../components/ActivityProfilPhoto';
import './Profile.css'
 import PointExtractor from '../components/point'
import AboutMe from '../components/AboutMe'
import Title from '../components/Title';
  

function ProfilePage(){
    return (
      <>
        <div className="container-lg main-div">
          <div className="row">
            <div className=" col pp-left">
              <ProfilPhoto />
              <PointExtractor />
            </div>
          </div>
          <div className=" col pp-center">
            <AboutMe/>
            <Title/>
          </div>
          <div className='col pp-right' >
            SAĞ TARAF
          </div>
        </div>
      </>
    ); 
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



        {/* <div>
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
                </Link>                */}