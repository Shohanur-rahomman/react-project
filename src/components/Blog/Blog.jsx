import React from 'react';
import { IoBookmarkSharp } from "react-icons/io5";

const Blog = ({ oneData, handleBookMark, handleTime }) => {
    const { author, author_img, reading_time, publish_date, hashtags } = oneData;
    return (
        <div className=''>
            <img className='w-full rounded-lg object-cover overflow-hidden' src={author_img} alt="" />
            <div className='mt-3 mb-3 flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <img className='w-20' src={'../../../public/images/boy1.png'} alt="" />
                    <div >
                        <h2>{author}</h2>
                        <p>{publish_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-1.5'>
                    <p>{reading_time}</p>
                    <button onClick={() => handleBookMark(oneData)} className='btn cursor-pointer'><IoBookmarkSharp /></button>
                </div>
            </div>
            <div>
                {
                    hashtags.map((hes, index) => <span key={index}><a href="#">{hes}</a></span>)
                }
            </div>
            <button onClick={() => handleTime(reading_time)} className='btn cursor-pointer'>Add Time</button>
        </div>
    );
};

export default Blog;