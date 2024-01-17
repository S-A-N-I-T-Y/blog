import React from "react";

const Bloglist = ({ blogs, deleteBlog }) => {
    const handleDelete = (blog) => {
        // Call the deleteBlog function with the blog ID
        deleteBlog(blog);
        // Optionally, update the state or perform other actions
    }

    return (
        <div>
            {
                blogs.map(blog => (
                    <div key={blog.id} className='border p-4 mb-2 shadow-md cursor-pointer bg-black text-white'>
                        <h1 className='text-3xl font-extrabold text-green-500 '>{blog.title}</h1>
                        <p>{blog.message}</p>
                        <p>author: {blog.author}</p>
                        <button className=" bg-white text-black p-1 rounded mt-2 font-bold transform hover:scale-105" onClick={() => handleDelete(blog)}>delete blog</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Bloglist;