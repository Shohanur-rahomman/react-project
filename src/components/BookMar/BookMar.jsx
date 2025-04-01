import React from 'react';

const BookMar = ({ blog }) => {
    const {title} = blog;
    return (
        <div className='bg-amber-200 p-4 rounded-lg mb-3 '>
            <div>
                {title}
            </div>
        </div>
    );
};

export default BookMar;