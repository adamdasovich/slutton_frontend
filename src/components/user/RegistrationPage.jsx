// src/components/Register.js
import React, { useState, useEffect } from 'react';
import api from '../../api'
import { useLocation, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        confirmed_password: '',
        city: '',
        state: '',
        address: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        api.post('register/', formData)
        .then(res => {
            console.log('Registration successful:', res.data);
            setFormData({
                username: '',
                email: '',
                first_name: '',
                last_name: '',
                password: '',
                confirmed_password: '',
                city: '',
                state: '',
                address: '',
                phone: '',
            });
            const from = location.state?.from?.pathname || '/';
        console.log('Attempting navigation to:', from);
        navigate(from, { replace: true });
        })
        .catch(err => {
            console.log(err.message)
        })
        
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit} autoComplete="off"> {/* Add autoComplete="off" */}
                <h2>Register</h2>
                {Object.entries(formData).map(([key, value]) => (
                    <div className="form-group" key={key}>
                        <label htmlFor={key}>{key.replace(/_/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}:</label>
                        <input
                            type={key === 'password' || key === 'confirmed_password' ? 'password' : 'text'}
                            name={key}
                            value={value}
                            onChange={handleChange}
                            autoComplete={key === 'password' || key === 'username' ? 'password' : 'off'}
                        />
                    </div>
                ))}
                <button className="submit-button" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;