import React from "react";
import ACTIVITIES from '../pages/OwnerActivities'


function ElementOluştur() {
    // ACTIVITIES dizisinin title özelliğinin uzunluğunu alarak eleman sayısına ulaşabiliriz.
    const numberOfElements = ACTIVITIES.title.length;
  
    // title dizisinin her bir elemanını bir <li> elementi içinde görüntülemek için bir döngü oluşturabiliriz.
    const titleElements = [];
    for (let i = 0; i < numberOfElements; i++) {
      titleElements.push(<li key={i}>{ACTIVITIES.title[i]}</li>);
    }
  
    return (
      <div>
        <ul>
          {titleElements}
        </ul>
      </div>
    );
  }
  
  export default ElementOluştur;

