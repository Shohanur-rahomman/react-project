import React from 'react';
import BookMar from '../BookMar/BookMar';

const BookMarks = ({ blogs, readTime }) => {
    return (
        <div className='md:w-1/3'>
            <div>
                <h2>Total read time : {readTime }</h2>
            </div>
            <h2>book marks{blogs.length}</h2>
            {
                blogs.map((blog,index)=> <BookMar key={index} blog={blog}></BookMar>)
            }
        </div>
    );
};

export default BookMarks;