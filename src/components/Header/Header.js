import React from 'react';
import './Header.css'

export default function (){
    return <div>
            <div className="row App-header">
                <h2 className="col-sm text-center header-text">The Clicky Game</h2>
                <h5 className="col-sm text-center header-text">Click on an image to earn points, but don't click on any more than once!</h5>
                <h3 className="col-sm text-center header-text">Score: {} | Top Score: {} </h3>
            </div>
    </div>
}