

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import { Suspense } from 'react';



const fetchData = fetch('../public/data.json').then(res => res.json()) 

function App() {
 

  return (
    <>
      <Header></Header>
      <Suspense fallback={<h3>data loading.....</h3>}>
        <Blogs fetchData={fetchData}></Blogs>
      </Suspense>
      
    </>
  )
}

export default App
