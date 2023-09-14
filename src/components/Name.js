import React from "react";
import {dummyData} from '../pages/ProfilDummy'
import './Name.css'
const Name = () =>{

    const Name = dummyData[0]

    
    return(
        <div>
            <span className="Name" >
                {Name.nameSurname}
            </span>
        </div>
    )
}

export default Name;