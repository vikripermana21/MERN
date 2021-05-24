import React from 'react'
import { LoginBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../component'
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory()
    return (
        <div className='main-page'>
            <div className='left'>
               <img src={LoginBg} className='bg-image' alt="imageBg" />
            </div>
            <div className='right'>
               <p className='title'>Login</p>
               <Input label="Email" placeholder="Please insert your email here " />
               <Gap height={16}/>
               <Input label="Password" placeholder="Please insert your password here " />
               <Gap height={50} />
               <Button title="Login" onClick={()=>history.push('/')} />
               <Gap  height={60} />
               <Link title={"Belum Punya Akun"} onClick={()=>history.push('/register')} />
            </div>
        </div>
    )
}

export default Login
