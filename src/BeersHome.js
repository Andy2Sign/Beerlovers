import React from 'react';
import "./App.css"


const BeersHome = ({ tipo, img }) => {
  return (
    <div className='card-beers'>

      <ul>
        <li>
          <p className='beer-cards_title'>{tipo}</p>
        </li>
        <img className='img-card' alt="" src={img} />
      </ul>


    </div>
  );
}

export default BeersHome;
