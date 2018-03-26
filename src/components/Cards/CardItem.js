import React from 'react';
import './CardItem.css';

const CardItem = props => (
    <div className="cardItem">
    {props.image.map(item => (
      <img className="img" alt="vinyl cover" src={item.image} key={item.id}>
      </img>
    ))}
  </div>
);
export default CardItem; 