import React from 'react';
import './css/CompanyCard.css';

const CompanyCard = ({company}) => {

    //displaying company details
    return(
        <div className='company-card'>
        <img src={company.logo} alt={company.name} className='company-logo'/>
        <h3 className='title'>Available Positions</h3>
        <div className='position-list'>
          {(company.positions.split(',')).map((position) => (
            <p className='item'>{position}</p>
          ))}
        </div>
        <h3 className='hall-no'>{company.location}</h3>
    </div>
    );
}

export default CompanyCard;