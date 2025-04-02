

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import { Suspense, useState } from 'react';
import BookMarks from './components/BookMarks/BookMarks';



const fetchData = fetch('../public/data.json').then(res => res.json()) 


function App() {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookMark = blog => {
    const newBookMark = [...blogs, blog];
    setBlogs(newBookMark)
  }

  const handleTime = (time,id) => {
    const newReadTime = readTime + time;
    setReadTime(newReadTime)

    const removeBook = blogs.filter(blog => blog.id !== id);
    setBlogs(removeBook)
  }
  


  return (
    <div className='w-11/12 mx-auto '>
      <Header></Header>
      <div className='md:flex gap-10'>
        <Suspense fallback={<h3>data loading.....</h3>}>
          <Blogs fetchData={fetchData} handleBookMark={handleBookMark} handleTime={handleTime}></Blogs>
        </Suspense>
        <BookMarks blogs={blogs} readTime={readTime}></BookMarks>
      </div>
      
    </div>
  )
}

export default App
