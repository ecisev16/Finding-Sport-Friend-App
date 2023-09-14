import React from "react";
import {dummyData} from '../pages/ProfilDummy';
import './Title.css'
function Title() {
  const titles = dummyData[0].titleElement; 

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