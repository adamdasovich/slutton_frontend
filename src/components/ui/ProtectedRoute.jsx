import { jwtDecode } from 'jwt-decode'
import React from 'react'
import { useState, useEffect } from 'react'
import api from '../../api'
import Spinner from './Spinner'
import {Navigate, useLocation} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const [isAuthorised, setIsAuthorised] = useState()
  const location = useLocation()

  useEffect (() => {
    console.log('ProtectedRoute mounted/updated');
    auth().catch(() => {
      console.log('Auth failed')
      setIsAuthorised(false)
    })
  }, [location])

  const refreshToken = async() => {
    const refreshToken = localStorage.getItem('refresh')
    try {
        const res = await api.post('/token/refresh/', {
            refresh: refreshToken
        });
        if (res.status === 200) {
            localStorage.setItem('access', res.data.access)
            setIsAuthorised(true)
        }else {
            setIsAuthorised(false)
        }


    } catch (error) {
        console.log(error.message)
        setIsAuthorised(false)
    }

  }

  const auth = async() => {
    console.log('Running auth check')
    const token = localStorage.getItem('access')
    if(!token){
        console.log('No token found')
        setIsAuthorised(false)
        return;
    }
    const decoded = jwtDecode(token)
    const expiry_date = decoded.exp
    const current_time = Date.now() / 1000

    if(current_time > expiry_date){
        await refreshToken()
    }
    else {
        console.log('Auth successful, isAuth is set to true')
        setIsAuthorised(true)
    }
  }
  if(isAuthorised === null){
    return <Spinner />
  }

  if (isAuthorised === undefined) {
    console.log('Auth state is undefined, showing spinner');
    return <Spinner />;
  }
  
  return (
    isAuthorised ? children  : <Navigate to='/login' state={{from: location}} replace/>
  )
}

export default ProtectedRoute