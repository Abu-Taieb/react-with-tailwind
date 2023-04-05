import React from 'react';
import Features from '../Features/Features';

const PriceCard = ({price}) => {
    // const [] = price;
    return (
        <div className='bg-pink-500 p-5 rounded-xl'>
            <h5 className='text-center'>
                <span className='text-2xl font-bold'>${price.price}</span>
                <span>/month</span>
            </h5>
            <h5 className='text-2xl text-center'>{price.name}</h5>
            <p className='text-xl font-semibold'>Features:</p>
            {
                price.features.map((feature, id) => 
                <Features
                key={id}
                feature={feature}
                ></Features>)
            }
            <button className='bg-white rounded-md w-full mt-auto px-2 py-1'>Buy Now</button>
        </div>
    );
};

export default PriceCard;