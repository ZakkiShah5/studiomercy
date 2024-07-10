import React from 'react'
import './BlogDetail.css'
import { useBlogsContext } from '../../hooks/useBlogsContext'
import { FaTrash } from "react-icons/fa";
import  {formatDistanceToNow}   from 'date-fns';

const BlogDetail = ({ blog }) => {
  const { dispatch } = useBlogsContext();

  const handleClick = async () => {
    const response = await fetch('api/blogs/' + blog._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_BLOG', payload: json })
    }
  }
  return (
    <div className="blog-details">
      <div className="delflex">
        <h2>{blog.title}</h2>
        <button className='delete' onClick={handleClick}> <FaTrash />        </button>
      </div>
      <p>{blog.desc}</p>
      <small>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</small>

    </div>
  )
}

export default BlogDetail