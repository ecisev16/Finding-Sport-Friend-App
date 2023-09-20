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
import {getDocs, collection, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";

function ProfilePage(){
    const [profileList, setProfileList] = useState([]);
    const profileCollectionRef = collection(db, "Profiles");
    const getProfileList = async () => {
            
        try{
            const data = await getDocs(profileCollectionRef);
            //console.log(data.docs,'data')
            const filteredData = data.docs
            //.filter((doc) => doc.userId === auth?.currentUser?.uid) 
            // console.log(data.docs[0], "filteredData");
            .map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            const doubleFiltered = filteredData.filter((doc) => doc.userID === auth?.currentUser?.uid) 
            console.log(doubleFiltered);
            
            setProfileList(doubleFiltered);
            const aaaa = profileList[0].Sports;
            console.log(aaaa, "SPORTS ARRAY VAR MI")
        }catch (err){
            console.log(err);
        }
        
    }
    

    useEffect(()=>{
        
        getProfileList();
    },[])

    return (
      <>
      
        <div className="container Profil">
          <div className="row">
            <div className="col-2">
              <ProfilPhoto />
              <Name name = {profileList[0]?.NameSurname}/>
              <PointExtractor  point = {profileList[0]?.Point}/>
            </div>
            <div className="col-10">
              <AboutMe aboutMe = {profileList[0]?.AboutMe}/>
              <br></br>
              <br></br>
              <p className="empty">İlgilediği Sporlar</p>
              <Title sports = {profileList[0]?.Sports} className="Title"></Title>
            </div>
          </div>
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