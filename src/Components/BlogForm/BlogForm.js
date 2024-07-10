import React, { useState } from 'react'
import './BlogForm.css'
import { useBlogsContext } from '../../hooks/useBlogsContext';

const BlogForm = () => {
    const { dispatch } = useBlogsContext();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [err, setErr] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const blog = { title, desc }
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if (!response) {
            setErr(json.err)
        }
        if (response.ok) {
            setTitle('')
            setDesc('')
            setErr(null)
            console.log('Blog Created', json)
            dispatch({type: 'CREATE_BLOG', payload: json})
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Create a New Blog</h3>

            <label>Blog Title:</label>
            <input type="text"
                className='title-blog'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
            />
            <label>Blog Description:</label>
            <br />
            <textarea type="text"
                className='desc-blog'
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                required
            />
            <div className="border-btn">
                <button>Create Blog</button>
            </div>
            {err && <div className='error'>{err}</div>}
        </form>
    )
}

export default BlogForm