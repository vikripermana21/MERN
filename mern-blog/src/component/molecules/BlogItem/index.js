import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogitem.scss'

const BlogItem = (props) => {
    const {title,image,author,body,date} = props
    return (
        <div className='blog-item'>
            <img className='image-thumb' src={image} alt='post' />
            <div className='content-detail'>
            <p className='title'>{title}</p>
            <p className='author'>{author} - {date}</p>
            <p className='body'>{body}</p>
            </div>
        </div>
    )
}

export default BlogItem
