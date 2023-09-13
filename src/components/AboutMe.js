import React from "react";
import ACTIVITIES from '../pages/OwnerActivities'


const AboutMe = () =>{
    const AboutMe = ACTIVITIES[0]


    return(
       
    <div>
        
         <h4>{AboutMe.AboutMe}</h4>

    </div>

    );

}

export default AboutMe;