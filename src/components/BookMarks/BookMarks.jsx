import React from 'react';
import BookMar from '../BookMar/BookMar';

const BookMarks = ({ blogs }) => {
    return (
        <div className='md:w-1/3'>
            <h2>book marks{blogs.length}</h2>
            {
                blogs.map((blog)=> <BookMar key={blog.id} blog={blog}></BookMar>)
            }
        </div>
    );
};

export default BookMarks;