import React, { useEffect, useState } from 'react';
import Bloglist from './Bloglist';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, doc, deleteDoc } from 'firebase/firestore';

const Home = () => {
  const [blogsData, setBlogsData] = useState([])
 
  const firebaseConfig = {
    apiKey: "AIzaSyAH2wUAJHoSKgu8X8isQZ-ai0DkTS9alVk",
    authDomain: "sanity-s-blog.firebaseapp.com",
    projectId: "sanity-s-blog",
    storageBucket: "sanity-s-blog.appspot.com",
    messagingSenderId: "937540832954",
    appId: "1:937540832954:web:65671444c06e80461f7c83"
  };

  initializeApp(firebaseConfig)
  const db = getFirestore()

  const deleteBlog = async (blog) => {

    if (!blog || !blog.id) {
      console.error('Invalid blog');
      return;
    }

    const docRef = doc(db, "blogs", blog.id)
    try {
      await deleteDoc(docRef)

      setBlogsData(prevBlogs => prevBlogs.filter(prevBlog => prevBlog.id !== blog.id));
    } catch (error) {
      console.error("Error deleting blog", error)
    }
  }


  const handleDelete = (blog) => {
    // Call the deleteBlog function with the entire blog object
    deleteBlog(blog);
    // Optionally, update the state or perform other actions
  }
  useEffect(() => {
    const colRef = collection(db, "blogs")
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(colRef)
        let blogsData = []
        snapshot.docs.forEach(doc => {
          blogsData.push({ ...doc.data(), id: doc.id })
        })
        setBlogsData(blogsData)
      } catch (error) {
        console.error("Error fetching data", error)
      }

    };
    fetchData()

  }, [db])
  return (
    <div>
      <Bloglist deleteBlog={deleteBlog} blogs={blogsData}></Bloglist>
    </div>
  );
}

export default Home;
