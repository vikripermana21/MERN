import React from 'react'
import { RegisterBg } from '../../assets'
import './detailBlog.scss'

const DetailBlog = (props) => {
    const {title,image,body,author,date} = props
    return (
        <div className='detail-blog-wrapper'>
            <img className='img-cover' src={image} />
            <p className='title'>{title}</p>
            <p className='author'>{author} - {date}</p>
            <p className='body'>{body}</p>
        </div>
    )
}

export default DetailBlog
