import React from 'react';

const InfoCard = ({img,cardTitle,cardInfo,bgClass}) => {
    return (
        <div className={`card lg:card-side py-5  shadow-xl px-5 text-white ${bgClass}`}>
  <figure><img className='' src={img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{cardTitle}</h2>
    <p className='card-title font-normal'>{cardInfo}</p>
  </div>
</div>
    );
};

export default InfoCard;