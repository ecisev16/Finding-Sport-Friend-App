import './Activity.css';
import { useState} from "react";
import ProfilPhoto from './ActivityProfilPhoto';
import {db} from "../../firebase/firebase";
import {
    doc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import { useAuth } from '../../pages/LogIn/Authentication';

function Activity(props){

  const [updatedTitle, setUpdatedTitle] = useState("");
  const ctx = useAuth();
  const UpdateActivity = async (id) => {
    console.log(id, "ID")
    try{
      const updatedActivity = {
        title: updatedTitle
      }
      const activityDoc = doc(db, "activities", id);
      await updateDoc(activityDoc, updatedActivity);
    }catch(err){
      console.error(err);
    }
    
    
  }  

  const deleteActivity = async (id) => {
    const activityDoc = doc(db, "activities", id);
    await deleteDoc(activityDoc);
    
  }
    
    return (
      <>
        <div className="container">
          <div className="row">
            
              <div className="col-4">
                <ProfilPhoto />
              </div>

              <div className="col-5">
                <div className="activity-item__description">
                  {props.activ.title}</div>
              </div>

              <div className="col-3">
                <div className='activity-box-time-and-invite'>      
                <div className="activty-box-invite">
                  <button className="activity-item__button">
                    Katılma isteği
                  </button>
                </div>
                </div>
              </div>
          
          </div>
          {ctx.user.user.uid === props.profilID &&
             <><button onClick={() => deleteActivity(props.activ.id)}>Delete Activity</button><input
              placeholder="new Title"
              onChange={(e) => setUpdatedTitle(e.target.value)}
            ></input><button onClick={() => UpdateActivity(props.activ.id)}>update</button></>
          } 
         
        </div>
      </>
    );
            
        
        
}

export default Activity;