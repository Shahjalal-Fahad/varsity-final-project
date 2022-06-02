import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section
        style={{background:`url(${appointment})`}}
        className='flex justify-center items-center '>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-200px]' src={doctor} alt="" srcSet="" />
            </div>
            <div  className='flex-1 px-3'>
                <h3 className="text-xl text-primary font-bold mt-2">Appointment</h3>
                <h2 className="text-3xl text-white py-3">Make an Appointment Today</h2>
                <p className='text-white text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis error facere commodi maiores illum, voluptas, obcaecati quo hic aliquid minima voluptate enim temporibus eius quisquam corrupti dolore modi minus ex deserunt exercitationem quas perferendis officia mollitia? Suscipit, vero velit ratione, quaerat, id optio laudantium obcaecati excepturi repellendus sunt autem! Odio minus, dolorum hic perspiciatis quae nihil praesentium nemo asperiores possimus voluptate aperiam molestias odit velit nesciunt assumenda. Nulla repellendus rem provident quod alias laborum expedita magni fuga vero voluptate. Quos sint corporis perspiciatis est at vitae iure quo doloremque architecto eos officia rem deleniti, ratione ullam, unde quam deserunt ex officiis voluptatibus maxime voluptas? Libero voluptatem praesentium quas excepturi, officiis accusamus totam eligendi quo iure soluta enim architecto non rem veniam pariatur atque, recusandae reiciendis quibusdam facere. Excepturi laudantium, minima odio dicta sapiente assumenda vitae accusamus dolor, sunt autem, error quod ab reiciendis maxime illo iste officia ducimus unde aut.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;