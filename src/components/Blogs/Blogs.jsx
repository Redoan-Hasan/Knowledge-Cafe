import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookmark,handleReadTime}) => {
    const [Blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-[70%]">
            {
                Blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleReadTime={()=>handleReadTime(blog)}> </Blog>)
            }
        </div>
    );
};

export default Blogs;