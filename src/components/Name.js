import React from "react";
import ACTIVITIES from '../pages/OwnerActivities'

const Name = () =>{

    const Name = ACTIVITIES[0]

    const fontSize = "20px";
    return(
        <div>
            <span style={{fontSize:fontSize}} >
                {Name.nameSurname}
            </span>
        </div>
    )
}

export default Name;