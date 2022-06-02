import React from 'react';
import qoute from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonials = () => {
    const reviews=[
        {
            _id:1,
            name:"Winson Herry",
            review:"good",
            img:people1,
            location:"Dhaka"
        },
        {
            _id:2,
            name:"Winson Herry",
            review:"good",
            img:people2,
            location:"Dhaka"
        },{
            _id:3,
            name:"Winson Herry",
            review:"good",
            img:people3,
            location:"Dhaka"
        },
    ]
    return (
        <section className='my-10 align-middle'>
            <div className='flex justify-between'>
                <div className='text-left ml-28'>
                    <h4 className="text-xl text-primary font-bold">Reviews</h4>
                    <h2 className='text-3xl'>What our Client Say</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48 ' src={qoute} alt="" srcSet="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center'>
{
    reviews.map(review=><Review
    key={review._id}
    review={review}
    ></Review>)
}
            </div>
        </section>
    );
};

export default Testimonials;