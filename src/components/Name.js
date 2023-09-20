import React from "react";
import {dummyData} from '../pages/ProfilDummy'
import './Name.css'
const Name = (props) =>{

    const Name = dummyData[0]

    
    return(
        <div>
            <span className="Name" >
                {props.name}
            </span>
        </div>
    )
}

export default Name;