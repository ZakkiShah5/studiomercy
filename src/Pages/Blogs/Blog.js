import React from "react"
import './Blog.css'
import { useBlogsContext } from "../../hooks/useBlogsContext"
import BlogForm from "../../Components/BlogForm/BlogForm"
import BlogDetail from "../../Components/BlogDetails/BlogDetail"
import Header from "../../Components/Header/Header"

import {  useEffect } from "react"

const Blogs = () => {
    const {blogs, dispatch} =  useBlogsContext()
    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('/api/blogs')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_BLOGS', payload: json})
            }
        }
        fetchBlogs()
    });

    return (
        <div className="blogs">
            <Header />
            <div className="titled"><h1>B l o g s</h1></div>
            <div className="container">
                <div className="blog">
                    {blogs && blogs.map((blog)=>(
                    <BlogDetail key={blog._id} blog={blog} />
                    ))}
                </div>
                <div className="blogForm">
                    <BlogForm />
                </div>
            </div>
        </div>
    )
}

export default Blogs