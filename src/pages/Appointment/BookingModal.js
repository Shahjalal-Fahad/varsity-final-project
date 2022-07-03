import { format, set } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date,setTreatment, refetch}) => {
  const {_id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const handleModal=event=>{
    event.preventDefault();
    const slot=event.target.slot.value;
    const phone=event.target.phone.value;
    // console.log(_id,name,slot);
    const formatedDate=format(date,'PP')
    const booking={
      treatmentId:_id,
      treatment:name,
      date:formatedDate,
      slot,
      patient:user.email,
      patientName:user.displayName,
      phone,
    }
    fetch('http://localhost:5000/booking',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },body:JSON.stringify(booking)
    }).then(res=>res.json())
    .then(data=>{
      if(data.success){
        toast(`Appointment is set ${formatedDate} at ${slot}`)
      }
      else{
        toast.error(`You already have an Appointment ${data.booking?.date} at ${data.booking?.slot}`)

      }
    })
    refetch()
    setTreatment(null)
  }

  return (
    <div className='text-center'>

      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

          <h3 className="font-bold text-lg text-secondary">Booking for:{name}</h3>
          <form onSubmit={handleModal} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
            <input type="text" disabled value={format(date, 'PP')} className="input input-bordered  w-full max-w-xs" />

            <select name='slot' className="select select-bordered w-full max-w-xs">
              { 
              slots.map((slot,index)=><option 
                key={index}
                 value={slot}
                 >{slot}</option>)
              }
            </select>

            <input type="text" disabled value={user?.displayName}  className="input input-bordered  w-full max-w-xs" />
            <input type="email" disabled value={user?.email}  className="input input-bordered  w-full max-w-xs" />
            <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered  w-full max-w-xs" />
            <input type="submit" className="btn btn-secondary text-white w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;