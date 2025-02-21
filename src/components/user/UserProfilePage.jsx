import UserInfo from './UserInfo'
import OrderHistoryContainer from './OrderHistoryContainer'
import { useState, useEffect } from 'react'
import api from '../../api'

const UserProfilePage = () => {

  const [userInfo, setUserInfo] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    api.get('user_info')
    .then(res => {
      console.log(res.data)
      setUserInfo(res.data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err.message)
      setLoading(false)
    })
  }, [])

  return (
    <div className='container my-5'>

        <UserInfo />

        <OrderHistoryContainer />

    </div>
  )
}

export default UserProfilePage