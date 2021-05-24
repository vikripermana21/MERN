import React , {useEffect, useState} from 'react'
import { BlogItem, Button, Gap } from '../../component'
import './home.scss'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'
const Home = () => {
    const [dataBlog , setDataBlog] = useState([])
    let [page , setPage] = useState()
    useEffect(() => {
        Axios.get('http://localhost:4000/v1/blog/posts')
        .then(res=>{
            const responseAPI = res.data
            setPage(responseAPI.current_page)
            console.log(page)
            setDataBlog(responseAPI.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    const handleNext = (params) => {
        params = 'page=2'
        Axios.get(`http://localhost:4000/v1/blog/posts?${params}`)
        .then(res=>{
            console.log(res)
        })
    }
    const history = useHistory();
    return (
        <div className="home-page-wrapper">
            <div className='create-wrapper'>
            <Button title="create blog" onClick={() => history.push('/create-blog')} />
            </div>
            <Gap height={20} />
            <div className='content-wrapper'>
                {dataBlog.map(blog=>{
                return <BlogItem key={blog._id} image={`http://localhost:4000/${blog.image}`} title={blog.title} />
                })}
            </div>
            <div className='pagination'>
                <Button title='Previous' />
                <Gap width={20} />
                <Button title='Next' onClick={handleNext} />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home
