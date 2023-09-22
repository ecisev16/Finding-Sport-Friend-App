import React from "react";
import './Title.css'
function Title(props) {
   
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