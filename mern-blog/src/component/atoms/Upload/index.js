import React , {useState} from 'react'
import { LoginBg } from '../../../assets'
import './upload.scss'

const Upload = (props,{...rest}) => {
    return (

        <div className="upload">
            <img className='preview' src={props.preview} alt='preview' />
            <input type='file' onChange={props.onChange} {...rest} />
        </div>
    )
}

export default Upload
