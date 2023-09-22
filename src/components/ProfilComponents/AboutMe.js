import React from "react";
import {dummyData} from '../../pages/ProfilDummy'
import './AboutMe.css'

const AboutMe = (props) =>{
    
    return(
    <div className="about-me">  
         <h4>{props.aboutMe}</h4>
    </div>
    );
}

export default AboutMe;