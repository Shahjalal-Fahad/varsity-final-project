import React from 'react';
const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card max-lg bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="text-2xl text-bold text-secondary">{name}</h2>
        <p>{slots.length
          ? <span>{slots[0]}</span>
          : <span className='text-red-500'>No space avaiable</span>
        }</p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
        <div className="card-actions justify-center">

          <label disabled={slots.length === 0}
            onClick={() => setTreatment(service)} htmlFor="booking-modal" className="btn btn-secondary text-white upercase">open modal</label>

        </div>
      </div>
    </div>
  );
};

export default Service;