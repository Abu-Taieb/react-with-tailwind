import React from 'react';
import {CheckCircleIcon} from "@heroicons/react/24/solid";

const Features = ({feature}) => {
    return (
        <div className='flex'>
            <CheckCircleIcon className="h-6 w-6 mr-2" />
            <span>{feature}</span>
        </div>
    );
};

export default Features;