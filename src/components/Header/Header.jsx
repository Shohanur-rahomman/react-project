import React from 'react';

const Header = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center mt-2.5'>
            <h2 className='text-4xl font-bold'>NEW PROJECT</h2>
            <div className="w-20">
                <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
    );
};

export default Header;