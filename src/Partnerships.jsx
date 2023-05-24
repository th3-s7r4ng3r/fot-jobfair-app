import React from 'react';
import './css/Partnerships.css';

const partners = [
    "./images/partners/codegen.png",
    "./images/partners/acentura.png",
    "./images/partners/mas.png",
    "./images/partners/csds.png"]

const Partnerships = () => {
    return(
    <div className='partnerships'>
        <h3 className='partner-title'>Faculty Partners</h3>
        {partners.map((partner) => (
            <img src={partner} alt='parternship logos' className='partner-logo'/>
        ))}
    </div>
    );
}

export default Partnerships;