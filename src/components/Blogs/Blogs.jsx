import React, { use, useState} from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ fetchData, handleBookMark, handleTime }) => {
    // const [blogs, setBlogs] = useState([]);
    const data = use(fetchData);
    console.log(data);

    return (
        <div className='md:w-2/3'>
            <h2>Blogs {data.length}</h2>
            {
                data.map((oneData) => <Blog
                    key={oneData.id}
                    handleTime={handleTime}
                    handleBookMark={handleBookMark}
                    oneData={oneData}></Blog>)
            }
        </div>
    );
};

export default Blogs;