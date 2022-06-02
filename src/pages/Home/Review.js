import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
  <div className="card-body">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus alias dolores molestias aliquid quae earum.</p>
    <div className='flex items-center gap-5'>
    <div className="avatar">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5 mt-5">
    <img src={review.img} alt='' />
  </div>
</div>
        <div className='text-left'>
<h4 className="text-xl">{review.name}</h4>
<p>{review.location}</p>
        </div>
    </div>
  </div>
</div>
    );
};

export default Review;