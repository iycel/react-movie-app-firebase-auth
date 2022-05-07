import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../auth/firebase';
import { ClickButton, SubmitButton } from '../components/Button';

const Register = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        const displayName = `${firstName} ${lastName}`
        e.preventDefault();
        createUser(email, password, navigate, displayName);
        console.log(firstName, lastName, email, password);
    }

    const emailValidation = (val) => {
        // const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const regex = /\S+@\S+\.\S+/;
        return !(!val || regex.test(val) === false);
    }

    return (
        <div className='d-flex justify-content-center align-items-center h-75 container border border-2 rounded mt-5'>
            <div className='h-50 w-50 text-center'>
                <form onSubmit={handleSubmit}>
                    <div className="btn-group mt-5" role="group" aria-label="Basic mixed styles example">
                        <ClickButton classNameClick={'btn btn-white btn-lg border border-3'} text={'Login'} classNameText={'fw-bold text-dark'} handleClick={() => navigate('/login')} />
                        <ClickButton classNameClick={"btn btn-light btn-lg"} text={'Register'} classNameText={'fw-bold text-dark disabled'} />
                    </div>
                    <div className="form-floating mb-3 mt-4">
                        <input type="text" className="form-control bg-light" id="inputName" aria-describedby="nameHelp" placeholder='Enter your First Name' onChange={(e) => setFirstName(e.target.value)} required />
                        <label htmlFor="inputName">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control bg-light" id="inputLastName" aria-describedby="lastNameHelp" placeholder='Enter your Last Name' onChange={(e) => setLastName(e.target.value)} required />
                        <label htmlFor="inputLastName">Last Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control bg-light" id="inputEmail" aria-describedby="emailHelp" placeholder='Enter your Email address' onChange={(e) => setEmail(e.target.value)} required />
                        <label htmlFor="inputEmail" className="form-label d-inline">Email adress</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control bg-light" id="inputPassword" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required />
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                    </div>
                    <div className="d-grid gap-2">
                        {
                            (emailValidation(email) && password && firstName && lastName) ? (
                                <SubmitButton text={'Register'} style={{ backgroundColor: '#FF6000', color: 'white' }} classNameSubmit={"btn mb-5 mt-3"} />) : (
                                <SubmitButton text={'Register'} style={{ backgroundColor: '#919191', color: 'white' }} classNameSubmit={"btn mb-5 mt-3"} />
                            )
                        }
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Register;