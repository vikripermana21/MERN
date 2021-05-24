import React, { useState } from 'react'
import { Button, Gap, Input, Link, TextArea, Upload } from '../../component'
import './createBlog.scss'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const CreateBlog = () => {
    
    const [postTitle , setPostTitle] = useState("")
    const [picture , setPicture] = useState("")
    const [postBody , setPostBody] = useState("")
    const [imagePreview , setImagePreview] = useState("")

    const onChangeTitle = (e) => {
        setPostTitle(e.target.value)
        console.log('postTitle :',postTitle)
    }

    const onChangeImage = (e) => {
        setPicture(e.target.files[0]);
        const preview = URL.createObjectURL(e.target.files[0])
        setImagePreview(preview)
    }

    const onChangeBody = (e) => {
        setPostBody(e.target.value)
        console.log('postBody :',postBody)
    }

    const postDataToAPI = () => {
        const data = new FormData()
        data.append('title',postTitle)
        data.append('image',picture)
        data.append('body',postBody)
        axios.post('http://localhost:4000/v1/blog/post',data)
        .then(res=>{
            console.log(res)
            if(res.status == 201){
                Swal.fire({
                    title: 'Sukses',
                    text:  'Data berhasil ditambahkan!',
                    icon:  'success',
                })
            }
        })
        .catch(err=>{
            if(err){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }
        })
    }

    const history = useHistory()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        postDataToAPI()
        
    } 
    return (
        <div className='blog-post'>
            <Link title='Kembali' onClick={() => history.push('/')} />
            <p className='title'>Create New Blog Post</p>
            <Input label='Post Title' name="title" onChange={onChangeTitle}/>
            <Upload type="file" id='image' name='image' onChange={onChangeImage} preview={imagePreview} />
            <TextArea name='body' onChange={onChangeBody} />
            <div className='button-action'>
            <Button title="Save" onClick={handleSubmit} />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default CreateBlog
