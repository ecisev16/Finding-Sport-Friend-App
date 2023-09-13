import React from "react";
import ACTIVITIES from '../pages/OwnerActivities';
import './Title.css'
function Title() {
  const titles = ACTIVITIES[0].titleElement; // ACTIVITIES[0] içindeki başlıkları al

  const listItemElements = titles.map((title, index) => (
    <li key={index}>{title}</li>
  ));

  return (
    <div className="List">
      <ul className="Title">
        {listItemElements}
      </ul>
    </div>
  );
}

export default Title;