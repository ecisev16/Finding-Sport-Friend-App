import React from "react";
import {dummyData} from '../../pages/ProfilDummy'
import './point.css'
const PointExtractor = (props) =>{
  
    return(
     <div>
      <h4 className="Point"> Puan: {props.point}</h4>
    </div>
    );
    
}




export default PointExtractor;
