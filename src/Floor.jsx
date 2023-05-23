import React from 'react';
import './css/Floor.css';

const Floor = ({floorText}) => {
    return(
    <div className='floor'>
        <h1 className='floor-title'>{floorText}</h1>
    </div>
    );
}

export default Floor;