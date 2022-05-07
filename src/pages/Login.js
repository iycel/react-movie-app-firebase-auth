import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUpGoogle } from '../auth/firebase';
import { ClickButton, SubmitButton } from '../components/Button';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(email, password, navigate)
        console.log(email, password);
    }

    const handleGoogleLogin = () => {
        signUpGoogle(navigate);
    }

    return (
        <div className='d-flex justify-content-center align-items-center h-75 container border border-2 rounded mt-5'>
            <div className='h-50 w-50 text-center'>
                <form onSubmit={handleSubmit}>
                    <div className="btn-group mt-5" role="group" aria-label="Basic mixed styles example">
                        <ClickButton classNameClick={'btn btn-white btn-lg border border-3'} text={'Login'} classNameText={'fw-bold text-dark'} />
                        <ClickButton classNameClick={"btn btn-light btn-lg"} text={'Register'} classNameText={'fw-bold text-dark disabled'} handleClick={() => navigate('/register')} />
                    </div>
                    <div className="form-floating mb-3 mt-4">
                        <input type="email" className="form-control bg-light" id="floatingInput"
                            aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} required placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className=" form-floating mb-3">
                        <input type="password" className="form-control bg-light" id="inputPassword" onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <div className="d-grid gap-2" >
                        <SubmitButton text={'Login'} style={{ backgroundColor: '#FF6000', color: 'white' }} classNameSubmit={"btn mb-2 mt-3"} />
                        <ClickButton text={'With Google'} style={{ backgroundColor: '#FF6000', color: 'white' }} handleClick={() => handleGoogleLogin()} classNameClick={"btn mb-5"} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login