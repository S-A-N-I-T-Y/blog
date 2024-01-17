import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const Create = () => {

    const handleSubmit = async (e) => {

        e.preventDefault();

        const title = e.target.elements.title.value;
        const message = e.target.elements.message.value;
        const author = e.target.elements.author.value;

        const data = {
            title: title,
            message: message,
            author: author,
        };

        const firebaseConfig = {
            apiKey: "AIzaSyAH2wUAJHoSKgu8X8isQZ-ai0DkTS9alVk",
            authDomain: "sanity-s-blog.firebaseapp.com",
            projectId: "sanity-s-blog",
            storageBucket: "sanity-s-blog.appspot.com",
            messagingSenderId: "937540832954",
            appId: "1:937540832954:web:65671444c06e80461f7c83"
        };

        //  Initializing firebase
        initializeApp(firebaseConfig)

        // setting up database and firestore
        const db = getFirestore();
        const colRef = collection(db, "blogs")

        try {
            // adding a new blog
            await addDoc(colRef, data)

        } catch (error) {
            console.error("Error adding blog", error);
        }
        e.target.reset()


    }
    return (
        <div className='max-w-[600px] mx-auto'>
            <form onSubmit={handleSubmit}>
                <input name='title' type="text" placeholder='Title' className='border w-full h-10 p-2 mb-2' />
                <textarea name='message' cols="30" rows="10" placeholder='Message' className='border w-full p-2'></textarea>
                <input name='author' type="text" placeholder='Author' className='border w-full h-10 p-2' />
                <button type="submit" className=' bg-black font-semibold text-white p-2 mt-2 mx-auto rounded transform hover:scale-105'>Add your blog</button>
            </form>
        </div>
    )
};



export default Create;
