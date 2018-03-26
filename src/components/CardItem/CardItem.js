import React from 'react';
import './CardItem.css';

const CardItem = props => (
    <div className="cardItem">
      <img onClick = {() => props.sortImages(props.id, props.clicked)} 
        id = {props.id} 
        src = {props.src} 
        className = "img" 
        alt = "vinil cover" 
        data-clicked = {props.clicked}
      
        />
  </div>
);
export default CardItem; 