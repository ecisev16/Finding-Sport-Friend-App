import { Link, useNavigate } from 'react-router-dom';
import ActivityList from '../components/ActivityComponents/ActivityList'
import '../components/Button.css'
import Activity from '../components/ActivityComponents/Activity';
import ProfilPhoto from '../components/ActivityComponents/ActivityProfilPhoto';
import './Profile.css'
import PointExtractor from '../components/ProfilComponents/point'
import AboutMe from '../components/ProfilComponents/AboutMe'
import Title from '../components/ProfilComponents/Title';
import Name from '../components/ProfilComponents/Name';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {db, auth, storage} from "../firebase/firebase";
import {
    onSnapshot,
    collection,
} from "firebase/firestore";
import { useAuth } from './LogIn/Authentication';

function ProfilePage(){

    const [profileList, setProfileList] = useState([]);
    const profileCollectionRef = collection(db, "Profiles");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    var { profilID } = useParams();

    const ctx = useAuth();
    const ownerActivitiesHandler = async () =>{

        console.log(ctx.user.user.uid, "user id")
        navigate(`/root/${profilID}/duzenlenen-aktiviteler`); 
        
    };
    
    useEffect(() => {

        setLoading(true);
        
        const unsub = onSnapshot(profileCollectionRef, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            const doubleFiltered = items.filter((doc) => doc.userID === profilID)
            setProfileList(doubleFiltered);
            setLoading(false);
        });

        
        return () => {
          unsub();
        };
    
        
      }, [profilID]);

    profileList.length !== 0 && console.log( profileList[0].Sports, "SPORTS ARRAY VAR MI")
    return (
      <>
        <div>
            {!loading && profileList.length > 0 &&
                <div className="container Profil">
                    <div className="row">
                        <div className="col-2">
                            <ProfilPhoto />
                            <Name name = {profileList[0]?.NameSurname}/>
                            <PointExtractor  point = {profileList[0]?.Point}/>
                        </div>
                        <div className="col-10">
                        <AboutMe aboutMe = {profileList[0]?.AboutMe}/>
                        </div>
                    </div>
                    
                    <br></br>
                    <br></br>
                    <h3 className="empty">İlgilediği Sporlar</h3>
                    <Title sports = {profileList.length !== 0 && profileList[0].Sports} className="Title"></Title>
                    
                </div>

            }
            {loading && <h1 className="container Profil">Yükleniyor</h1>}
        </div>
        
        
      
         

        <div className='container Activity'>

            <div className='row'>
                <div className='col-6'>
                <div>
                    <button onClick = {ownerActivitiesHandler} className = "button" key="k1">Düzenlenen Aktiviteler</button>
                </div>
                </div>
                <div className='col-6'>
                <Link to="">
                    <button className = "button" key="k2">Katılınan Aktiviteler</button>
                </Link> 
                </div>
            </div>
        </div>

      </>
    ); 
}

export default ProfilePage;
