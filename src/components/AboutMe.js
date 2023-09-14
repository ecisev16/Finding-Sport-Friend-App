import React from "react";
import {dummyData} from '../pages/ProfilDummy'
import './AboutMe.css'

const AboutMe = () =>{
    const AboutMe = dummyData[0]

    
    return(
       
    <div className="about-me">
        
         <h4>{AboutMe.AboutMe}</h4>

    </div>

    );

}

export default AboutMe;