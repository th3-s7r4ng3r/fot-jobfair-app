import React from 'react';
import './css/Partnerships.css';

const Partnerships = ({imageLink}) => {
    return(
    <div className='partnerships'>
        <img src={imageLink} alt='header-parternship' className='partner-logo'/>
    </div>
    );
}

export default Partnerships;