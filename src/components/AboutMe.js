import React from "react";
import ACTIVITIES from '../pages/OwnerActivities'
import './AboutMe.css'

const AboutMe = () =>{
    const AboutMe = ACTIVITIES[0]

    
    return(
       
    <div className="about-me">
        
         <h4>{AboutMe.AboutMe}</h4>

    </div>

    );

}

export default AboutMe;