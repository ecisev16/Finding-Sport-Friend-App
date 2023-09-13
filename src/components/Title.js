import React from "react";
import ACTIVITIES from '../pages/OwnerActivities';

function Title() {
  const titles = ACTIVITIES[0].titleElement; // ACTIVITIES[0] içindeki başlıkları al

  const listItemElements = titles.map((title, index) => (
    <li key={index}>{title}</li>
  ));

  return (
    <div>
      <ul>
        {listItemElements}
      </ul>
    </div>
  );
}

export default Title;