import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mx-6 bg-pink-500 hover:bg-pink-800 hover:text-white pl-4 md:pl-2 pr-10 md:pr-2'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;