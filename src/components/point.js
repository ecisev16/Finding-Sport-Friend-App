import React from "react";
import {dummyData} from '../pages/ProfilDummy'
import './point.css'
const PointExtractor = (props) =>{
    const singlePoint = dummyData[0]
  
    

    return(
     <div>
      <h4 className="Point"> {props.point}</h4>
    </div>
    );
    
}




export default PointExtractor;
