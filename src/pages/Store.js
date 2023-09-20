import { useState, useEffect } from "react";

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

export const StorePage = () =>{
    const [activityList, setActivityList] = useState([]);
    const [newActivityTile, setNewActivityTitle] = useState("");
    const [newActivityDate, setNewActivityDate] = useState(0);
    const [loading, setLoading] = useState(false);

    const [updatedTitle, setUpdatedTitle] = useState("");

    const [fileUpload, setFileUpload] = useState(null);
    
    const activityCollectionRef = collection(db, "activities");

    useEffect(() => {
    
        setLoading(true);
        //const unsub = onSnapshot(q, (querySnapshot) => {
        const unsub = onSnapshot(activityCollectionRef, (querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push(doc.data());
          });
          const doubleFiltered = items.filter((doc) => doc.userId === auth?.currentUser?.uid) 
          setActivityList(doubleFiltered);
          setLoading(false);
        });
        return () => {
          unsub();
        };
    
        // eslint-disable-next-line
      }, []);

    const deleteActivity = async (id) => {
        const activityDoc = doc(db, "activities", id);
        await deleteDoc(activityDoc);
        //getActivityList();
    }

    const UpdateActivity = async (id) => {
        const updatedActivity = {
            title: updatedTitle
        }
        const activityDoc = doc(db, "activities", id);
        await updateDoc(activityDoc, updatedActivity);
        //getActivityList();
    }

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


    return(
        <>
        
            <div>
                <input 
                    placeholder="Activity title" 
                    type="text"
                    onChange = {(e) => setNewActivityTitle(e.target.value) }
                ></input>
                <input 
                placeholder="Activity date" 
                type="date"
                onChange = {(e) => setNewActivityDate(Number(e.target.value))} //e.target.checked - bu checkbox için kullanılır.
                ></input>
                <button onClick = {onSubmitActivity}>Submit Activity</button>
                
            </div>
            <div>
                {activityList.map((act, index)=>(
                    <div key={index}>
                        <h1>
                            {act.title}
                            
                        </h1>
                        <button onClick={() => deleteActivity(act.id)}>Delete Activity</button> {/*{() => deleteActivity(act.id)} garip notasyon ama bu şekilde olmalı.*/}
                        <input 
                        placeholder="new Title" 
                        onChange = {(e) => setUpdatedTitle(e.target.value)}
                        ></input>
                        <button onClick={() =>UpdateActivity(act.id)}>update</button>
                    </div>
                ))}
            </div>
            <div>
                <input type="file" onChange={(e) => setFileUpload(e.target.files[0])}></input>
                <button onClick = {uploadFile}>Upload File</button>
            </div>
        </>
            
        
    ) 
}

export default StorePage;