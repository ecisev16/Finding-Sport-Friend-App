import React from "react";
import ACTIVITIES from '../pages/OwnerActivities'

const PointExtractor = () =>{
    const singlePoint = ACTIVITIES[0]
    const textStyle = {
        fontStyle: "italic"
        
    };


    return(
     <div>
      <h4 style={textStyle}>{singlePoint.point}</h4>
    </div>
    );
    
}




export default PointExtractor;
