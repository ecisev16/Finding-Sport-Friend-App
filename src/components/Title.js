import React from "react";
//import {dummyData} from '../pages/ProfilDummy';
import './Title.css'
function Title(props) {
  //const titles = dummyData[0].titleElement;
   
  console.log(props.sports, "bize geçti mi?")
  const titles = props.sports
  const listItemElements = titles.map((title) => (
    <li >{title}</li>
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