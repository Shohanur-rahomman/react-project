import React, { use, useState} from 'react';

const Blogs = ({ fetchData }) => {
    // const [blogs, setBlogs] = useState([]);
    const data = use(fetchData);
    console.log(data);

    return (
        <div>
            
        </div>
    );
};

export default Blogs;