import { Link } from 'react-router-dom';
import ActivityList from '../components/ActivityList'
import '../components/Button.css'
import Activity from '../components/Activity';
import ProfilPhoto from '../components/ActivityProfilPhoto';
import './Profile.css'
import PointExtractor from '../components/point'
import AboutMe from '../components/AboutMe'
import Title from '../components/Title';
import Name from '../components/Name';
import { useState, useEffect } from "react";

import {db, auth, storage} from "../firebase/firebase";
import {
    addDoc,
    doc,
    onSnapshot,
    updateDoc,
    setDoc,
    deleteDoc,
    collection,
    serverTimestamp,
    getDocs,
    query,
    where,
} from "firebase/firestore";

function ProfilePage(){
    const [profileList, setProfileList] = useState([]);
    const profileCollectionRef = collection(db, "Profiles");
    const [loading, setLoading] = useState(false);
    //let loading
    
    useEffect(() => {
        
        //loading = true
        setLoading(true);
        
        const unsub = onSnapshot(profileCollectionRef, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            const doubleFiltered = items.filter((doc) => doc.userID === auth?.currentUser?.uid)
            setProfileList(doubleFiltered);
            //loading = false
            setLoading(false);
        });

        
        return () => {
          unsub();
        };
    
        
      }, []);

    //   const aaaa = profileList.length !== 0 && profileList[0]?.Sports;
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
                    </div>
                    <div className="col-10">
                        <AboutMe aboutMe = {profileList[0]?.AboutMe}/>
                        <br></br>
                        <br></br>
                        <p className="empty">İlgilediği Sporlar</p>
                        <Title sports = {profileList.length !== 0 && profileList[0].Sports} className="Title"></Title>
                    </div>
                </div>

            }
            {loading && <h1 className="container Profil">Yükleniyor</h1>}
        </div>
        
        
      
         

        <div className='container Activity'>

            <div className='row'>
                <div className='col-6'>
                <Link to="/root/profil/duzenlenen-aktiviteler">
                    <button className = "button" key="k1">Düzenlenen Aktiviteler</button>
                </Link>
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
