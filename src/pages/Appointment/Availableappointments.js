import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const Availableappointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null)
    const formatedDate = format(date, 'PP');
    const {data:services,isLoading,refetch}=useQuery(['available',formatedDate],()=>
        fetch(`http://localhost:5000/available?date=${formatedDate}`)
                .then(res => res.json())
    )
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div >
            <h4 className="text-xl text-secondary text-center pb-10">
                Available Appointment on {format(date, 'PP')}
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                setTreatment={setTreatment}
                date={date}
                treatment={treatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default Availableappointments;