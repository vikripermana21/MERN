import React from 'react'
import { RegisterBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../component'
import './register.scss'
import { useHistory } from "react-router-dom";

const Register = () => {
    const history = useHistory()
    return (
        <div className='main-page'>
            <div className='left'>
               <img src={RegisterBg} className='bg-image' alt="imageBg" />
            </div>
            <div className='right'>
               <p className='title'>Register</p>
               <Input label="Full Name" placeholder="Please insert your full name here " />
               <Gap height={16}/>
               <Input label="Email" placeholder="Please insert your email here " />
               <Gap height={16}/>
               <Input label="Password" placeholder="Please insert your password here " />
               <Gap height={50} />
               <Button title="Register" />
               <Gap  height={60} />
               <Link title={"Sudah Punya Akun"} onClick={()=>history.push('/login')} />
            </div>
        </div>
    )
}

export default Register
