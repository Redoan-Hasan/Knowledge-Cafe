import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookmark,setBookmark] = useState([]);
  const [currentTime,setCurrentTime] = useState(0) 

  const handleBookmark = (blog) =>{
    console.log(blog)
    const newBookMark = [...bookmark, blog]
    setBookmark(newBookMark)
  }
  const handleReadTime = ({reading_time,id}) =>{
      const newCurrentTime = currentTime + reading_time;
      setCurrentTime(newCurrentTime)
      console.log(newCurrentTime)
      const remaining = bookmark.filter(bookmark => bookmark.id !== id);
      setBookmark(remaining)
  }

  return (
    <>
    <div className='max-w-screen-xl mx-auto'>
      <Navbar></Navbar>
      <div className='flex gap-6'>
      <Blogs  handleBookmark = {handleBookmark} handleReadTime={handleReadTime}></Blogs>
      <Bookmarks currentTime={currentTime} bookmark={bookmark}></Bookmarks>
      </div>
    </div>
    </>
  )
}

export default App
