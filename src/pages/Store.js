import { useState, useEffect } from "react";

import {db, auth, storage} from "../firebase/firebase";
import {getDocs, collection, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";
import {ref, uploadBytes} from "firebase/storage";

export const StorePage = () =>{
    const [activityList, setActivityList] = useState([]);
    const [newActivityTile, setNewActivityTitle] = useState("");
    const [newActivityDate, setNewActivityDate] = useState(0);

    const [updatedTitle, setUpdatedTitle] = useState("");

    const [fileUpload, setFileUpload] = useState(null);
    
    const activityCollectionRef = collection(db, "activities");
    const getActivityList = async () => {
            
        try{
            const data = await getDocs(activityCollectionRef);
            //console.log(data.docs,'data')
            const filteredData = data.docs
            //.filter((doc) => doc.userId === auth?.currentUser?.uid) 
            // console.log(data.docs[0], "filteredData");
            .map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            const doubleFiltered = filteredData.filter((doc) => doc.userId === auth?.currentUser?.uid) 
            console.log(doubleFiltered);
            setActivityList(doubleFiltered);
        }catch (err){
            console.log(err);
        }
        
    }

    const deleteActivity = async (id) => {
        const activityDoc = doc(db, "activities", id);
        await deleteDoc(activityDoc);
        getActivityList();
    }

    const UpdateActivity = async (id) => {
        const activityDoc = doc(db, "activities", id);
        await updateDoc(activityDoc, {title: updatedTitle});
        getActivityList();
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

    useEffect(()=>{
        
        getActivityList();
    },[])

    const onSubmitActivity = async () => {
        try{
            await addDoc(activityCollectionRef, {title: newActivityTile, userId: auth?.currentUser?.uid})
            getActivityList();
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
                {activityList.map((act)=>(
                    <div key={act.id}>
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