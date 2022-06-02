import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Flouride Treatment",
            description: "This is flouride",
            img: fluoride
        },
        {
            _id: 2,
            name: "Flouride Treatment",
            description: "This is flouride",
            img: cavity
        },
        {
            _id: 3,
            name: "Flouride Treatment",
            description: "This is flouride",
            img: whitening
        },
    ]
    return (
        <div className='my-28 '>
            <div className='text-center'>
                <h3 className='text-primary font-bold	text-xl upercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We provide</h2>
            </div>
            <div className=' '>
                <div className='grid grid-cols-1 lg:grid-cols-3  gap-5  justify-items-center mt-12 '>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;