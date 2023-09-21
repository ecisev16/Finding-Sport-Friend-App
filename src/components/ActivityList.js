import Activity from "./Activity";
import './ActivityList.css';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {db, auth, storage} from "../firebase/firebase";
import {
    addDoc,
    doc,
    onSnapshot,
    updateDoc,
    deleteDoc,
    collection,
   
} from "firebase/firestore";
import {ref, uploadBytes} from "firebase/storage";


const ActivityList = () =>{
    const [activityList, setActivityList] = useState([]);
    const [newActivityTile, setNewActivityTitle] = useState("");
    const [newActivityDate, setNewActivityDate] = useState(0);
    const [loading, setLoading] = useState(false);
    var { profilID } = useParams();

    

    const [fileUpload, setFileUpload] = useState(null);
    
    const activityCollectionRef = collection(db, "activities");


    useEffect(() => {
    
        setLoading(true);
        //const unsub = onSnapshot(q, (querySnapshot) => {
        const unsub = onSnapshot(activityCollectionRef, (querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push({...doc.data(), id: doc.id});
          });
          const doubleFiltered = items.filter((doc) => doc.userId === profilID) 
          setActivityList(doubleFiltered);
          setLoading(false);
        });
        return () => {
          unsub();
        };
    
        // eslint-disable-next-line
      }, []);

    

    

    const uploadFile = async () => {
        if(!fileUpload) return;
        const filesFolderRef = ref(storage,`projectFiles/${fileUpload.name}`);
        try{
            await uploadBytes(filesFolderRef, fileUpload);
        }catch(err){
            console.error(err);
        }
        
    }

    

    const onSubmitActivity = async () => {
        const newActivity = {
            title: newActivityTile,
            userId: auth?.currentUser?.uid
        }
        try{
            await addDoc(activityCollectionRef, newActivity)
            //getActivityList();
        }catch(err){
            console.log(err)
        }
        
    }
    if (activityList.length === 0){
        return <h2 className = 'activity-list__fallback'>Aktivite bulunamadı</h2>
    };

    return (
    

        <>
        
            {!loading && activityList.length > 0 &&
            <><div>
                <input
                    placeholder="Activity title"
                    type="text"
                    onChange={(e) => setNewActivityTitle(e.target.value)}
                ></input>
                <input
                    placeholder="Activity date"
                    type="date"
                    onChange={(e) => setNewActivityDate(Number(e.target.value))} //e.target.checked - bu checkbox için kullanılır.
                ></input>
                <button onClick={onSubmitActivity}>Submit Activity</button>

            </div>
            <div>
                {activityList.map((act, index) => (
                    <div key={index}>
                        <Activity
                            activ = {act}
                        />
                    </div>
                ))}
            </div></>}
            {loading && <h1>Yükleniyor</h1>}

                
            <div>
                <input type="file" onChange={(e) => setFileUpload(e.target.files[0])}></input>
                <button onClick = {uploadFile}>Upload File</button>
            </div>
            
                
        </>

    );
}

export default ActivityList;

//<ul className = "activity-list">
   //
    //    {props.activities.map((actvy) => (
    //        <Activity
    //            key = {actvy.id}
    //            title = {actvy.title}
    //            
    //            date = {actvy.date}
    //        />
    //    ))}
    //</ul>

    {/*<h1>
        {act.title}

    </h1>
    <button onClick={() => deleteActivity(act.id)}>Delete Activity</button> 
    <input
        placeholder="new Title"
        onChange={(e) => setUpdatedTitle(e.target.value)}
    ></input>
    <button onClick={() => UpdateActivity(act.id)}>update</button> */}