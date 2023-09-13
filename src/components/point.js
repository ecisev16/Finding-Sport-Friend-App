import React from "react";
import ACTIVITIES from '../pages/OwnerActivities'

const PointExtractor = () =>{
    const singlePoint = ACTIVITIES[0]
    const textStyle = {
        fontStyle: "italic"
        
    };
    const fontSize = "30px";
        
    

    return(
     <div>
      <h4 style={{ fontSize: fontSize , textStyle: textStyle }}>{singlePoint.point}</h4>
    </div>
    );
    
}




export default PointExtractor;
