import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import Availableappointments from './Availableappointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <Availableappointments date={date}></Availableappointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;