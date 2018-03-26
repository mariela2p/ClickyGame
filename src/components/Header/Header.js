import React from 'react';
import './Header.css'

const Header = props => (
        <div>
            <div className="row App-header">
                <h2 className="col-sm text-center header-text">Clicky Game</h2>
                <h5 className="col-sm text-center header-text">Click on an image to earn points, but don't click on any more than once!</h5>
                <h3 className="col-sm text-center header-text">Score: {props.score} | Top Score: {props.topScore} </h3>
            </div>
        </div>
);

export default Header;